import React from 'react'
import { Column, Layout } from 'flex-layouts'
import { injectIntl } from 'react-intl'
import { Block } from '@c3/admin-ui/src/content'
import { LogoX } from '@c3/admin-ui/src/logo'
import { Divider } from '@c3/admin-ui/src/divider'
import { SidebarItem, SidebarElement, SidebarGroup } from '@c3/admin-ui/src/sidebar'
import messages from '../messages'

const Sidebar = ({
  intl,
  currencies,
  users,
  content,
  onToggleCurrencies,
  onToggleContent,
  onToggleUsers,
}) => (
  <Block>
    <Column fill>
      <Layout basis='8px' />
      <Layout justify='center'>
        <LogoX height={28} />
      </Layout>
      <Layout basis='11px' />
      <Layout>
        <Divider color='lightGray' />
      </Layout>
      <Layout basis='24px' />
      <Layout>
        <SidebarItem
          header
          to='/'
        >
          {intl.formatMessage(messages.statistic)}
        </SidebarItem>
      </Layout>
      <Layout basis='7px' />
      <Layout>
        <SidebarElement
          header
          group
          onClick={onToggleCurrencies}
          value={currencies}
        >
          {intl.formatMessage(messages.currencies)}
        </SidebarElement>
      </Layout>
      <Layout basis='11px' />
      <Layout>
        <SidebarGroup isOpened={currencies}>
          <SidebarItem to='/currencies'>
            {intl.formatMessage(messages.currencies)}
          </SidebarItem>
          <Layout basis='3px' />
          <SidebarItem to='/operations'>
            {intl.formatMessage(messages.operations)}
          </SidebarItem>
          <Layout basis='3px' />
          <SidebarItem to='/applications'>
            {intl.formatMessage(messages.applications)}
          </SidebarItem>
          <Layout basis='23px' />
        </SidebarGroup>
      </Layout>
      <Layout>
        <SidebarElement
          header
          group
          onClick={onToggleUsers}
          value={users}
        >
          {intl.formatMessage(messages.users)}
        </SidebarElement>
      </Layout>
      <Layout basis='11px' />
      <Layout>
        <SidebarGroup isOpened={users}>
          <SidebarItem to='/users'>
            {intl.formatMessage(messages.users)}
          </SidebarItem>
          <Layout basis='3px' />
          <SidebarItem to='/verification'>
            {intl.formatMessage(messages.verification)}
          </SidebarItem>
          <Layout basis='3px' />
          <SidebarItem to='/black-list'>
            {intl.formatMessage(messages.blackList)}
          </SidebarItem>
          <Layout basis='23px' />
        </SidebarGroup>
      </Layout>
      <Layout>
        <SidebarElement
          header
          group
          onClick={onToggleContent}
          value={content}
        >
          {intl.formatMessage(messages.content)}
        </SidebarElement>
      </Layout>
      <Layout basis='11px' />
      <Layout>
        <SidebarGroup isOpened={content}>
          <SidebarItem to='/support-articles'>
            {intl.formatMessage(messages.supportArticles)}
          </SidebarItem>
          <Layout basis='3px' />
          <SidebarItem to='/support-applications'>
            {intl.formatMessage(messages.supportApplications)}
          </SidebarItem>
          <Layout basis='3px' />
          <SidebarItem to='/news'>
            {intl.formatMessage(messages.news)}
          </SidebarItem>
          <Layout basis='3px' />
          <SidebarItem to='/comments'>
            {intl.formatMessage(messages.comments)}
          </SidebarItem>
          <Layout basis='23px' />
        </SidebarGroup>
      </Layout>
      <Layout>
        <SidebarItem
          header
          to='/chat'
        >
          {intl.formatMessage(messages.chat)}
        </SidebarItem>
      </Layout>
      <Layout basis='7px' />
      <Layout>
        <SidebarItem
          header
          to='/settings'
        >
          {intl.formatMessage(messages.settings)}
        </SidebarItem>
      </Layout>
    </Column>
  </Block>
)

export default injectIntl(Sidebar)
