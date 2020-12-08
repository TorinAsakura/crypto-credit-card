import React from 'react'
import { StyleSheet } from 'elementum'
import { Column, Row, Layout } from 'flex-layouts'
import { Progress } from '@c3/ui/src/progress'
import { Locale } from '@c3/ui/src/locale'
import { Logo } from '@c3/ui/src/logo'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    height: '100%',
    display: 'flex',
    background: 'linear-gradient(354.25deg, #224A3F 0%, #1D3E46 100%)',
    boxShadow: '0 0 2px 0 rgba(13,117,109,0.37)',
    overflowY: 'auto',
  },
})

const App = ({
  locale,
  progress,
  children,
  onChange,
}) => (
  <div className={styles()}>
    <Progress
      absolute
      percent={progress}
    />
    <Column>
      <Layout basis='16px' />
      <Layout>
        <Row>
          <Layout shrink={1} grow={1} />
          <Layout>
            <Locale
              width={18}
              name={locale}
              onChange={onChange}
            />
          </Layout>
          <Layout basis='16px' />
        </Row>
      </Layout>
      <Layout basis='33px' />
      <Layout justify='center'>
        <Logo height={40} />
      </Layout>
      <Layout basis='40px' />
      <Layout>
        <Row>
          <Layout basis='24px' />
          <Layout shrink={1} grow={1}>
            {children}
          </Layout>
          <Layout basis='24px' />
        </Row>
      </Layout>
    </Column>
  </div>
)

export default App
