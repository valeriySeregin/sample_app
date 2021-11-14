const { environment } = require('@rails/webpacker')

const webpacke = require('webpack')
environment.plugins.prepend('Provide',
  new webpacke.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery'
  })
)

module.exports = environment
