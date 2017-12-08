module.exports = file => () => import(/* webpackChunkName: "kalix-art-views" */'@/views/' + file + '.vue')
