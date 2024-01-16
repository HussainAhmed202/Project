__all__ = ['convert']

# Don't look below, you will not understand this Python code :) I don't.

from js2py.pyjs import *
# setting scope
var = Scope( JS_BUILTINS )
set_global_object(var)

# Code follows:
var.registers(['options', 'executeCPP', 'executePython', 'compiler', 'getResult', 'executeJava'])
@Js
def PyJsHoisted_executeCPP_(request, this, arguments, var=var):
    var = Scope({'request':request, 'this':this, 'arguments':arguments}, var)
    var.registers(['request', 'envDataCPP'])
    var.put('envDataCPP', Js({'OS':Js('windows'),'cmd':Js('g++'),'options':Js({'timeout':Js(1000.0)})}))
    @Js
    def PyJs_anonymous_0_(resolve, reject, this, arguments, var=var):
        var = Scope({'resolve':resolve, 'reject':reject, 'this':this, 'arguments':arguments}, var)
        var.registers(['resolve', 'reject'])
        if PyJsStrictEq(var.get('request').get('input'),Js('')):
            @Js
            def PyJs_anonymous_1_(data, this, arguments, var=var):
                var = Scope({'data':data, 'this':this, 'arguments':arguments}, var)
                var.registers(['data'])
                var.get('resolve')(var.get('data'))
            PyJs_anonymous_1_._set_name('anonymous')
            var.get('compiler').callprop('compileCPP', var.get('envDataCPP'), var.get('request').get('code'), PyJs_anonymous_1_)
        else:
            @Js
            def PyJs_anonymous_2_(data, this, arguments, var=var):
                var = Scope({'data':data, 'this':this, 'arguments':arguments}, var)
                var.registers(['data'])
                var.get('resolve')(var.get('data'))
            PyJs_anonymous_2_._set_name('anonymous')
            var.get('compiler').callprop('compileCPPWithInput', var.get('envDataCPP'), var.get('request').get('code'), var.get('request').get('input'), PyJs_anonymous_2_)
    PyJs_anonymous_0_._set_name('anonymous')
    return var.get('Promise').create(PyJs_anonymous_0_)
PyJsHoisted_executeCPP_.func_name = 'executeCPP'
var.put('executeCPP', PyJsHoisted_executeCPP_)
@Js
def PyJsHoisted_executeJava_(request, this, arguments, var=var):
    var = Scope({'request':request, 'this':this, 'arguments':arguments}, var)
    var.registers(['envDataJava', 'request'])
    var.put('envDataJava', Js({'OS':Js('windows'),'cmd':Js('javac'),'options':Js({'timeout':Js(1000.0)})}))
    @Js
    def PyJs_anonymous_3_(resolve, reject, this, arguments, var=var):
        var = Scope({'resolve':resolve, 'reject':reject, 'this':this, 'arguments':arguments}, var)
        var.registers(['resolve', 'reject'])
        if PyJsStrictEq(var.get('request').get('input'),Js('')):
            @Js
            def PyJs_anonymous_4_(data, this, arguments, var=var):
                var = Scope({'data':data, 'this':this, 'arguments':arguments}, var)
                var.registers(['data'])
                var.get('resolve')(var.get('data'))
            PyJs_anonymous_4_._set_name('anonymous')
            var.get('compiler').callprop('compileJava', var.get('envDataJava'), var.get('request').get('code'), PyJs_anonymous_4_)
        else:
            @Js
            def PyJs_anonymous_5_(data, this, arguments, var=var):
                var = Scope({'data':data, 'this':this, 'arguments':arguments}, var)
                var.registers(['data'])
                var.get('resolve')(var.get('data'))
            PyJs_anonymous_5_._set_name('anonymous')
            var.get('compiler').callprop('compileJavaWithInput', var.get('envDataJava'), var.get('request').get('code'), var.get('request').get('input'), PyJs_anonymous_5_)
    PyJs_anonymous_3_._set_name('anonymous')
    return var.get('Promise').create(PyJs_anonymous_3_)
PyJsHoisted_executeJava_.func_name = 'executeJava'
var.put('executeJava', PyJsHoisted_executeJava_)
@Js
def PyJsHoisted_executePython_(request, this, arguments, var=var):
    var = Scope({'request':request, 'this':this, 'arguments':arguments}, var)
    var.registers(['request', 'envDataPython'])
    var.put('envDataPython', Js({'OS':Js('windows'),'cmd':Js('python3'),'options':Js({'timeout':Js(1000.0)})}))
    @Js
    def PyJs_anonymous_6_(resolve, reject, this, arguments, var=var):
        var = Scope({'resolve':resolve, 'reject':reject, 'this':this, 'arguments':arguments}, var)
        var.registers(['resolve', 'reject'])
        if PyJsStrictEq(var.get('request').get('input'),Js('')):
            @Js
            def PyJs_anonymous_7_(data, this, arguments, var=var):
                var = Scope({'data':data, 'this':this, 'arguments':arguments}, var)
                var.registers(['data'])
                var.get('resolve')(var.get('data'))
            PyJs_anonymous_7_._set_name('anonymous')
            var.get('compiler').callprop('compilePython', var.get('envDataPython'), var.get('request').get('code'), PyJs_anonymous_7_)
        else:
            @Js
            def PyJs_anonymous_8_(data, this, arguments, var=var):
                var = Scope({'data':data, 'this':this, 'arguments':arguments}, var)
                var.registers(['data'])
                var.get('resolve')(var.get('data'))
            PyJs_anonymous_8_._set_name('anonymous')
            var.get('compiler').callprop('compilePythonWithInput', var.get('envDataPython'), var.get('request').get('code'), var.get('request').get('input'), PyJs_anonymous_8_)
    PyJs_anonymous_6_._set_name('anonymous')
    return var.get('Promise').create(PyJs_anonymous_6_)
PyJsHoisted_executePython_.func_name = 'executePython'
var.put('executePython', PyJsHoisted_executePython_)
@Js
def PyJsHoisted_getResult_(request, this, arguments, var=var):
    var = Scope({'request':request, 'this':this, 'arguments':arguments}, var)
    var.registers(['request'])
    while 1:
        SWITCHED = False
        CONDITION = (var.get('request').get('language'))
        if SWITCHED or PyJsStrictEq(CONDITION, Js('CPP')):
            SWITCHED = True
            try:
                return var.get('executeCPP')(var.get('request'))
            except PyJsException as PyJsTempException:
                PyJsHolder_6572726f72_54248402 = var.own.get('error')
                var.force_own_put('error', PyExceptionToJs(PyJsTempException))
                try:
                    var.get('console').callprop('error', var.get('error'))
                finally:
                    if PyJsHolder_6572726f72_54248402 is not None:
                        var.own['error'] = PyJsHolder_6572726f72_54248402
                    else:
                        del var.own['error']
                    del PyJsHolder_6572726f72_54248402
            break
        if SWITCHED or PyJsStrictEq(CONDITION, Js('Java')):
            SWITCHED = True
            try:
                return var.get('executeJava')(var.get('request'))
            except PyJsException as PyJsTempException:
                PyJsHolder_6572726f72_6596415 = var.own.get('error')
                var.force_own_put('error', PyExceptionToJs(PyJsTempException))
                try:
                    var.get('console').callprop('error', var.get('error'))
                finally:
                    if PyJsHolder_6572726f72_6596415 is not None:
                        var.own['error'] = PyJsHolder_6572726f72_6596415
                    else:
                        del var.own['error']
                    del PyJsHolder_6572726f72_6596415
            break
        if SWITCHED or PyJsStrictEq(CONDITION, Js('Python')):
            SWITCHED = True
            try:
                return var.get('executePython')(var.get('request'))
            except PyJsException as PyJsTempException:
                PyJsHolder_6572726f72_15697593 = var.own.get('error')
                var.force_own_put('error', PyExceptionToJs(PyJsTempException))
                try:
                    var.get('console').callprop('error', var.get('error'))
                finally:
                    if PyJsHolder_6572726f72_15697593 is not None:
                        var.own['error'] = PyJsHolder_6572726f72_15697593
                    else:
                        del var.own['error']
                    del PyJsHolder_6572726f72_15697593
            break
        if True:
            SWITCHED = True
            break
        SWITCHED = True
        break
PyJsHoisted_getResult_.func_name = 'getResult'
var.put('getResult', PyJsHoisted_getResult_)
var.put('compiler', var.get('require')(Js('compilex')))
var.put('options', Js({'stats':Js(True)}))
var.get('compiler').callprop('init', var.get('options'))
pass
pass
pass
pass
@Js
def PyJs_anonymous_9_(error, this, arguments, var=var):
    var = Scope({'error':error, 'this':this, 'arguments':arguments}, var)
    var.registers(['error'])
    var.get('console').callprop('error', var.get('error'))
PyJs_anonymous_9_._set_name('anonymous')
@Js
def PyJs_anonymous_10_(res, this, arguments, var=var):
    var = Scope({'res':res, 'this':this, 'arguments':arguments}, var)
    var.registers(['res'])
    var.get('console').callprop('log', var.get('res'))
PyJs_anonymous_10_._set_name('anonymous')
var.get('getResult')(var.get('request')).callprop('then', PyJs_anonymous_10_).callprop('catch', PyJs_anonymous_9_)
pass


# Add lib to the module scope
convert = var.to_python()