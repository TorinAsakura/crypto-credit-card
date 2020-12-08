import React from 'react'
import { StyleSheet } from 'elementum'
import { Column, Row, Layout } from 'flex-layouts'
import { Progress } from '@c3/ui/src/progress'
import { Divider } from '@c3/ui/src/divider'
import { Locale } from '@c3/ui/src/locale'
import { Logo } from '@c3/ui/src/logo'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(354.25deg, #224A3F 0%, #1D3E46 100%)',
    boxShadow: '0 0 2px 0 rgba(13,117,109,0.37)',
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
      <Layout basis='414px'>
        <Row justify='center'>
          <Layout>
            <Column>
              <Layout basis='85px' />
              <Layout justify='center' >
                <Row>
                  <Layout basis='140px' />
                  <Layout>
                    <Locale
                      width={18}
                      name={locale}
                      onChange={onChange}
                    />
                  </Layout>
                </Row>
              </Layout>
              <Layout basis='60px' />
              <Layout>
                <Logo height={76} />
              </Layout>
            </Column>
          </Layout>
          <Layout basis='56px' />
          <Divider vertical transparent />
          <Layout basis='56px' />
          <Layout basis='327px'>
            {children}
          </Layout>
        </Row>
      </Layout>
      <Layout basis='140px' />
    </Column>
  </div>
)

export default App
