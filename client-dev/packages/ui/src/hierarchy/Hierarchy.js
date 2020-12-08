/* eslint-disable no-param-reassign */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/sort-comp */
import React, { Component } from 'react'
import { StyleSheet } from 'elementum'
import * as d3Selection from 'd3-selection'
import * as d3Hierarchy from 'd3-hierarchy'
import * as d3Zoom from 'd3-zoom'
import { withMeasure } from '../measure'
import { diagonal } from './utils'
import Toggle from './Toggle'

const styles = StyleSheet.create({
  self: {
    background: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
    '& .node circle': {
      strokeWidth: '3px',
      cursor: 'pointer',
    },
    '& .node text': {
      font: '13px sans-serif',
      cursor: 'pointer',
    },
    '& .link': {
      fill: 'none',
      stroke: '#ccc',
      strokeWidth: '1px',
    },
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
})

let index = 0

const getColor = ({ data }) => data.plan === 'business' ? 'E6A70D' : '#214940'

class Hierarchy extends Component {
  static defaultProps = {
    width: 750,
    height: 450,
    duration: 750,
  }

  scale = 1

  constructor(props) {
    super(props)

    this.state = {
      width: props.width,
      height: props.height,
    }
  }

  componentDidMount() {
    const { data, title } = this.props
    const { width, height } = this.state

    const root = d3Hierarchy.hierarchy(data, d => d.children)

    root.x0 = 0
    root.y0 = -120
    root.data.name = title

    const treemap = d3Hierarchy.tree(root).size([width, height]).nodeSize([24, 10])

    const collapse = (d) => {
      d.selected = false

      if (d.children) {
        d._children = d.children
        d._children.forEach(collapse)
        d.children = null
      }
    }

    (root.children || []).forEach(collapse)

    this.treemap = treemap
    this.root = root

    this.update(root)
    this.centerNode(root)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.width !== this.props.width || nextProps.height !== this.props.height) {
      this.setState({
        width: nextProps.width,
        height: nextProps.height,
      })
    }

    if (nextProps.data !== this.props.data) {
      const createNode = (child, parent) => {
        const node = d3Hierarchy.tree(child, d => d.children)

        node.depth = parent.depth + 1
        node.height = parent.height - 1
        node.parent = parent
        node.data = child

        return node
      }

      nextProps.data.children.forEach((child) => {
        const node = d3Hierarchy.tree(child, d => d.children)

        node.depth = this.root.depth + 1
        node.height = this.root.height - 1
        node.parent = this.root
        node.data = child

        if (child.children && child.children.length > 0) {
          node._children = child.children.map(item => createNode(item, node))
        }

        if (!this.root.children) {
          this.root.children = []
          this.root.data.children = []
        }

        this.root.children.push(node)
        this.root.data.children.push(node.data)
      })

      this.update(this.root)
    }
  }

  onFullScreen = () => {
    const { width, height } = this.props
    const { fullScreen } = this.state

    if (fullScreen) {
      this.setState({
        width,
        height,
        fullScreen: false,
      })
    } else {
      this.setState({
        width: document.body.clientWidth,
        height: document.body.clientHeight,
        fullScreen: true,
      })
    }
  }

  onToggle = (d) => {
    if (d.children) {
      d._children = d.children
      d.children = null
    } else {
      d.children = d._children
      d._children = null
    }

    this.update(d)
  }

  onClick = (d) => {
    const { onClick } = this.props

    this.update(d, true)

    if (onClick) {
      onClick(d.data)
    }
  }

  onDoubleClick = (d) => {
    const { onDoubleClick } = this.props

    this.update(d, true)

    if (onDoubleClick) {
      onDoubleClick(d.data)
    }
  }

  onZoomed = () => {
    const { x, y, k } = d3Selection.event.transform

    this.scale = k

    this.element.attr('transform', `translate(${x},${y}) scale(${k})`)
  }

  onMountSvg = (element) => {
    this.container = d3Selection.select(element)
    this.zoom = d3Zoom.zoom().scaleExtent([0.1, 3]).on('zoom', this.onZoomed)

    d3Selection.select(element).call(this.zoom)
  }

  onSetRef = (element) => {
    this.element = d3Selection.select(element)
  }

  centerNode = (source) => {
    const { width, height } = this.props

    const scale = this.scale || 1
    const x = 80 || ((-source.y0) * scale) + (width / 10)
    const y = ((-source.x0) * scale) + (height / 2)

    this.zoom.translateBy(this.container, x, y)
  }

  update = (source, selected) => {
    const { duration } = this.props
    const { treemap, root, element: svg } = this

    const treeData = treemap(root)

    const nodes = treeData.descendants()
    const links = treeData.descendants().slice(1)

    nodes.forEach((d) => {
      if (selected) {
        if (d !== source) {
          d.selected = false
        } else {
          d.selected = true
        }
      }

      d.y = d.depth * 260
    })

    /* eslint-disable no-plusplus */
    /* eslint-disable no-return-assign */
    const node = svg.selectAll('g.node')
      .data(nodes, d => d.id || (d.id = ++index))
    /* eslint-enable no-plusplus */
    /* eslint-enable no-return-assign */

    const nodeEnter = node
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', () => `translate(${source.y0}, ${source.x0})`)

    nodeEnter
      .append('circle')
      .attr('class', 'node')
      .attr('r', 8)
      .style('fill', d => d._children ? getColor(d) : '#fff')
      .style('stroke', getColor)
      .on('click', this.onToggle)

    nodeEnter
      .append('text')
      .attr('dy', '.35em')
      .attr('x', (d, depth) => {
        if (depth === 0) {
          return -8
        }

        return d.children || d._children ? -13 : 16
      })
      .attr('y', (d, depth) => {
        if (depth === 0) {
          return -24
        }

        return d.children || d._children ? -12 : 0
      })
      .attr('text-anchor', d => d.children || d._children ? 'end' : 'start')
      .attr('fill', getColor)
      .text(d => d.data.name)
      .on('click', this.onClick)
      .on('dblclick', this.onDoubleClick)

    const nodeUpdate = nodeEnter.merge(node)

    nodeUpdate.transition()
      .duration(duration)
      .attr('transform', d => `translate(${d.y}, ${d.x})`)

    nodeUpdate.select('circle.node')
      .attr('r', 8)
      .style('fill', d => d._children ? getColor(d) : '#fff') // eslint-disable-line no-confusing-arrow
      .attr('cursor', 'pointer')

    nodeUpdate.select('text')
      .style('fill', d => d.selected ? '#0288D1' : null)

    const nodeExit = node
      .exit()
      .transition()
      .duration(duration)
      .attr('transform', () => `translate(${source.y}, ${source.x})`)
      .remove()

    nodeExit
      .select('circle')
      .attr('r', 1e-6)

    nodeExit
      .select('text')
      .style('fill-opacity', 1e-6)

    const link = svg.selectAll('path.link').data(links, d => d.id)

    const linkEnter = link
      .enter()
      .insert('path', 'g')
      .attr('class', 'link')
      .style('stroke', n => n.data.color)
      .attr('d', () => diagonal({ x: source.x0, y: source.y0 }, { x: source.x0, y: source.y0 }))

    const linkUpdate = linkEnter.merge(link)

    linkUpdate
      .transition()
      .duration(duration)
      .attr('d', d => diagonal(d, d.parent))

    link
      .exit()
      .transition()
      .duration(duration)
      .attr('d', () => diagonal({ x: source.x, y: source.y }, { x: source.x, y: source.y }))
      .remove()

    nodes.forEach((d) => {
      d.x0 = d.x
      d.y0 = d.y
    })
  }

  render() {
    const { width, height, fullScreen } = this.state

    return (
      <div
        style={{ width, height }}
        className={styles({ fullScreen })}
      >
        <Toggle
          fullScreen={fullScreen}
          onClick={this.onFullScreen}
        />
        <svg
          width={width}
          height={height}
          ref={this.onMountSvg}
        >
          <g
            ref={this.onSetRef}
          />
        </svg>
      </div>
    )
  }
}

export default withMeasure(Hierarchy)
