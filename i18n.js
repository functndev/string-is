const common = ['common', 'layout-footer', 'layout-header']

module.exports = {
  defaultLocale: 'en',
  locales: ['en'],
  pages: {
    '/': [
      ...common,
      'domain-convert-converterSelector',
      'domain-convert-inputForm',
      'domain-convert-outputForm',
      'domain-convert-outputs-cssOutput',
      'domain-convert-outputs-csvOutput',
      'domain-convert-outputs-datetimeOutput',
      'domain-convert-outputs-htmlOutput',
      'domain-convert-outputs-javaScriptOutput',
      'domain-convert-outputs-jsonOutput',
      'domain-convert-outputs-jwtOutput',
      'domain-convert-outputs-markdownOutput',
      'domain-convert-outputs-numberBaseOutput',
      'domain-convert-outputs-shaOutput',
      'domain-convert-outputs-yamlOutput',
      'lib-converters-commands',
      'lib-converters-results',
      'pages-convert',
    ],
    '/404': [...common, 'pages-errors-notFound'],
    '/about': [...common, 'pages-about'],
    '/privacy': [...common, 'pages-privacy'],
    '/security': [...common, 'pages-security'],
    '/terms': [...common, 'pages-terms'],
  },
}
