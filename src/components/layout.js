const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="The Gray Web Blog"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)
TemplateWrapper.propTypes = {
  children: PropTypes.func,
}
export default TemplateWrapper
