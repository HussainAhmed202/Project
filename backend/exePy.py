__all__ = ['exePy']

# Don't look below, you will not understand this Python code :) I don't.

from js2py.pyjs import *
# setting scope
var = Scope( JS_BUILTINS )
set_global_object(var)

# Code follows:
var.registers(['compiler', 'options', 'executePython'])
@Js
def PyJsHoisted_executePython_(request, this, arguments, var=var):
    var = Scope({'request':request, 'this':this, 'arguments':arguments}, var)
    var.registers(['envDataJava', 'request'])
    var.put('envDataJava', Js({'OS':Js('windows'),'cmd':Js('python3'),'options':Js({'timeout':Js(1000.0)})}))
    if PyJsStrictEq(var.get('request').get('input'),Js('')):
        @Js
        def PyJs_anonymous_0_(data, this, arguments, var=var):
            var = Scope({'data':data, 'this':this, 'arguments':arguments}, var)
            var.registers(['data'])
            return var.get('data')
        PyJs_anonymous_0_._set_name('anonymous')
        var.get('compiler').callprop('compilePython', var.get('envDataJava'), var.get('request').get('code'), PyJs_anonymous_0_)
    else:
        @Js
        def PyJs_anonymous_1_(data, this, arguments, var=var):
            var = Scope({'data':data, 'this':this, 'arguments':arguments}, var)
            var.registers(['data'])
            return var.get('data')
        PyJs_anonymous_1_._set_name('anonymous')
        var.get('compiler').callprop('compilePythonWithInput', var.get('envDataJava'), var.get('request').get('code'), var.get('request').get('input'), PyJs_anonymous_1_)
PyJsHoisted_executePython_.func_name = 'executePython'
var.put('executePython', PyJsHoisted_executePython_)
var.put('compiler', var.get('require')(Js('compilex')))
var.put('options', Js({'stats':Js(True)}))
var.get('compiler').callprop('init', var.get('options'))
pass
pass
pass


# Add lib to the module scope
exePy = var.to_python()