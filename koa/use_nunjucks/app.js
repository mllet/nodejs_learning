const nunjucks = require('nunjucks');
const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();

function createEnv(path, opts) {
    var autoescape = opts.autoescape == undefined ? true : opts.autoescape,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader('views', {
                noCache: noCache,
                watch: watch,
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            });
    if (opts.filters) {
        for (var f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

var env = createEnv('views', {
    watch: true,
    filters: {
        hex: function (n) {
            return '0x' + n.toString(16);
        }
    }
});
var s = env.render('hello.html', {
    name: '<Nunjucks>',
    fruits: ['Apple', 'Pear', 'Banana'],
    count: 12000
});
// console.log(s);
router.get('/', function (req, res) {
    env.render('hello.html', {
        name: '<Nunjucks>',
        fruits: ['Apple', 'Pear', 'Banana'],
        count: 12000
    });
});
app.use(router.routes());
app.listen(9000);
