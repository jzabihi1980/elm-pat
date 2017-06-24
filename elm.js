
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		return '<function>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$singleton = function (value) {
	return {
		ctor: '::',
		_0: value,
		_1: {ctor: '[]'}
	};
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _elm_lang$core$Native_List.fromArray(is);
}


function toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return intErr(s);
	}

	// if hex
	var c = s[0];
	if (c === '0' && s[1] === 'x')
	{
		for (var i = 2; i < len; ++i)
		{
			var c = s[i];
			if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
			{
				continue;
			}
			return intErr(s);
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
	{
		return intErr(s);
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return intErr(s);
		}
	}

	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function intErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
}


function toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return floatErr(s);
	}
	var n = +s;
	// faster isNaN check
	return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
}

function floatErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
}


function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(value)
	{
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		currentSend(result._0);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';

var localDoc = typeof document !== 'undefined' ? document : {};


////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else if (key === 'className')
		{
			var classes = facts[key];
			facts[key] = typeof classes === 'undefined'
				? entry.value
				: classes + ' ' + entry.value;
		}
 		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (a.options !== b.options)
	{
		if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}


function mapProperty(func, property)
{
	if (property.key !== EVENT_KEY)
	{
		return property;
	}
	return on(
		property.realKey,
		property.value.options,
		A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
	);
}


////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = { tagger: tagger, parent: eventNode };
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return localDoc.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			if (typeof domNode.elm_event_node_ref !== 'undefined')
			{
				domNode.elm_event_node_ref.tagger = patch.data;
			}
			else
			{
				domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
			}
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = localDoc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}


// PROGRAMS

var program = makeProgram(checkNoFlags);
var programWithFlags = makeProgram(checkYesFlags);

function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}

function staticProgram(vNode)
{
	var nothing = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		_elm_lang$core$Platform_Cmd$none
	);
	return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
		init: nothing,
		view: function() { return vNode; },
		update: F2(function() { return nothing; }),
		subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
	})();
}


// FLAG CHECKERS

function checkNoFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flags === 'undefined')
		{
			return init;
		}

		var errorMessage =
			'The `' + moduleName + '` module does not need flags.\n'
			+ 'Initialize it with no arguments and you should be all set!';

		crash(errorMessage, domNode);
	};
}

function checkYesFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flagDecoder === 'undefined')
		{
			var errorMessage =
				'Are you trying to sneak a Never value into Elm? Trickster!\n'
				+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
				+ 'Use `program` instead if you do not want flags.'

			crash(errorMessage, domNode);
		}

		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Ok')
		{
			return init(result._0);
		}

		var errorMessage =
			'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
			+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
			+ result._0;

		crash(errorMessage, domNode);
	};
}

function crash(errorMessage, domNode)
{
	if (domNode)
	{
		domNode.innerHTML =
			'<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
			+ '</div>';
	}

	throw new Error(errorMessage);
}


//  NORMAL SETUP

function normalSetup(impl, object, moduleName, flagChecker)
{
	object['embed'] = function embed(node, flags)
	{
		while (node.lastChild)
		{
			node.removeChild(node.lastChild);
		}

		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update,
			impl.subscriptions,
			normalRenderer(node, impl.view)
		);
	};

	object['fullscreen'] = function fullscreen(flags)
	{
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update,
			impl.subscriptions,
			normalRenderer(document.body, impl.view)
		);
	};
}

function normalRenderer(parentNode, view)
{
	return function(tagger, initialModel)
	{
		var eventNode = { tagger: tagger, parent: undefined };
		var initialVirtualNode = view(initialModel);
		var domNode = render(initialVirtualNode, eventNode);
		parentNode.appendChild(domNode);
		return makeStepper(domNode, view, initialVirtualNode, eventNode);
	};
}


// STEPPER

var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };

function makeStepper(domNode, view, initialVirtualNode, eventNode)
{
	var state = 'NO_REQUEST';
	var currNode = initialVirtualNode;
	var nextModel;

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var nextNode = view(nextModel);
				var patches = diff(currNode, nextNode);
				domNode = applyPatches(domNode, currNode, patches, eventNode);
				currNode = nextNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return function stepper(model)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextModel = model;
	};
}


// DEBUG SETUP

function debugSetup(impl, object, moduleName, flagChecker)
{
	object['fullscreen'] = function fullscreen(flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};

	object['embed'] = function fullscreen(node, flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};
}

function scrollTask(popoutRef)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var doc = popoutRef.doc;
		if (doc)
		{
			var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
{
	return function(tagger, initialModel)
	{
		var appEventNode = { tagger: tagger, parent: undefined };
		var eventNode = { tagger: tagger, parent: undefined };

		// make normal stepper
		var appVirtualNode = view(initialModel);
		var appNode = render(appVirtualNode, appEventNode);
		parentNode.appendChild(appNode);
		var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

		// make overlay stepper
		var overVirtualNode = viewIn(initialModel)._1;
		var overNode = render(overVirtualNode, eventNode);
		parentNode.appendChild(overNode);
		var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
		var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

		// make debugger stepper
		var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

		return function stepper(model)
		{
			appStepper(model);
			overStepper(model);
			debugStepper(model);
		}
	};
}

function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
{
	var curr;
	var domNode;

	return function stepper(model)
	{
		if (!model.isDebuggerOpen)
		{
			return;
		}

		if (!popoutRef.doc)
		{
			curr = view(model);
			domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
			return;
		}

		// switch to document of popout
		localDoc = popoutRef.doc;

		var next = view(model);
		var patches = diff(curr, next);
		domNode = applyPatches(domNode, curr, patches, eventNode);
		curr = next;

		// switch back to normal document
		localDoc = document;
	};
}

function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
{
	var w = 900;
	var h = 360;
	var x = screen.width - w;
	var y = screen.height - h;
	var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

	// switch to window document
	localDoc = debugWindow.document;

	popoutRef.doc = localDoc;
	localDoc.title = 'Debugger - ' + moduleName;
	localDoc.body.style.margin = '0';
	localDoc.body.style.padding = '0';
	var domNode = render(virtualNode, eventNode);
	localDoc.body.appendChild(domNode);

	localDoc.addEventListener('keydown', function(event) {
		if (event.metaKey && event.which === 82)
		{
			window.location.reload();
		}
		if (event.which === 38)
		{
			eventNode.tagger({ ctor: 'Up' });
			event.preventDefault();
		}
		if (event.which === 40)
		{
			eventNode.tagger({ ctor: 'Down' });
			event.preventDefault();
		}
	});

	function close()
	{
		popoutRef.doc = undefined;
		debugWindow.close();
	}
	window.addEventListener('unload', close);
	debugWindow.addEventListener('unload', function() {
		popoutRef.doc = undefined;
		window.removeEventListener('unload', close);
		eventNode.tagger({ ctor: 'Close' });
	});

	// switch back to the normal document
	localDoc = document;

	return domNode;
}


// BLOCK EVENTS

function wrapViewIn(appEventNode, overlayNode, viewIn)
{
	var ignorer = makeIgnorer(overlayNode);
	var blocking = 'Normal';
	var overflow;

	var normalTagger = appEventNode.tagger;
	var blockTagger = function() {};

	return function(model)
	{
		var tuple = viewIn(model);
		var newBlocking = tuple._0.ctor;
		appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
		if (blocking !== newBlocking)
		{
			traverse('removeEventListener', ignorer, blocking);
			traverse('addEventListener', ignorer, newBlocking);

			if (blocking === 'Normal')
			{
				overflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}

			if (newBlocking === 'Normal')
			{
				document.body.style.overflow = overflow;
			}

			blocking = newBlocking;
		}
		return tuple._1;
	}
}

function traverse(verbEventListener, ignorer, blocking)
{
	switch(blocking)
	{
		case 'Normal':
			return;

		case 'Pause':
			return traverseHelp(verbEventListener, ignorer, mostEvents);

		case 'Message':
			return traverseHelp(verbEventListener, ignorer, allEvents);
	}
}

function traverseHelp(verbEventListener, handler, eventNames)
{
	for (var i = 0; i < eventNames.length; i++)
	{
		document.body[verbEventListener](eventNames[i], handler, true);
	}
}

function makeIgnorer(overlayNode)
{
	return function(event)
	{
		if (event.type === 'keydown' && event.metaKey && event.which === 82)
		{
			return;
		}

		var isScroll = event.type === 'scroll' || event.type === 'wheel';

		var node = event.target;
		while (node !== null)
		{
			if (node.className === 'elm-overlay-message-details' && isScroll)
			{
				return;
			}

			if (node === overlayNode && !isScroll)
			{
				return;
			}
			node = node.parentNode;
		}

		event.stopPropagation();
		event.preventDefault();
	}
}

var mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var allEvents = mostEvents.concat('wheel', 'scroll');


return {
	node: node,
	text: text,
	custom: custom,
	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),
	mapProperty: F2(mapProperty),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	program: program,
	programWithFlags: programWithFlags,
	staticProgram: staticProgram
};

}();

var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
};
var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
};
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
var _elm_lang$html$Html$beginnerProgram = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$html$Html$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p1.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p1.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p1.view,
			subscriptions: function (_p2) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type_ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

//import Maybe, Native.List //

var _elm_lang$core$Native_Regex = function() {

function escape(str)
{
	return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function caseInsensitive(re)
{
	return new RegExp(re.source, 'gi');
}
function regex(raw)
{
	return new RegExp(raw, 'g');
}

function contains(re, string)
{
	return string.match(re) !== null;
}

function find(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex === re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		out.push({
			match: result[0],
			submatches: _elm_lang$core$Native_List.fromArray(subs),
			index: result.index,
			number: number
		});
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

function replace(n, re, replacer, string)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		return replacer({
			match: match,
			submatches: _elm_lang$core$Native_List.fromArray(submatches),
			index: arguments[arguments.length - 2],
			number: count
		});
	}
	return string.replace(re, jsReplacer);
}

function split(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	if (n === Infinity)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(re));
	}
	var string = str;
	var result;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		if (!(result = re.exec(string))) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

return {
	regex: regex,
	caseInsensitive: caseInsensitive,
	escape: escape,

	contains: F2(contains),
	find: F3(find),
	replace: F4(replace),
	split: F3(split)
};

}();

var _elm_lang$core$Regex$split = _elm_lang$core$Native_Regex.split;
var _elm_lang$core$Regex$replace = _elm_lang$core$Native_Regex.replace;
var _elm_lang$core$Regex$find = _elm_lang$core$Native_Regex.find;
var _elm_lang$core$Regex$contains = _elm_lang$core$Native_Regex.contains;
var _elm_lang$core$Regex$caseInsensitive = _elm_lang$core$Native_Regex.caseInsensitive;
var _elm_lang$core$Regex$regex = _elm_lang$core$Native_Regex.regex;
var _elm_lang$core$Regex$escape = _elm_lang$core$Native_Regex.escape;
var _elm_lang$core$Regex$Match = F4(
	function (a, b, c, d) {
		return {match: a, submatches: b, index: c, number: d};
	});
var _elm_lang$core$Regex$Regex = {ctor: 'Regex'};
var _elm_lang$core$Regex$AtMost = function (a) {
	return {ctor: 'AtMost', _0: a};
};
var _elm_lang$core$Regex$All = {ctor: 'All'};

var _elm_lang$core$Set$foldr = F3(
	function (f, b, _p0) {
		var _p1 = _p0;
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (k, _p2, b) {
					return A2(f, k, b);
				}),
			b,
			_p1._0);
	});
var _elm_lang$core$Set$foldl = F3(
	function (f, b, _p3) {
		var _p4 = _p3;
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, _p5, b) {
					return A2(f, k, b);
				}),
			b,
			_p4._0);
	});
var _elm_lang$core$Set$toList = function (_p6) {
	var _p7 = _p6;
	return _elm_lang$core$Dict$keys(_p7._0);
};
var _elm_lang$core$Set$size = function (_p8) {
	var _p9 = _p8;
	return _elm_lang$core$Dict$size(_p9._0);
};
var _elm_lang$core$Set$member = F2(
	function (k, _p10) {
		var _p11 = _p10;
		return A2(_elm_lang$core$Dict$member, k, _p11._0);
	});
var _elm_lang$core$Set$isEmpty = function (_p12) {
	var _p13 = _p12;
	return _elm_lang$core$Dict$isEmpty(_p13._0);
};
var _elm_lang$core$Set$Set_elm_builtin = function (a) {
	return {ctor: 'Set_elm_builtin', _0: a};
};
var _elm_lang$core$Set$empty = _elm_lang$core$Set$Set_elm_builtin(_elm_lang$core$Dict$empty);
var _elm_lang$core$Set$singleton = function (k) {
	return _elm_lang$core$Set$Set_elm_builtin(
		A2(
			_elm_lang$core$Dict$singleton,
			k,
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Set$insert = F2(
	function (k, _p14) {
		var _p15 = _p14;
		return _elm_lang$core$Set$Set_elm_builtin(
			A3(
				_elm_lang$core$Dict$insert,
				k,
				{ctor: '_Tuple0'},
				_p15._0));
	});
var _elm_lang$core$Set$fromList = function (xs) {
	return A3(_elm_lang$core$List$foldl, _elm_lang$core$Set$insert, _elm_lang$core$Set$empty, xs);
};
var _elm_lang$core$Set$map = F2(
	function (f, s) {
		return _elm_lang$core$Set$fromList(
			A2(
				_elm_lang$core$List$map,
				f,
				_elm_lang$core$Set$toList(s)));
	});
var _elm_lang$core$Set$remove = F2(
	function (k, _p16) {
		var _p17 = _p16;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$remove, k, _p17._0));
	});
var _elm_lang$core$Set$union = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$union, _p20._0, _p21._0));
	});
var _elm_lang$core$Set$intersect = F2(
	function (_p23, _p22) {
		var _p24 = _p23;
		var _p25 = _p22;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$intersect, _p24._0, _p25._0));
	});
var _elm_lang$core$Set$diff = F2(
	function (_p27, _p26) {
		var _p28 = _p27;
		var _p29 = _p26;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$diff, _p28._0, _p29._0));
	});
var _elm_lang$core$Set$filter = F2(
	function (p, _p30) {
		var _p31 = _p30;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p32) {
						return p(k);
					}),
				_p31._0));
	});
var _elm_lang$core$Set$partition = F2(
	function (p, _p33) {
		var _p34 = _p33;
		var _p35 = A2(
			_elm_lang$core$Dict$partition,
			F2(
				function (k, _p36) {
					return p(k);
				}),
			_p34._0);
		var p1 = _p35._0;
		var p2 = _p35._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Set$Set_elm_builtin(p1),
			_1: _elm_lang$core$Set$Set_elm_builtin(p2)
		};
	});

var _elm_community$list_extra$List_Extra$greedyGroupsOfWithStep = F3(
	function (size, step, xs) {
		var okayXs = _elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$List$length(xs),
			0) > 0;
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs_ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		return (okayArgs && okayXs) ? {
			ctor: '::',
			_0: group,
			_1: A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, step, xs_)
		} : {ctor: '[]'};
	});
var _elm_community$list_extra$List_Extra$greedyGroupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$groupsOfWithStep = F3(
	function (size, step, xs) {
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs_ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		var okayLength = _elm_lang$core$Native_Utils.eq(
			size,
			_elm_lang$core$List$length(group));
		return (okayArgs && okayLength) ? {
			ctor: '::',
			_0: group,
			_1: A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, step, xs_)
		} : {ctor: '[]'};
	});
var _elm_community$list_extra$List_Extra$groupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$zip5 = _elm_lang$core$List$map5(
	F5(
		function (v0, v1, v2, v3, v4) {
			return {ctor: '_Tuple5', _0: v0, _1: v1, _2: v2, _3: v3, _4: v4};
		}));
var _elm_community$list_extra$List_Extra$zip4 = _elm_lang$core$List$map4(
	F4(
		function (v0, v1, v2, v3) {
			return {ctor: '_Tuple4', _0: v0, _1: v1, _2: v2, _3: v3};
		}));
var _elm_community$list_extra$List_Extra$zip3 = _elm_lang$core$List$map3(
	F3(
		function (v0, v1, v2) {
			return {ctor: '_Tuple3', _0: v0, _1: v1, _2: v2};
		}));
var _elm_community$list_extra$List_Extra$zip = _elm_lang$core$List$map2(
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		}));
var _elm_community$list_extra$List_Extra$isPrefixOf = function (prefix) {
	return function (_p0) {
		return A2(
			_elm_lang$core$List$all,
			_elm_lang$core$Basics$identity,
			A3(
				_elm_lang$core$List$map2,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					}),
				prefix,
				_p0));
	};
};
var _elm_community$list_extra$List_Extra$isSuffixOf = F2(
	function (suffix, xs) {
		return A2(
			_elm_community$list_extra$List_Extra$isPrefixOf,
			_elm_lang$core$List$reverse(suffix),
			_elm_lang$core$List$reverse(xs));
	});
var _elm_community$list_extra$List_Extra$selectSplit = function (xs) {
	var _p1 = xs;
	if (_p1.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p5 = _p1._1;
		var _p4 = _p1._0;
		return {
			ctor: '::',
			_0: {
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _p4,
				_2: _p5
			},
			_1: A2(
				_elm_lang$core$List$map,
				function (_p2) {
					var _p3 = _p2;
					return {
						ctor: '_Tuple3',
						_0: {ctor: '::', _0: _p4, _1: _p3._0},
						_1: _p3._1,
						_2: _p3._2
					};
				},
				_elm_community$list_extra$List_Extra$selectSplit(_p5))
		};
	}
};
var _elm_community$list_extra$List_Extra$select = function (xs) {
	var _p6 = xs;
	if (_p6.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p10 = _p6._1;
		var _p9 = _p6._0;
		return {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: _p9, _1: _p10},
			_1: A2(
				_elm_lang$core$List$map,
				function (_p7) {
					var _p8 = _p7;
					return {
						ctor: '_Tuple2',
						_0: _p8._0,
						_1: {ctor: '::', _0: _p9, _1: _p8._1}
					};
				},
				_elm_community$list_extra$List_Extra$select(_p10))
		};
	}
};
var _elm_community$list_extra$List_Extra$tailsHelp = F2(
	function (e, list) {
		var _p11 = list;
		if (_p11.ctor === '::') {
			var _p12 = _p11._0;
			return {
				ctor: '::',
				_0: {ctor: '::', _0: e, _1: _p12},
				_1: {ctor: '::', _0: _p12, _1: _p11._1}
			};
		} else {
			return {ctor: '[]'};
		}
	});
var _elm_community$list_extra$List_Extra$tails = A2(
	_elm_lang$core$List$foldr,
	_elm_community$list_extra$List_Extra$tailsHelp,
	{
		ctor: '::',
		_0: {ctor: '[]'},
		_1: {ctor: '[]'}
	});
var _elm_community$list_extra$List_Extra$isInfixOf = F2(
	function (infix, xs) {
		return A2(
			_elm_lang$core$List$any,
			_elm_community$list_extra$List_Extra$isPrefixOf(infix),
			_elm_community$list_extra$List_Extra$tails(xs));
	});
var _elm_community$list_extra$List_Extra$inits = A2(
	_elm_lang$core$List$foldr,
	F2(
		function (e, acc) {
			return {
				ctor: '::',
				_0: {ctor: '[]'},
				_1: A2(
					_elm_lang$core$List$map,
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						})(e),
					acc)
			};
		}),
	{
		ctor: '::',
		_0: {ctor: '[]'},
		_1: {ctor: '[]'}
	});
var _elm_community$list_extra$List_Extra$groupWhileTransitively = F2(
	function (cmp, xs_) {
		var _p13 = xs_;
		if (_p13.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p13._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: {
						ctor: '::',
						_0: _p13._0,
						_1: {ctor: '[]'}
					},
					_1: {ctor: '[]'}
				};
			} else {
				var _p15 = _p13._0;
				var _p14 = A2(_elm_community$list_extra$List_Extra$groupWhileTransitively, cmp, _p13._1);
				if (_p14.ctor === '::') {
					return A2(cmp, _p15, _p13._1._0) ? {
						ctor: '::',
						_0: {ctor: '::', _0: _p15, _1: _p14._0},
						_1: _p14._1
					} : {
						ctor: '::',
						_0: {
							ctor: '::',
							_0: _p15,
							_1: {ctor: '[]'}
						},
						_1: _p14
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$stripPrefix = F2(
	function (prefix, xs) {
		var step = F2(
			function (e, m) {
				var _p16 = m;
				if (_p16.ctor === 'Nothing') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					if (_p16._0.ctor === '[]') {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						return _elm_lang$core$Native_Utils.eq(e, _p16._0._0) ? _elm_lang$core$Maybe$Just(_p16._0._1) : _elm_lang$core$Maybe$Nothing;
					}
				}
			});
		return A3(
			_elm_lang$core$List$foldl,
			step,
			_elm_lang$core$Maybe$Just(xs),
			prefix);
	});
var _elm_community$list_extra$List_Extra$dropWhileRight = function (p) {
	return A2(
		_elm_lang$core$List$foldr,
		F2(
			function (x, xs) {
				return (p(x) && _elm_lang$core$List$isEmpty(xs)) ? {ctor: '[]'} : {ctor: '::', _0: x, _1: xs};
			}),
		{ctor: '[]'});
};
var _elm_community$list_extra$List_Extra$takeWhileRight = function (p) {
	var step = F2(
		function (x, _p17) {
			var _p18 = _p17;
			var _p19 = _p18._0;
			return (p(x) && _p18._1) ? {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: x, _1: _p19},
				_1: true
			} : {ctor: '_Tuple2', _0: _p19, _1: false};
		});
	return function (_p20) {
		return _elm_lang$core$Tuple$first(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: {ctor: '[]'},
					_1: true
				},
				_p20));
	};
};
var _elm_community$list_extra$List_Extra$splitAt = F2(
	function (n, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_lang$core$List$take, n, xs),
			_1: A2(_elm_lang$core$List$drop, n, xs)
		};
	});
var _elm_community$list_extra$List_Extra$groupsOfVarying_ = F3(
	function (listOflengths, list, accu) {
		groupsOfVarying_:
		while (true) {
			var _p21 = {ctor: '_Tuple2', _0: listOflengths, _1: list};
			if (((_p21.ctor === '_Tuple2') && (_p21._0.ctor === '::')) && (_p21._1.ctor === '::')) {
				var _p22 = A2(_elm_community$list_extra$List_Extra$splitAt, _p21._0._0, list);
				var head = _p22._0;
				var tail = _p22._1;
				var _v10 = _p21._0._1,
					_v11 = tail,
					_v12 = {ctor: '::', _0: head, _1: accu};
				listOflengths = _v10;
				list = _v11;
				accu = _v12;
				continue groupsOfVarying_;
			} else {
				return _elm_lang$core$List$reverse(accu);
			}
		}
	});
var _elm_community$list_extra$List_Extra$groupsOfVarying = F2(
	function (listOflengths, list) {
		return A3(
			_elm_community$list_extra$List_Extra$groupsOfVarying_,
			listOflengths,
			list,
			{ctor: '[]'});
	});
var _elm_community$list_extra$List_Extra$unfoldr = F2(
	function (f, seed) {
		var _p23 = f(seed);
		if (_p23.ctor === 'Nothing') {
			return {ctor: '[]'};
		} else {
			return {
				ctor: '::',
				_0: _p23._0._0,
				_1: A2(_elm_community$list_extra$List_Extra$unfoldr, f, _p23._0._1)
			};
		}
	});
var _elm_community$list_extra$List_Extra$scanr1 = F2(
	function (f, xs_) {
		var _p24 = xs_;
		if (_p24.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p24._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: _p24._0,
					_1: {ctor: '[]'}
				};
			} else {
				var _p25 = A2(_elm_community$list_extra$List_Extra$scanr1, f, _p24._1);
				if (_p25.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, _p24._0, _p25._0),
						_1: _p25
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanr = F3(
	function (f, acc, xs_) {
		var _p26 = xs_;
		if (_p26.ctor === '[]') {
			return {
				ctor: '::',
				_0: acc,
				_1: {ctor: '[]'}
			};
		} else {
			var _p27 = A3(_elm_community$list_extra$List_Extra$scanr, f, acc, _p26._1);
			if (_p27.ctor === '::') {
				return {
					ctor: '::',
					_0: A2(f, _p26._0, _p27._0),
					_1: _p27
				};
			} else {
				return {ctor: '[]'};
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanl1 = F2(
	function (f, xs_) {
		var _p28 = xs_;
		if (_p28.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			return A3(_elm_lang$core$List$scanl, f, _p28._0, _p28._1);
		}
	});
var _elm_community$list_extra$List_Extra$indexedFoldr = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _p29) {
				var _p30 = _p29;
				var _p31 = _p30._0;
				return {
					ctor: '_Tuple2',
					_0: _p31 - 1,
					_1: A3(func, _p31, x, _p30._1)
				};
			});
		return _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$List$length(list) - 1,
					_1: acc
				},
				list));
	});
var _elm_community$list_extra$List_Extra$indexedFoldl = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _p32) {
				var _p33 = _p32;
				var _p34 = _p33._0;
				return {
					ctor: '_Tuple2',
					_0: _p34 + 1,
					_1: A3(func, _p34, x, _p33._1)
				};
			});
		return _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldl,
				step,
				{ctor: '_Tuple2', _0: 0, _1: acc},
				list));
	});
var _elm_community$list_extra$List_Extra$foldr1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p35 = m;
						if (_p35.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, x, _p35._0);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldr, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$foldl1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p36 = m;
						if (_p36.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, _p36._0, x);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldl, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$interweaveHelp = F3(
	function (l1, l2, acc) {
		interweaveHelp:
		while (true) {
			var _p37 = {ctor: '_Tuple2', _0: l1, _1: l2};
			_v23_1:
			do {
				if (_p37._0.ctor === '::') {
					if (_p37._1.ctor === '::') {
						var _v24 = _p37._0._1,
							_v25 = _p37._1._1,
							_v26 = A2(
							_elm_lang$core$Basics_ops['++'],
							acc,
							{
								ctor: '::',
								_0: _p37._0._0,
								_1: {
									ctor: '::',
									_0: _p37._1._0,
									_1: {ctor: '[]'}
								}
							});
						l1 = _v24;
						l2 = _v25;
						acc = _v26;
						continue interweaveHelp;
					} else {
						break _v23_1;
					}
				} else {
					if (_p37._1.ctor === '[]') {
						break _v23_1;
					} else {
						return A2(_elm_lang$core$Basics_ops['++'], acc, _p37._1);
					}
				}
			} while(false);
			return A2(_elm_lang$core$Basics_ops['++'], acc, _p37._0);
		}
	});
var _elm_community$list_extra$List_Extra$interweave = F2(
	function (l1, l2) {
		return A3(
			_elm_community$list_extra$List_Extra$interweaveHelp,
			l1,
			l2,
			{ctor: '[]'});
	});
var _elm_community$list_extra$List_Extra$permutations = function (xs_) {
	var _p38 = xs_;
	if (_p38.ctor === '[]') {
		return {
			ctor: '::',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		};
	} else {
		var f = function (_p39) {
			var _p40 = _p39;
			return A2(
				_elm_lang$core$List$map,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					})(_p40._0),
				_elm_community$list_extra$List_Extra$permutations(_p40._1));
		};
		return A2(
			_elm_lang$core$List$concatMap,
			f,
			_elm_community$list_extra$List_Extra$select(_p38));
	}
};
var _elm_community$list_extra$List_Extra$isPermutationOf = F2(
	function (permut, xs) {
		return A2(
			_elm_lang$core$List$member,
			permut,
			_elm_community$list_extra$List_Extra$permutations(xs));
	});
var _elm_community$list_extra$List_Extra$subsequencesNonEmpty = function (xs) {
	var _p41 = xs;
	if (_p41.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p42 = _p41._0;
		var f = F2(
			function (ys, r) {
				return {
					ctor: '::',
					_0: ys,
					_1: {
						ctor: '::',
						_0: {ctor: '::', _0: _p42, _1: ys},
						_1: r
					}
				};
			});
		return {
			ctor: '::',
			_0: {
				ctor: '::',
				_0: _p42,
				_1: {ctor: '[]'}
			},
			_1: A3(
				_elm_lang$core$List$foldr,
				f,
				{ctor: '[]'},
				_elm_community$list_extra$List_Extra$subsequencesNonEmpty(_p41._1))
		};
	}
};
var _elm_community$list_extra$List_Extra$subsequences = function (xs) {
	return {
		ctor: '::',
		_0: {ctor: '[]'},
		_1: _elm_community$list_extra$List_Extra$subsequencesNonEmpty(xs)
	};
};
var _elm_community$list_extra$List_Extra$isSubsequenceOf = F2(
	function (subseq, xs) {
		return A2(
			_elm_lang$core$List$member,
			subseq,
			_elm_community$list_extra$List_Extra$subsequences(xs));
	});
var _elm_community$list_extra$List_Extra$transpose = function (ll) {
	transpose:
	while (true) {
		var _p43 = ll;
		if (_p43.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p43._0.ctor === '[]') {
				var _v31 = _p43._1;
				ll = _v31;
				continue transpose;
			} else {
				var _p44 = _p43._1;
				var tails = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$tail, _p44);
				var heads = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$head, _p44);
				return {
					ctor: '::',
					_0: {ctor: '::', _0: _p43._0._0, _1: heads},
					_1: _elm_community$list_extra$List_Extra$transpose(
						{ctor: '::', _0: _p43._0._1, _1: tails})
				};
			}
		}
	}
};
var _elm_community$list_extra$List_Extra$intercalate = function (xs) {
	return function (_p45) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$intersperse, xs, _p45));
	};
};
var _elm_community$list_extra$List_Extra$filterNot = F2(
	function (pred, list) {
		return A2(
			_elm_lang$core$List$filter,
			function (_p46) {
				return !pred(_p46);
			},
			list);
	});
var _elm_community$list_extra$List_Extra$removeAt = F2(
	function (index, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return l;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p47 = tail;
			if (_p47.ctor === 'Nothing') {
				return l;
			} else {
				return A2(_elm_lang$core$List$append, head, _p47._0);
			}
		}
	});
var _elm_community$list_extra$List_Extra$singleton = function (x) {
	return {
		ctor: '::',
		_0: x,
		_1: {ctor: '[]'}
	};
};
var _elm_community$list_extra$List_Extra$stableSortWith = F2(
	function (pred, list) {
		var predWithIndex = F2(
			function (_p49, _p48) {
				var _p50 = _p49;
				var _p51 = _p48;
				var result = A2(pred, _p50._0, _p51._0);
				var _p52 = result;
				if (_p52.ctor === 'EQ') {
					return A2(_elm_lang$core$Basics$compare, _p50._1, _p51._1);
				} else {
					return result;
				}
			});
		var listWithIndex = A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, a) {
					return {ctor: '_Tuple2', _0: a, _1: i};
				}),
			list);
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$first,
			A2(_elm_lang$core$List$sortWith, predWithIndex, listWithIndex));
	});
var _elm_community$list_extra$List_Extra$setAt = F3(
	function (index, value, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p53 = tail;
			if (_p53.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return _elm_lang$core$Maybe$Just(
					A2(
						_elm_lang$core$List$append,
						head,
						{ctor: '::', _0: value, _1: _p53._0}));
			}
		}
	});
var _elm_community$list_extra$List_Extra$remove = F2(
	function (x, xs) {
		var _p54 = xs;
		if (_p54.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p56 = _p54._1;
			var _p55 = _p54._0;
			return _elm_lang$core$Native_Utils.eq(x, _p55) ? _p56 : {
				ctor: '::',
				_0: _p55,
				_1: A2(_elm_community$list_extra$List_Extra$remove, x, _p56)
			};
		}
	});
var _elm_community$list_extra$List_Extra$updateIfIndex = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, x) {
					return predicate(i) ? update(x) : x;
				}),
			list);
	});
var _elm_community$list_extra$List_Extra$updateAt = F3(
	function (index, update, list) {
		return ((_elm_lang$core$Native_Utils.cmp(index, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(
			index,
			_elm_lang$core$List$length(list)) > -1)) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
			A3(
				_elm_community$list_extra$List_Extra$updateIfIndex,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					})(index),
				update,
				list));
	});
var _elm_community$list_extra$List_Extra$updateIf = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$map,
			function (item) {
				return predicate(item) ? update(item) : item;
			},
			list);
	});
var _elm_community$list_extra$List_Extra$replaceIf = F3(
	function (predicate, replacement, list) {
		return A3(
			_elm_community$list_extra$List_Extra$updateIf,
			predicate,
			_elm_lang$core$Basics$always(replacement),
			list);
	});
var _elm_community$list_extra$List_Extra$findIndices = function (p) {
	return function (_p57) {
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$first,
			A2(
				_elm_lang$core$List$filter,
				function (_p58) {
					var _p59 = _p58;
					return p(_p59._1);
				},
				A2(
					_elm_lang$core$List$indexedMap,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					_p57)));
	};
};
var _elm_community$list_extra$List_Extra$findIndex = function (p) {
	return function (_p60) {
		return _elm_lang$core$List$head(
			A2(_elm_community$list_extra$List_Extra$findIndices, p, _p60));
	};
};
var _elm_community$list_extra$List_Extra$elemIndices = function (x) {
	return _elm_community$list_extra$List_Extra$findIndices(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$elemIndex = function (x) {
	return _elm_community$list_extra$List_Extra$findIndex(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			var _p61 = list;
			if (_p61.ctor === '[]') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p62 = _p61._0;
				if (predicate(_p62)) {
					return _elm_lang$core$Maybe$Just(_p62);
				} else {
					var _v40 = predicate,
						_v41 = _p61._1;
					predicate = _v40;
					list = _v41;
					continue find;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$notMember = function (x) {
	return function (_p63) {
		return !A2(_elm_lang$core$List$member, x, _p63);
	};
};
var _elm_community$list_extra$List_Extra$andThen = _elm_lang$core$List$concatMap;
var _elm_community$list_extra$List_Extra$lift2 = F3(
	function (f, la, lb) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return {
							ctor: '::',
							_0: A2(f, a, b),
							_1: {ctor: '[]'}
						};
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$lift3 = F4(
	function (f, la, lb, lc) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							function (c) {
								return {
									ctor: '::',
									_0: A3(f, a, b, c),
									_1: {ctor: '[]'}
								};
							},
							lc);
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$lift4 = F5(
	function (f, la, lb, lc, ld) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							function (c) {
								return A2(
									_elm_community$list_extra$List_Extra$andThen,
									function (d) {
										return {
											ctor: '::',
											_0: A4(f, a, b, c, d),
											_1: {ctor: '[]'}
										};
									},
									ld);
							},
							lc);
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$andMap = F2(
	function (fl, l) {
		return A3(
			_elm_lang$core$List$map2,
			F2(
				function (x, y) {
					return x(y);
				}),
			fl,
			l);
	});
var _elm_community$list_extra$List_Extra$uniqueHelp = F3(
	function (f, existing, remaining) {
		uniqueHelp:
		while (true) {
			var _p64 = remaining;
			if (_p64.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				var _p66 = _p64._1;
				var _p65 = _p64._0;
				var computedFirst = f(_p65);
				if (A2(_elm_lang$core$Set$member, computedFirst, existing)) {
					var _v43 = f,
						_v44 = existing,
						_v45 = _p66;
					f = _v43;
					existing = _v44;
					remaining = _v45;
					continue uniqueHelp;
				} else {
					return {
						ctor: '::',
						_0: _p65,
						_1: A3(
							_elm_community$list_extra$List_Extra$uniqueHelp,
							f,
							A2(_elm_lang$core$Set$insert, computedFirst, existing),
							_p66)
					};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$uniqueBy = F2(
	function (f, list) {
		return A3(_elm_community$list_extra$List_Extra$uniqueHelp, f, _elm_lang$core$Set$empty, list);
	});
var _elm_community$list_extra$List_Extra$allDifferentBy = F2(
	function (f, list) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$List$length(list),
			_elm_lang$core$List$length(
				A2(_elm_community$list_extra$List_Extra$uniqueBy, f, list)));
	});
var _elm_community$list_extra$List_Extra$unique = function (list) {
	return A3(_elm_community$list_extra$List_Extra$uniqueHelp, _elm_lang$core$Basics$identity, _elm_lang$core$Set$empty, list);
};
var _elm_community$list_extra$List_Extra$allDifferent = function (list) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$List$length(list),
		_elm_lang$core$List$length(
			_elm_community$list_extra$List_Extra$unique(list)));
};
var _elm_community$list_extra$List_Extra$dropWhile = F2(
	function (predicate, list) {
		dropWhile:
		while (true) {
			var _p67 = list;
			if (_p67.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				if (predicate(_p67._0)) {
					var _v47 = predicate,
						_v48 = _p67._1;
					predicate = _v47;
					list = _v48;
					continue dropWhile;
				} else {
					return list;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$takeWhile = F2(
	function (predicate, list) {
		var _p68 = list;
		if (_p68.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p69 = _p68._0;
			return predicate(_p69) ? {
				ctor: '::',
				_0: _p69,
				_1: A2(_elm_community$list_extra$List_Extra$takeWhile, predicate, _p68._1)
			} : {ctor: '[]'};
		}
	});
var _elm_community$list_extra$List_Extra$span = F2(
	function (p, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_community$list_extra$List_Extra$takeWhile, p, xs),
			_1: A2(_elm_community$list_extra$List_Extra$dropWhile, p, xs)
		};
	});
var _elm_community$list_extra$List_Extra$break = function (p) {
	return _elm_community$list_extra$List_Extra$span(
		function (_p70) {
			return !p(_p70);
		});
};
var _elm_community$list_extra$List_Extra$groupWhile = F2(
	function (eq, xs_) {
		var _p71 = xs_;
		if (_p71.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p73 = _p71._0;
			var _p72 = A2(
				_elm_community$list_extra$List_Extra$span,
				eq(_p73),
				_p71._1);
			var ys = _p72._0;
			var zs = _p72._1;
			return {
				ctor: '::',
				_0: {ctor: '::', _0: _p73, _1: ys},
				_1: A2(_elm_community$list_extra$List_Extra$groupWhile, eq, zs)
			};
		}
	});
var _elm_community$list_extra$List_Extra$group = _elm_community$list_extra$List_Extra$groupWhile(
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.eq(x, y);
		}));
var _elm_community$list_extra$List_Extra$minimumBy = F2(
	function (f, ls) {
		var minBy = F2(
			function (x, _p74) {
				var _p75 = _p74;
				var _p76 = _p75._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p76) < 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p75._0, _1: _p76};
			});
		var _p77 = ls;
		if (_p77.ctor === '::') {
			if (_p77._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p77._0);
			} else {
				var _p78 = _p77._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Tuple$first(
						A3(
							_elm_lang$core$List$foldl,
							minBy,
							{
								ctor: '_Tuple2',
								_0: _p78,
								_1: f(_p78)
							},
							_p77._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$maximumBy = F2(
	function (f, ls) {
		var maxBy = F2(
			function (x, _p79) {
				var _p80 = _p79;
				var _p81 = _p80._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p81) > 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p80._0, _1: _p81};
			});
		var _p82 = ls;
		if (_p82.ctor === '::') {
			if (_p82._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p82._0);
			} else {
				var _p83 = _p82._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Tuple$first(
						A3(
							_elm_lang$core$List$foldl,
							maxBy,
							{
								ctor: '_Tuple2',
								_0: _p83,
								_1: f(_p83)
							},
							_p82._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$uncons = function (xs) {
	var _p84 = xs;
	if (_p84.ctor === '[]') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: _p84._0, _1: _p84._1});
	}
};
var _elm_community$list_extra$List_Extra$swapAt = F3(
	function (index1, index2, l) {
		swapAt:
		while (true) {
			if (_elm_lang$core$Native_Utils.eq(index1, index2)) {
				return _elm_lang$core$Maybe$Just(l);
			} else {
				if (_elm_lang$core$Native_Utils.cmp(index1, index2) > 0) {
					var _v56 = index2,
						_v57 = index1,
						_v58 = l;
					index1 = _v56;
					index2 = _v57;
					l = _v58;
					continue swapAt;
				} else {
					if (_elm_lang$core$Native_Utils.cmp(index1, 0) < 0) {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						var _p85 = A2(_elm_community$list_extra$List_Extra$splitAt, index1, l);
						var part1 = _p85._0;
						var tail1 = _p85._1;
						var _p86 = A2(_elm_community$list_extra$List_Extra$splitAt, index2 - index1, tail1);
						var head2 = _p86._0;
						var tail2 = _p86._1;
						return A3(
							_elm_lang$core$Maybe$map2,
							F2(
								function (_p88, _p87) {
									var _p89 = _p88;
									var _p90 = _p87;
									return _elm_lang$core$List$concat(
										{
											ctor: '::',
											_0: part1,
											_1: {
												ctor: '::',
												_0: {ctor: '::', _0: _p90._0, _1: _p89._1},
												_1: {
													ctor: '::',
													_0: {ctor: '::', _0: _p89._0, _1: _p90._1},
													_1: {ctor: '[]'}
												}
											}
										});
								}),
							_elm_community$list_extra$List_Extra$uncons(head2),
							_elm_community$list_extra$List_Extra$uncons(tail2));
					}
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$iterate = F2(
	function (f, x) {
		var _p91 = f(x);
		if (_p91.ctor === 'Just') {
			return {
				ctor: '::',
				_0: x,
				_1: A2(_elm_community$list_extra$List_Extra$iterate, f, _p91._0)
			};
		} else {
			return {
				ctor: '::',
				_0: x,
				_1: {ctor: '[]'}
			};
		}
	});
var _elm_community$list_extra$List_Extra$getAt = F2(
	function (idx, xs) {
		return (_elm_lang$core$Native_Utils.cmp(idx, 0) < 0) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, idx, xs));
	});
var _elm_community$list_extra$List_Extra_ops = _elm_community$list_extra$List_Extra_ops || {};
_elm_community$list_extra$List_Extra_ops['!!'] = _elm_lang$core$Basics$flip(_elm_community$list_extra$List_Extra$getAt);
var _elm_community$list_extra$List_Extra$init = function () {
	var maybe = F2(
		function (d, f) {
			return function (_p92) {
				return A2(
					_elm_lang$core$Maybe$withDefault,
					d,
					A2(_elm_lang$core$Maybe$map, f, _p92));
			};
		});
	return A2(
		_elm_lang$core$List$foldr,
		function (x) {
			return function (_p93) {
				return _elm_lang$core$Maybe$Just(
					A3(
						maybe,
						{ctor: '[]'},
						F2(
							function (x, y) {
								return {ctor: '::', _0: x, _1: y};
							})(x),
						_p93));
			};
		},
		_elm_lang$core$Maybe$Nothing);
}();
var _elm_community$list_extra$List_Extra$last = _elm_community$list_extra$List_Extra$foldl1(
	_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always));

var _cuducos$elm_format_number$FormatNumber_Locales$Locale = F3(
	function (a, b, c) {
		return {decimals: a, thousandSeparator: b, decimalSeparator: c};
	});
var _cuducos$elm_format_number$FormatNumber_Locales$frenchLocale = A3(_cuducos$elm_format_number$FormatNumber_Locales$Locale, 3, ' ', ',');
var _cuducos$elm_format_number$FormatNumber_Locales$spanishLocale = A3(_cuducos$elm_format_number$FormatNumber_Locales$Locale, 3, '.', ',');
var _cuducos$elm_format_number$FormatNumber_Locales$usLocale = A3(_cuducos$elm_format_number$FormatNumber_Locales$Locale, 2, ',', '.');

var _myrho$elm_round$Round$funNum = F3(
	function (fun, s, fl) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			1 / 0,
			_elm_lang$core$Result$toMaybe(
				_elm_lang$core$String$toFloat(
					A2(fun, s, fl))));
	});
var _myrho$elm_round$Round$splitComma = function (str) {
	var _p0 = A2(_elm_lang$core$String$split, '.', str);
	if (_p0.ctor === '::') {
		if (_p0._1.ctor === '::') {
			return {ctor: '_Tuple2', _0: _p0._0, _1: _p0._1._0};
		} else {
			return {ctor: '_Tuple2', _0: _p0._0, _1: '0'};
		}
	} else {
		return {ctor: '_Tuple2', _0: '0', _1: '0'};
	}
};
var _myrho$elm_round$Round$toDecimal = function (fl) {
	var _p1 = A2(
		_elm_lang$core$String$split,
		'e',
		_elm_lang$core$Basics$toString(fl));
	if (_p1.ctor === '::') {
		if (_p1._1.ctor === '::') {
			var _p4 = _p1._1._0;
			var _p2 = function () {
				var hasSign = _elm_lang$core$Native_Utils.cmp(fl, 0) < 0;
				var _p3 = _myrho$elm_round$Round$splitComma(_p1._0);
				var b = _p3._0;
				var a = _p3._1;
				return {
					ctor: '_Tuple3',
					_0: hasSign ? '-' : '',
					_1: hasSign ? A2(_elm_lang$core$String$dropLeft, 1, b) : b,
					_2: a
				};
			}();
			var sign = _p2._0;
			var before = _p2._1;
			var after = _p2._2;
			var e = A2(
				_elm_lang$core$Maybe$withDefault,
				0,
				_elm_lang$core$Result$toMaybe(
					_elm_lang$core$String$toInt(
						A2(_elm_lang$core$String$startsWith, '+', _p4) ? A2(_elm_lang$core$String$dropLeft, 1, _p4) : _p4)));
			var newBefore = (_elm_lang$core$Native_Utils.cmp(e, 0) > -1) ? before : ((_elm_lang$core$Native_Utils.cmp(
				_elm_lang$core$Basics$abs(e),
				_elm_lang$core$String$length(before)) < 0) ? A2(
				_elm_lang$core$Basics_ops['++'],
				A2(
					_elm_lang$core$String$left,
					_elm_lang$core$String$length(before) - _elm_lang$core$Basics$abs(e),
					before),
				A2(
					_elm_lang$core$Basics_ops['++'],
					'.',
					A2(
						_elm_lang$core$String$right,
						_elm_lang$core$Basics$abs(e),
						before))) : A2(
				_elm_lang$core$Basics_ops['++'],
				'0.',
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(
						_elm_lang$core$String$repeat,
						_elm_lang$core$Basics$abs(e) - _elm_lang$core$String$length(before),
						'0'),
					before)));
			var newAfter = (_elm_lang$core$Native_Utils.cmp(e, 0) < 1) ? after : ((_elm_lang$core$Native_Utils.cmp(
				e,
				_elm_lang$core$String$length(after)) < 0) ? A2(
				_elm_lang$core$Basics_ops['++'],
				A2(_elm_lang$core$String$left, e, after),
				A2(
					_elm_lang$core$Basics_ops['++'],
					'.',
					A2(
						_elm_lang$core$String$right,
						_elm_lang$core$String$length(after) - e,
						after))) : A2(
				_elm_lang$core$Basics_ops['++'],
				after,
				A2(
					_elm_lang$core$String$repeat,
					e - _elm_lang$core$String$length(after),
					'0')));
			return A2(
				_elm_lang$core$Basics_ops['++'],
				sign,
				A2(_elm_lang$core$Basics_ops['++'], newBefore, newAfter));
		} else {
			return _p1._0;
		}
	} else {
		return '';
	}
};
var _myrho$elm_round$Round$truncate = function (n) {
	return (_elm_lang$core$Native_Utils.cmp(n, 0) < 0) ? _elm_lang$core$Basics$ceiling(n) : _elm_lang$core$Basics$floor(n);
};
var _myrho$elm_round$Round$roundFun = F3(
	function (functor, s, fl) {
		if (_elm_lang$core$Native_Utils.eq(s, 0)) {
			return _elm_lang$core$Basics$toString(
				functor(fl));
		} else {
			if (_elm_lang$core$Native_Utils.cmp(s, 0) < 0) {
				return function (r) {
					return (!_elm_lang$core$Native_Utils.eq(r, '0')) ? A2(
						_elm_lang$core$Basics_ops['++'],
						r,
						A2(
							_elm_lang$core$String$repeat,
							_elm_lang$core$Basics$abs(s),
							'0')) : r;
				}(
					A3(
						_myrho$elm_round$Round$roundFun,
						functor,
						0,
						A2(
							F2(
								function (x, y) {
									return x / y;
								}),
							fl,
							A2(
								F2(
									function (x, y) {
										return Math.pow(x, y);
									}),
								10,
								_elm_lang$core$Basics$abs(
									_elm_lang$core$Basics$toFloat(s))))));
			} else {
				var dd = (_elm_lang$core$Native_Utils.cmp(fl, 0) < 0) ? 2 : 1;
				var n = (_elm_lang$core$Native_Utils.cmp(fl, 0) < 0) ? -1 : 1;
				var e = Math.pow(10, s);
				var _p5 = _myrho$elm_round$Round$splitComma(
					_myrho$elm_round$Round$toDecimal(fl));
				var before = _p5._0;
				var after = _p5._1;
				var a = A3(
					_elm_lang$core$String$padRight,
					s + 1,
					_elm_lang$core$Native_Utils.chr('0'),
					after);
				var b = A2(_elm_lang$core$String$left, s, a);
				var c = A2(_elm_lang$core$String$dropLeft, s, a);
				var f = functor(
					A2(
						_elm_lang$core$Maybe$withDefault,
						_elm_lang$core$Basics$toFloat(e),
						_elm_lang$core$Result$toMaybe(
							_elm_lang$core$String$toFloat(
								A2(
									_elm_lang$core$Basics_ops['++'],
									(_elm_lang$core$Native_Utils.cmp(fl, 0) < 0) ? '-' : '',
									A2(
										_elm_lang$core$Basics_ops['++'],
										'1',
										A2(
											_elm_lang$core$Basics_ops['++'],
											b,
											A2(_elm_lang$core$Basics_ops['++'], '.', c))))))));
				var g = A2(
					_elm_lang$core$String$dropLeft,
					dd,
					_elm_lang$core$Basics$toString(f));
				var h = _myrho$elm_round$Round$truncate(fl) + (_elm_lang$core$Native_Utils.eq(f - (e * n), e * n) ? ((_elm_lang$core$Native_Utils.cmp(fl, 0) < 0) ? -1 : 1) : 0);
				var j = _elm_lang$core$Basics$toString(h);
				var i = (_elm_lang$core$Native_Utils.eq(j, '0') && ((!_elm_lang$core$Native_Utils.eq(f - (e * n), 0)) && ((_elm_lang$core$Native_Utils.cmp(fl, 0) < 0) && (_elm_lang$core$Native_Utils.cmp(fl, -1) > 0)))) ? A2(_elm_lang$core$Basics_ops['++'], '-', j) : j;
				return A2(
					_elm_lang$core$Basics_ops['++'],
					i,
					A2(_elm_lang$core$Basics_ops['++'], '.', g));
			}
		}
	});
var _myrho$elm_round$Round$round = _myrho$elm_round$Round$roundFun(_elm_lang$core$Basics$round);
var _myrho$elm_round$Round$roundNum = _myrho$elm_round$Round$funNum(_myrho$elm_round$Round$round);
var _myrho$elm_round$Round$ceiling = _myrho$elm_round$Round$roundFun(_elm_lang$core$Basics$ceiling);
var _myrho$elm_round$Round$ceilingNum = _myrho$elm_round$Round$funNum(_myrho$elm_round$Round$ceiling);
var _myrho$elm_round$Round$floor = _myrho$elm_round$Round$roundFun(_elm_lang$core$Basics$floor);
var _myrho$elm_round$Round$floorCom = F2(
	function (s, fl) {
		return (_elm_lang$core$Native_Utils.cmp(fl, 0) < 0) ? A2(_myrho$elm_round$Round$ceiling, s, fl) : A2(_myrho$elm_round$Round$floor, s, fl);
	});
var _myrho$elm_round$Round$floorNumCom = _myrho$elm_round$Round$funNum(_myrho$elm_round$Round$floorCom);
var _myrho$elm_round$Round$ceilingCom = F2(
	function (s, fl) {
		return (_elm_lang$core$Native_Utils.cmp(fl, 0) < 0) ? A2(_myrho$elm_round$Round$floor, s, fl) : A2(_myrho$elm_round$Round$ceiling, s, fl);
	});
var _myrho$elm_round$Round$ceilingNumCom = _myrho$elm_round$Round$funNum(_myrho$elm_round$Round$ceilingCom);
var _myrho$elm_round$Round$floorNum = _myrho$elm_round$Round$funNum(_myrho$elm_round$Round$floor);
var _myrho$elm_round$Round$roundCom = _myrho$elm_round$Round$roundFun(
	function (fl) {
		var dec = fl - _elm_lang$core$Basics$toFloat(
			_myrho$elm_round$Round$truncate(fl));
		return (_elm_lang$core$Native_Utils.cmp(dec, 0.5) > -1) ? _elm_lang$core$Basics$ceiling(fl) : ((_elm_lang$core$Native_Utils.cmp(dec, -0.5) < 1) ? _elm_lang$core$Basics$floor(fl) : _elm_lang$core$Basics$round(fl));
	});
var _myrho$elm_round$Round$roundNumCom = _myrho$elm_round$Round$funNum(_myrho$elm_round$Round$roundCom);

var _cuducos$elm_format_number$Helpers$stringfy = F2(
	function (locale, formatted) {
		var decimals = function () {
			var _p0 = formatted.decimals;
			if (_p0.ctor === 'Just') {
				return A2(_elm_lang$core$Basics_ops['++'], locale.decimalSeparator, _p0._0);
			} else {
				return '';
			}
		}();
		return _elm_lang$core$String$concat(
			{
				ctor: '::',
				_0: A2(_elm_lang$core$Maybe$withDefault, '', formatted.prefix),
				_1: {
					ctor: '::',
					_0: A2(_elm_lang$core$String$join, locale.thousandSeparator, formatted.integers),
					_1: {
						ctor: '::',
						_0: decimals,
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _cuducos$elm_format_number$Helpers$splitThousands = function (integers) {
	var reversedSplitThousands = function (value) {
		return (_elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$String$length(value),
			3) > 0) ? A2(
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			A2(_elm_lang$core$String$right, 3, value),
			reversedSplitThousands(
				A2(_elm_lang$core$String$dropRight, 3, value))) : {
			ctor: '::',
			_0: value,
			_1: {ctor: '[]'}
		};
	};
	return _elm_lang$core$List$reverse(
		reversedSplitThousands(integers));
};
var _cuducos$elm_format_number$Helpers$addPrefix = function (formatted) {
	var onlyZeros = A2(
		_elm_lang$core$String$all,
		function ($char) {
			return _elm_lang$core$Native_Utils.eq(
				$char,
				_elm_lang$core$Native_Utils.chr('0'));
		},
		_elm_lang$core$String$concat(
			A2(
				_elm_lang$core$List$append,
				formatted.integers,
				_elm_lang$core$List$singleton(
					A2(_elm_lang$core$Maybe$withDefault, '', formatted.decimals)))));
	var isPositive = _elm_lang$core$Native_Utils.cmp(formatted.original, 0) > -1;
	var prefix = (isPositive || onlyZeros) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just('−');
	return _elm_lang$core$Native_Utils.update(
		formatted,
		{prefix: prefix});
};
var _cuducos$elm_format_number$Helpers$FormattedNumber = F4(
	function (a, b, c, d) {
		return {original: a, integers: b, decimals: c, prefix: d};
	});
var _cuducos$elm_format_number$Helpers$parse = F2(
	function (decimalDigits, original) {
		var parts = A2(
			_elm_lang$core$String$split,
			'.',
			A2(_myrho$elm_round$Round$round, decimalDigits, original));
		var integers = _cuducos$elm_format_number$Helpers$splitThousands(
			A2(
				_elm_lang$core$String$filter,
				_elm_lang$core$Char$isDigit,
				A2(
					_elm_lang$core$Maybe$withDefault,
					'0',
					_elm_lang$core$List$head(parts))));
		var decimals = _elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, 1, parts));
		return _cuducos$elm_format_number$Helpers$addPrefix(
			A4(_cuducos$elm_format_number$Helpers$FormattedNumber, original, integers, decimals, _elm_lang$core$Maybe$Nothing));
	});

var _cuducos$elm_format_number$FormatNumber$format = F2(
	function (locale, num) {
		return A2(
			_cuducos$elm_format_number$Helpers$stringfy,
			locale,
			A2(_cuducos$elm_format_number$Helpers$parse, locale.decimals, num));
	});


/*
 * Copyright (c) 2010 Mozilla Corporation
 * Copyright (c) 2010 Vladimir Vukicevic
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/*
 * File: mjs
 *
 * Vector and Matrix math utilities for JavaScript, optimized for WebGL.
 * Edited to work with the Elm Programming Language
 */

var _elm_community$linear_algebra$Native_Math_Vector2 = function() {

    var MJS_FLOAT_ARRAY_TYPE = Float32Array;

    var V2 = { };

    if (MJS_FLOAT_ARRAY_TYPE == Array) {
        V2.$ = function V2_$(x, y) {
            return [x, y];
        };
    } else {
        V2.$ = function V2_$(x, y) {
            return new MJS_FLOAT_ARRAY_TYPE([x, y]);
        };
    }

    V2.getX = function V2_getX(a) {
        return a[0];
    }
    V2.getY = function V2_getY(a) {
        return a[1];
    }
    V2.setX = function V2_setX(x, a) {
        return new MJS_FLOAT_ARRAY_TYPE([x, a[1]]);
    }
    V2.setY = function V2_setY(y, a) {
        return new MJS_FLOAT_ARRAY_TYPE([a[0], y]);
    }

    V2.toTuple = function V2_toTuple(a) {
        return {
            ctor:"_Tuple2",
            _0:a[0],
            _1:a[1]
        };
    };
    V2.fromTuple = function V2_fromTuple(t) {
        return new MJS_FLOAT_ARRAY_TYPE([t._0, t._1]);
    };

    V2.toRecord = function V2_toRecord(a) {
        return {
            _:{},
            x:a[0],
            y:a[1]
        };
    };
    V2.fromRecord = function V2_fromRecord(r) {
        return new MJS_FLOAT_ARRAY_TYPE([r.x, r.y]);
    };

    V2.add = function V2_add(a, b) {
        var r = new MJS_FLOAT_ARRAY_TYPE(2);
        r[0] = a[0] + b[0];
        r[1] = a[1] + b[1];
        return r;
    };

    V2.sub = function V2_sub(a, b) {
        var r = new MJS_FLOAT_ARRAY_TYPE(2);
        r[0] = a[0] - b[0];
        r[1] = a[1] - b[1];
        return r;
    };

    V2.neg = function V2_neg(a) {
        var r = new MJS_FLOAT_ARRAY_TYPE(2);
        r[0] = - a[0];
        r[1] = - a[1];
        return r;
    };

    V2.direction = function V2_direction(a, b) {
        var r = new MJS_FLOAT_ARRAY_TYPE(2);
        r[0] = a[0] - b[0];
        r[1] = a[1] - b[1];
        var im = 1.0 / V2.length(r);
        r[0] = r[0] * im;
        r[1] = r[1] * im;
        return r;
    };

    V2.length = function V2_length(a) {
        return Math.sqrt(a[0]*a[0] + a[1]*a[1]);
    };

    V2.lengthSquared = function V2_lengthSquared(a) {
        return a[0]*a[0] + a[1]*a[1];
    };

    V2.distance = function V2_distance(a, b) {
        var dx = a[0] - b[0];
        var dy = a[1] - b[1];
        return Math.sqrt(dx * dx + dy * dy);
    };

    V2.distanceSquared = function V2_distanceSquared(a, b) {
        var dx = a[0] - b[0];
        var dy = a[1] - b[1];
        return dx * dx + dy * dy;
    };

    V2.normalize = function V2_normalize(a) {
        var r = new MJS_FLOAT_ARRAY_TYPE(2);
        var im = 1.0 / V2.length(a);
        r[0] = a[0] * im;
        r[1] = a[1] * im;
        return r;
    };

    V2.scale = function V2_scale(k, a) {
        var r = new MJS_FLOAT_ARRAY_TYPE(2);
        r[0] = a[0] * k;
        r[1] = a[1] * k;
        return r;
    };

    V2.dot = function V2_dot(a, b) {
        return a[0] * b[0] + a[1] * b[1];
    };

    return {
        vec2: F2(V2.$),
        getX: V2.getX,
        getY: V2.getY,
        setX: F2(V2.setX),
        setY: F2(V2.setY),
        toTuple: V2.toTuple,
        toRecord: V2.toRecord,
        fromTuple: V2.fromTuple,
        fromRecord: V2.fromRecord,
        add: F2(V2.add),
        sub: F2(V2.sub),
        neg: V2.neg,
        direction: F2(V2.direction),
        length: V2.length,
        lengthSquared: V2.lengthSquared,
        distance: F2(V2.distance),
        distanceSquared: F2(V2.distanceSquared),
        normalize: V2.normalize,
        scale: F2(V2.scale),
        dot: F2(V2.dot)
    };

}();

var _elm_community$linear_algebra$Math_Vector2$dot = _elm_community$linear_algebra$Native_Math_Vector2.dot;
var _elm_community$linear_algebra$Math_Vector2$scale = _elm_community$linear_algebra$Native_Math_Vector2.scale;
var _elm_community$linear_algebra$Math_Vector2$normalize = _elm_community$linear_algebra$Native_Math_Vector2.normalize;
var _elm_community$linear_algebra$Math_Vector2$distanceSquared = _elm_community$linear_algebra$Native_Math_Vector2.distanceSquared;
var _elm_community$linear_algebra$Math_Vector2$distance = _elm_community$linear_algebra$Native_Math_Vector2.distance;
var _elm_community$linear_algebra$Math_Vector2$lengthSquared = _elm_community$linear_algebra$Native_Math_Vector2.lengthSquared;
var _elm_community$linear_algebra$Math_Vector2$length = _elm_community$linear_algebra$Native_Math_Vector2.length;
var _elm_community$linear_algebra$Math_Vector2$direction = _elm_community$linear_algebra$Native_Math_Vector2.direction;
var _elm_community$linear_algebra$Math_Vector2$negate = _elm_community$linear_algebra$Native_Math_Vector2.neg;
var _elm_community$linear_algebra$Math_Vector2$sub = _elm_community$linear_algebra$Native_Math_Vector2.sub;
var _elm_community$linear_algebra$Math_Vector2$add = _elm_community$linear_algebra$Native_Math_Vector2.add;
var _elm_community$linear_algebra$Math_Vector2$fromRecord = _elm_community$linear_algebra$Native_Math_Vector2.fromRecord;
var _elm_community$linear_algebra$Math_Vector2$fromTuple = _elm_community$linear_algebra$Native_Math_Vector2.fromTuple;
var _elm_community$linear_algebra$Math_Vector2$toRecord = _elm_community$linear_algebra$Native_Math_Vector2.toRecord;
var _elm_community$linear_algebra$Math_Vector2$toTuple = _elm_community$linear_algebra$Native_Math_Vector2.toTuple;
var _elm_community$linear_algebra$Math_Vector2$setY = _elm_community$linear_algebra$Native_Math_Vector2.setY;
var _elm_community$linear_algebra$Math_Vector2$setX = _elm_community$linear_algebra$Native_Math_Vector2.setX;
var _elm_community$linear_algebra$Math_Vector2$getY = _elm_community$linear_algebra$Native_Math_Vector2.getY;
var _elm_community$linear_algebra$Math_Vector2$getX = _elm_community$linear_algebra$Native_Math_Vector2.getX;
var _elm_community$linear_algebra$Math_Vector2$vec2 = _elm_community$linear_algebra$Native_Math_Vector2.vec2;
var _elm_community$linear_algebra$Math_Vector2$Vec2 = {ctor: 'Vec2'};

var _elm_community$maybe_extra$Maybe_Extra$foldrValues = F2(
	function (item, list) {
		var _p0 = item;
		if (_p0.ctor === 'Nothing') {
			return list;
		} else {
			return {ctor: '::', _0: _p0._0, _1: list};
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$values = A2(
	_elm_lang$core$List$foldr,
	_elm_community$maybe_extra$Maybe_Extra$foldrValues,
	{ctor: '[]'});
var _elm_community$maybe_extra$Maybe_Extra$filter = F2(
	function (f, m) {
		var _p1 = A2(_elm_lang$core$Maybe$map, f, m);
		if ((_p1.ctor === 'Just') && (_p1._0 === true)) {
			return m;
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$traverseArray = function (f) {
	var step = F2(
		function (e, acc) {
			var _p2 = f(e);
			if (_p2.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return A2(
					_elm_lang$core$Maybe$map,
					_elm_lang$core$Array$push(_p2._0),
					acc);
			}
		});
	return A2(
		_elm_lang$core$Array$foldl,
		step,
		_elm_lang$core$Maybe$Just(_elm_lang$core$Array$empty));
};
var _elm_community$maybe_extra$Maybe_Extra$combineArray = _elm_community$maybe_extra$Maybe_Extra$traverseArray(_elm_lang$core$Basics$identity);
var _elm_community$maybe_extra$Maybe_Extra$traverse = function (f) {
	var step = F2(
		function (e, acc) {
			var _p3 = f(e);
			if (_p3.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return A2(
					_elm_lang$core$Maybe$map,
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						})(_p3._0),
					acc);
			}
		});
	return A2(
		_elm_lang$core$List$foldr,
		step,
		_elm_lang$core$Maybe$Just(
			{ctor: '[]'}));
};
var _elm_community$maybe_extra$Maybe_Extra$combine = _elm_community$maybe_extra$Maybe_Extra$traverse(_elm_lang$core$Basics$identity);
var _elm_community$maybe_extra$Maybe_Extra$toArray = function (m) {
	var _p4 = m;
	if (_p4.ctor === 'Nothing') {
		return _elm_lang$core$Array$empty;
	} else {
		return A2(_elm_lang$core$Array$repeat, 1, _p4._0);
	}
};
var _elm_community$maybe_extra$Maybe_Extra$toList = function (m) {
	var _p5 = m;
	if (_p5.ctor === 'Nothing') {
		return {ctor: '[]'};
	} else {
		return {
			ctor: '::',
			_0: _p5._0,
			_1: {ctor: '[]'}
		};
	}
};
var _elm_community$maybe_extra$Maybe_Extra$orElse = F2(
	function (ma, mb) {
		var _p6 = mb;
		if (_p6.ctor === 'Nothing') {
			return ma;
		} else {
			return mb;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$orElseLazy = F2(
	function (fma, mb) {
		var _p7 = mb;
		if (_p7.ctor === 'Nothing') {
			return fma(
				{ctor: '_Tuple0'});
		} else {
			return mb;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$orLazy = F2(
	function (ma, fmb) {
		var _p8 = ma;
		if (_p8.ctor === 'Nothing') {
			return fmb(
				{ctor: '_Tuple0'});
		} else {
			return ma;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$or = F2(
	function (ma, mb) {
		var _p9 = ma;
		if (_p9.ctor === 'Nothing') {
			return mb;
		} else {
			return ma;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$prev = _elm_lang$core$Maybe$map2(_elm_lang$core$Basics$always);
var _elm_community$maybe_extra$Maybe_Extra$next = _elm_lang$core$Maybe$map2(
	_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always));
var _elm_community$maybe_extra$Maybe_Extra$andMap = _elm_lang$core$Maybe$map2(
	F2(
		function (x, y) {
			return y(x);
		}));
var _elm_community$maybe_extra$Maybe_Extra$unpack = F3(
	function (d, f, m) {
		var _p10 = m;
		if (_p10.ctor === 'Nothing') {
			return d(
				{ctor: '_Tuple0'});
		} else {
			return f(_p10._0);
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$unwrap = F3(
	function (d, f, m) {
		var _p11 = m;
		if (_p11.ctor === 'Nothing') {
			return d;
		} else {
			return f(_p11._0);
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$isJust = function (m) {
	var _p12 = m;
	if (_p12.ctor === 'Nothing') {
		return false;
	} else {
		return true;
	}
};
var _elm_community$maybe_extra$Maybe_Extra$isNothing = function (m) {
	var _p13 = m;
	if (_p13.ctor === 'Nothing') {
		return true;
	} else {
		return false;
	}
};
var _elm_community$maybe_extra$Maybe_Extra$join = function (mx) {
	var _p14 = mx;
	if (_p14.ctor === 'Just') {
		return _p14._0;
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_community$maybe_extra$Maybe_Extra_ops = _elm_community$maybe_extra$Maybe_Extra_ops || {};
_elm_community$maybe_extra$Maybe_Extra_ops['?'] = F2(
	function (mx, x) {
		return A2(_elm_lang$core$Maybe$withDefault, x, mx);
	});

var _elm_lang$core$Color$fmod = F2(
	function (f, n) {
		var integer = _elm_lang$core$Basics$floor(f);
		return (_elm_lang$core$Basics$toFloat(
			A2(_elm_lang$core$Basics_ops['%'], integer, n)) + f) - _elm_lang$core$Basics$toFloat(integer);
	});
var _elm_lang$core$Color$rgbToHsl = F3(
	function (red, green, blue) {
		var b = _elm_lang$core$Basics$toFloat(blue) / 255;
		var g = _elm_lang$core$Basics$toFloat(green) / 255;
		var r = _elm_lang$core$Basics$toFloat(red) / 255;
		var cMax = A2(
			_elm_lang$core$Basics$max,
			A2(_elm_lang$core$Basics$max, r, g),
			b);
		var cMin = A2(
			_elm_lang$core$Basics$min,
			A2(_elm_lang$core$Basics$min, r, g),
			b);
		var c = cMax - cMin;
		var lightness = (cMax + cMin) / 2;
		var saturation = _elm_lang$core$Native_Utils.eq(lightness, 0) ? 0 : (c / (1 - _elm_lang$core$Basics$abs((2 * lightness) - 1)));
		var hue = _elm_lang$core$Basics$degrees(60) * (_elm_lang$core$Native_Utils.eq(cMax, r) ? A2(_elm_lang$core$Color$fmod, (g - b) / c, 6) : (_elm_lang$core$Native_Utils.eq(cMax, g) ? (((b - r) / c) + 2) : (((r - g) / c) + 4)));
		return {ctor: '_Tuple3', _0: hue, _1: saturation, _2: lightness};
	});
var _elm_lang$core$Color$hslToRgb = F3(
	function (hue, saturation, lightness) {
		var normHue = hue / _elm_lang$core$Basics$degrees(60);
		var chroma = (1 - _elm_lang$core$Basics$abs((2 * lightness) - 1)) * saturation;
		var x = chroma * (1 - _elm_lang$core$Basics$abs(
			A2(_elm_lang$core$Color$fmod, normHue, 2) - 1));
		var _p0 = (_elm_lang$core$Native_Utils.cmp(normHue, 0) < 0) ? {ctor: '_Tuple3', _0: 0, _1: 0, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 1) < 0) ? {ctor: '_Tuple3', _0: chroma, _1: x, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 2) < 0) ? {ctor: '_Tuple3', _0: x, _1: chroma, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 3) < 0) ? {ctor: '_Tuple3', _0: 0, _1: chroma, _2: x} : ((_elm_lang$core$Native_Utils.cmp(normHue, 4) < 0) ? {ctor: '_Tuple3', _0: 0, _1: x, _2: chroma} : ((_elm_lang$core$Native_Utils.cmp(normHue, 5) < 0) ? {ctor: '_Tuple3', _0: x, _1: 0, _2: chroma} : ((_elm_lang$core$Native_Utils.cmp(normHue, 6) < 0) ? {ctor: '_Tuple3', _0: chroma, _1: 0, _2: x} : {ctor: '_Tuple3', _0: 0, _1: 0, _2: 0}))))));
		var r = _p0._0;
		var g = _p0._1;
		var b = _p0._2;
		var m = lightness - (chroma / 2);
		return {ctor: '_Tuple3', _0: r + m, _1: g + m, _2: b + m};
	});
var _elm_lang$core$Color$toRgb = function (color) {
	var _p1 = color;
	if (_p1.ctor === 'RGBA') {
		return {red: _p1._0, green: _p1._1, blue: _p1._2, alpha: _p1._3};
	} else {
		var _p2 = A3(_elm_lang$core$Color$hslToRgb, _p1._0, _p1._1, _p1._2);
		var r = _p2._0;
		var g = _p2._1;
		var b = _p2._2;
		return {
			red: _elm_lang$core$Basics$round(255 * r),
			green: _elm_lang$core$Basics$round(255 * g),
			blue: _elm_lang$core$Basics$round(255 * b),
			alpha: _p1._3
		};
	}
};
var _elm_lang$core$Color$toHsl = function (color) {
	var _p3 = color;
	if (_p3.ctor === 'HSLA') {
		return {hue: _p3._0, saturation: _p3._1, lightness: _p3._2, alpha: _p3._3};
	} else {
		var _p4 = A3(_elm_lang$core$Color$rgbToHsl, _p3._0, _p3._1, _p3._2);
		var h = _p4._0;
		var s = _p4._1;
		var l = _p4._2;
		return {hue: h, saturation: s, lightness: l, alpha: _p3._3};
	}
};
var _elm_lang$core$Color$HSLA = F4(
	function (a, b, c, d) {
		return {ctor: 'HSLA', _0: a, _1: b, _2: c, _3: d};
	});
var _elm_lang$core$Color$hsla = F4(
	function (hue, saturation, lightness, alpha) {
		return A4(
			_elm_lang$core$Color$HSLA,
			hue - _elm_lang$core$Basics$turns(
				_elm_lang$core$Basics$toFloat(
					_elm_lang$core$Basics$floor(hue / (2 * _elm_lang$core$Basics$pi)))),
			saturation,
			lightness,
			alpha);
	});
var _elm_lang$core$Color$hsl = F3(
	function (hue, saturation, lightness) {
		return A4(_elm_lang$core$Color$hsla, hue, saturation, lightness, 1);
	});
var _elm_lang$core$Color$complement = function (color) {
	var _p5 = color;
	if (_p5.ctor === 'HSLA') {
		return A4(
			_elm_lang$core$Color$hsla,
			_p5._0 + _elm_lang$core$Basics$degrees(180),
			_p5._1,
			_p5._2,
			_p5._3);
	} else {
		var _p6 = A3(_elm_lang$core$Color$rgbToHsl, _p5._0, _p5._1, _p5._2);
		var h = _p6._0;
		var s = _p6._1;
		var l = _p6._2;
		return A4(
			_elm_lang$core$Color$hsla,
			h + _elm_lang$core$Basics$degrees(180),
			s,
			l,
			_p5._3);
	}
};
var _elm_lang$core$Color$grayscale = function (p) {
	return A4(_elm_lang$core$Color$HSLA, 0, 0, 1 - p, 1);
};
var _elm_lang$core$Color$greyscale = function (p) {
	return A4(_elm_lang$core$Color$HSLA, 0, 0, 1 - p, 1);
};
var _elm_lang$core$Color$RGBA = F4(
	function (a, b, c, d) {
		return {ctor: 'RGBA', _0: a, _1: b, _2: c, _3: d};
	});
var _elm_lang$core$Color$rgba = _elm_lang$core$Color$RGBA;
var _elm_lang$core$Color$rgb = F3(
	function (r, g, b) {
		return A4(_elm_lang$core$Color$RGBA, r, g, b, 1);
	});
var _elm_lang$core$Color$lightRed = A4(_elm_lang$core$Color$RGBA, 239, 41, 41, 1);
var _elm_lang$core$Color$red = A4(_elm_lang$core$Color$RGBA, 204, 0, 0, 1);
var _elm_lang$core$Color$darkRed = A4(_elm_lang$core$Color$RGBA, 164, 0, 0, 1);
var _elm_lang$core$Color$lightOrange = A4(_elm_lang$core$Color$RGBA, 252, 175, 62, 1);
var _elm_lang$core$Color$orange = A4(_elm_lang$core$Color$RGBA, 245, 121, 0, 1);
var _elm_lang$core$Color$darkOrange = A4(_elm_lang$core$Color$RGBA, 206, 92, 0, 1);
var _elm_lang$core$Color$lightYellow = A4(_elm_lang$core$Color$RGBA, 255, 233, 79, 1);
var _elm_lang$core$Color$yellow = A4(_elm_lang$core$Color$RGBA, 237, 212, 0, 1);
var _elm_lang$core$Color$darkYellow = A4(_elm_lang$core$Color$RGBA, 196, 160, 0, 1);
var _elm_lang$core$Color$lightGreen = A4(_elm_lang$core$Color$RGBA, 138, 226, 52, 1);
var _elm_lang$core$Color$green = A4(_elm_lang$core$Color$RGBA, 115, 210, 22, 1);
var _elm_lang$core$Color$darkGreen = A4(_elm_lang$core$Color$RGBA, 78, 154, 6, 1);
var _elm_lang$core$Color$lightBlue = A4(_elm_lang$core$Color$RGBA, 114, 159, 207, 1);
var _elm_lang$core$Color$blue = A4(_elm_lang$core$Color$RGBA, 52, 101, 164, 1);
var _elm_lang$core$Color$darkBlue = A4(_elm_lang$core$Color$RGBA, 32, 74, 135, 1);
var _elm_lang$core$Color$lightPurple = A4(_elm_lang$core$Color$RGBA, 173, 127, 168, 1);
var _elm_lang$core$Color$purple = A4(_elm_lang$core$Color$RGBA, 117, 80, 123, 1);
var _elm_lang$core$Color$darkPurple = A4(_elm_lang$core$Color$RGBA, 92, 53, 102, 1);
var _elm_lang$core$Color$lightBrown = A4(_elm_lang$core$Color$RGBA, 233, 185, 110, 1);
var _elm_lang$core$Color$brown = A4(_elm_lang$core$Color$RGBA, 193, 125, 17, 1);
var _elm_lang$core$Color$darkBrown = A4(_elm_lang$core$Color$RGBA, 143, 89, 2, 1);
var _elm_lang$core$Color$black = A4(_elm_lang$core$Color$RGBA, 0, 0, 0, 1);
var _elm_lang$core$Color$white = A4(_elm_lang$core$Color$RGBA, 255, 255, 255, 1);
var _elm_lang$core$Color$lightGrey = A4(_elm_lang$core$Color$RGBA, 238, 238, 236, 1);
var _elm_lang$core$Color$grey = A4(_elm_lang$core$Color$RGBA, 211, 215, 207, 1);
var _elm_lang$core$Color$darkGrey = A4(_elm_lang$core$Color$RGBA, 186, 189, 182, 1);
var _elm_lang$core$Color$lightGray = A4(_elm_lang$core$Color$RGBA, 238, 238, 236, 1);
var _elm_lang$core$Color$gray = A4(_elm_lang$core$Color$RGBA, 211, 215, 207, 1);
var _elm_lang$core$Color$darkGray = A4(_elm_lang$core$Color$RGBA, 186, 189, 182, 1);
var _elm_lang$core$Color$lightCharcoal = A4(_elm_lang$core$Color$RGBA, 136, 138, 133, 1);
var _elm_lang$core$Color$charcoal = A4(_elm_lang$core$Color$RGBA, 85, 87, 83, 1);
var _elm_lang$core$Color$darkCharcoal = A4(_elm_lang$core$Color$RGBA, 46, 52, 54, 1);
var _elm_lang$core$Color$Radial = F5(
	function (a, b, c, d, e) {
		return {ctor: 'Radial', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Color$radial = _elm_lang$core$Color$Radial;
var _elm_lang$core$Color$Linear = F3(
	function (a, b, c) {
		return {ctor: 'Linear', _0: a, _1: b, _2: c};
	});
var _elm_lang$core$Color$linear = _elm_lang$core$Color$Linear;

var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Platform$sendToApp(router),
				_p1._0));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			_elm_lang$core$Task$onError,
			function (_p2) {
				return _elm_lang$core$Task$fail(
					convert(_p2));
			},
			task);
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											},
											taskE);
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p3 = tasks;
	if (_p3.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			{ctor: '[]'});
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			_p3._0,
			_elm_lang$core$Task$sequence(_p3._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p4) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p7, _p6, _p5) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$Perform = function (a) {
	return {ctor: 'Perform', _0: a};
};
var _elm_lang$core$Task$perform = F2(
	function (toMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, toMessage, task)));
	});
var _elm_lang$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(
					_elm_lang$core$Task$onError,
					function (_p8) {
						return _elm_lang$core$Task$succeed(
							resultToMessage(
								_elm_lang$core$Result$Err(_p8)));
					},
					A2(
						_elm_lang$core$Task$andThen,
						function (_p9) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Ok(_p9)));
						},
						task))));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$Perform(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			var spawnRest = function (id) {
				return A3(
					_elm_lang$core$Time$spawnHelp,
					router,
					_p0._1,
					A3(_elm_lang$core$Dict$insert, _p1, id, processes));
			};
			var spawnTimer = _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Time$setInterval,
					_p1,
					A2(_elm_lang$core$Platform$sendToSelf, router, _p1)));
			return A2(_elm_lang$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{
					ctor: '::',
					_0: _p6,
					_1: {ctor: '[]'}
				},
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{ctor: '::', _0: _p6, _1: _p4._0},
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var tellTaggers = function (time) {
				return _elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						function (tagger) {
							return A2(
								_elm_lang$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						_p7._0));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p8) {
					return _elm_lang$core$Task$succeed(state);
				},
				A2(_elm_lang$core$Task$andThen, tellTaggers, _elm_lang$core$Time$now));
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						function (_p14) {
							return _p13._2;
						},
						_elm_lang$core$Native_Scheduler.kill(id))
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: {ctor: '::', _0: interval, _1: _p18._0},
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			function (newProcesses) {
				return _elm_lang$core$Task$succeed(
					A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
			},
			A2(
				_elm_lang$core$Task$andThen,
				function (_p20) {
					return A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

var _elm_lang$dom$Native_Dom = function() {

var fakeNode = {
	addEventListener: function() {},
	removeEventListener: function() {}
};

var onDocument = on(typeof document !== 'undefined' ? document : fakeNode);
var onWindow = on(typeof window !== 'undefined' ? window : fakeNode);

function on(node)
{
	return function(eventName, decoder, toTask)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {

			function performTask(event)
			{
				var result = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, event);
				if (result.ctor === 'Ok')
				{
					_elm_lang$core$Native_Scheduler.rawSpawn(toTask(result._0));
				}
			}

			node.addEventListener(eventName, performTask);

			return function()
			{
				node.removeEventListener(eventName, performTask);
			};
		});
	};
}

var rAF = typeof requestAnimationFrame !== 'undefined'
	? requestAnimationFrame
	: function(callback) { callback(); };

function withNode(id, doStuff)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		rAF(function()
		{
			var node = document.getElementById(id);
			if (node === null)
			{
				callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NotFound', _0: id }));
				return;
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(doStuff(node)));
		});
	});
}


// FOCUS

function focus(id)
{
	return withNode(id, function(node) {
		node.focus();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function blur(id)
{
	return withNode(id, function(node) {
		node.blur();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SCROLLING

function getScrollTop(id)
{
	return withNode(id, function(node) {
		return node.scrollTop;
	});
}

function setScrollTop(id, desiredScrollTop)
{
	return withNode(id, function(node) {
		node.scrollTop = desiredScrollTop;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toBottom(id)
{
	return withNode(id, function(node) {
		node.scrollTop = node.scrollHeight;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function getScrollLeft(id)
{
	return withNode(id, function(node) {
		return node.scrollLeft;
	});
}

function setScrollLeft(id, desiredScrollLeft)
{
	return withNode(id, function(node) {
		node.scrollLeft = desiredScrollLeft;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toRight(id)
{
	return withNode(id, function(node) {
		node.scrollLeft = node.scrollWidth;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SIZE

function width(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollWidth;
			case 'VisibleContent':
				return node.clientWidth;
			case 'VisibleContentWithBorders':
				return node.offsetWidth;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.right - rect.left;
		}
	});
}

function height(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollHeight;
			case 'VisibleContent':
				return node.clientHeight;
			case 'VisibleContentWithBorders':
				return node.offsetHeight;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.bottom - rect.top;
		}
	});
}

return {
	onDocument: F3(onDocument),
	onWindow: F3(onWindow),

	focus: focus,
	blur: blur,

	getScrollTop: getScrollTop,
	setScrollTop: F2(setScrollTop),
	getScrollLeft: getScrollLeft,
	setScrollLeft: F2(setScrollLeft),
	toBottom: toBottom,
	toRight: toRight,

	height: F2(height),
	width: F2(width)
};

}();

var _elm_lang$dom$Dom_LowLevel$onWindow = _elm_lang$dom$Native_Dom.onWindow;
var _elm_lang$dom$Dom_LowLevel$onDocument = _elm_lang$dom$Native_Dom.onDocument;

var _elm_lang$html$Html_Keyed$node = _elm_lang$virtual_dom$VirtualDom$keyedNode;
var _elm_lang$html$Html_Keyed$ol = _elm_lang$html$Html_Keyed$node('ol');
var _elm_lang$html$Html_Keyed$ul = _elm_lang$html$Html_Keyed$node('ul');

var _elm_lang$http$Native_Http = function() {


// ENCODING AND DECODING

function encodeUri(string)
{
	return encodeURIComponent(string);
}

function decodeUri(string)
{
	try
	{
		return _elm_lang$core$Maybe$Just(decodeURIComponent(string));
	}
	catch(e)
	{
		return _elm_lang$core$Maybe$Nothing;
	}
}


// SEND REQUEST

function toTask(request, maybeProgress)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var xhr = new XMLHttpRequest();

		configureProgress(xhr, maybeProgress);

		xhr.addEventListener('error', function() {
			callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NetworkError' }));
		});
		xhr.addEventListener('timeout', function() {
			callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'Timeout' }));
		});
		xhr.addEventListener('load', function() {
			callback(handleResponse(xhr, request.expect.responseToResult));
		});

		try
		{
			xhr.open(request.method, request.url, true);
		}
		catch (e)
		{
			return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'BadUrl', _0: request.url }));
		}

		configureRequest(xhr, request);
		send(xhr, request.body);

		return function() { xhr.abort(); };
	});
}

function configureProgress(xhr, maybeProgress)
{
	if (maybeProgress.ctor === 'Nothing')
	{
		return;
	}

	xhr.addEventListener('progress', function(event) {
		if (!event.lengthComputable)
		{
			return;
		}
		_elm_lang$core$Native_Scheduler.rawSpawn(maybeProgress._0({
			bytes: event.loaded,
			bytesExpected: event.total
		}));
	});
}

function configureRequest(xhr, request)
{
	function setHeader(pair)
	{
		xhr.setRequestHeader(pair._0, pair._1);
	}

	A2(_elm_lang$core$List$map, setHeader, request.headers);
	xhr.responseType = request.expect.responseType;
	xhr.withCredentials = request.withCredentials;

	if (request.timeout.ctor === 'Just')
	{
		xhr.timeout = request.timeout._0;
	}
}

function send(xhr, body)
{
	switch (body.ctor)
	{
		case 'EmptyBody':
			xhr.send();
			return;

		case 'StringBody':
			xhr.setRequestHeader('Content-Type', body._0);
			xhr.send(body._1);
			return;

		case 'FormDataBody':
			xhr.send(body._0);
			return;
	}
}


// RESPONSES

function handleResponse(xhr, responseToResult)
{
	var response = toResponse(xhr);

	if (xhr.status < 200 || 300 <= xhr.status)
	{
		response.body = xhr.responseText;
		return _elm_lang$core$Native_Scheduler.fail({
			ctor: 'BadStatus',
			_0: response
		});
	}

	var result = responseToResult(response);

	if (result.ctor === 'Ok')
	{
		return _elm_lang$core$Native_Scheduler.succeed(result._0);
	}
	else
	{
		response.body = xhr.responseText;
		return _elm_lang$core$Native_Scheduler.fail({
			ctor: 'BadPayload',
			_0: result._0,
			_1: response
		});
	}
}

function toResponse(xhr)
{
	return {
		status: { code: xhr.status, message: xhr.statusText },
		headers: parseHeaders(xhr.getAllResponseHeaders()),
		url: xhr.responseURL,
		body: xhr.response
	};
}

function parseHeaders(rawHeaders)
{
	var headers = _elm_lang$core$Dict$empty;

	if (!rawHeaders)
	{
		return headers;
	}

	var headerPairs = rawHeaders.split('\u000d\u000a');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf('\u003a\u0020');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3(_elm_lang$core$Dict$update, key, function(oldValue) {
				if (oldValue.ctor === 'Just')
				{
					return _elm_lang$core$Maybe$Just(value + ', ' + oldValue._0);
				}
				return _elm_lang$core$Maybe$Just(value);
			}, headers);
		}
	}

	return headers;
}


// EXPECTORS

function expectStringResponse(responseToResult)
{
	return {
		responseType: 'text',
		responseToResult: responseToResult
	};
}

function mapExpect(func, expect)
{
	return {
		responseType: expect.responseType,
		responseToResult: function(response) {
			var convertedResponse = expect.responseToResult(response);
			return A2(_elm_lang$core$Result$map, func, convertedResponse);
		}
	};
}


// BODY

function multipart(parts)
{
	var formData = new FormData();

	while (parts.ctor !== '[]')
	{
		var part = parts._0;
		formData.append(part._0, part._1);
		parts = parts._1;
	}

	return { ctor: 'FormDataBody', _0: formData };
}

return {
	toTask: F2(toTask),
	expectStringResponse: expectStringResponse,
	mapExpect: F2(mapExpect),
	multipart: multipart,
	encodeUri: encodeUri,
	decodeUri: decodeUri
};

}();

var _elm_lang$http$Http_Internal$map = F2(
	function (func, request) {
		return _elm_lang$core$Native_Utils.update(
			request,
			{
				expect: A2(_elm_lang$http$Native_Http.mapExpect, func, request.expect)
			});
	});
var _elm_lang$http$Http_Internal$RawRequest = F7(
	function (a, b, c, d, e, f, g) {
		return {method: a, headers: b, url: c, body: d, expect: e, timeout: f, withCredentials: g};
	});
var _elm_lang$http$Http_Internal$Request = function (a) {
	return {ctor: 'Request', _0: a};
};
var _elm_lang$http$Http_Internal$Expect = {ctor: 'Expect'};
var _elm_lang$http$Http_Internal$FormDataBody = {ctor: 'FormDataBody'};
var _elm_lang$http$Http_Internal$StringBody = F2(
	function (a, b) {
		return {ctor: 'StringBody', _0: a, _1: b};
	});
var _elm_lang$http$Http_Internal$EmptyBody = {ctor: 'EmptyBody'};
var _elm_lang$http$Http_Internal$Header = F2(
	function (a, b) {
		return {ctor: 'Header', _0: a, _1: b};
	});

var _elm_lang$http$Http$decodeUri = _elm_lang$http$Native_Http.decodeUri;
var _elm_lang$http$Http$encodeUri = _elm_lang$http$Native_Http.encodeUri;
var _elm_lang$http$Http$expectStringResponse = _elm_lang$http$Native_Http.expectStringResponse;
var _elm_lang$http$Http$expectJson = function (decoder) {
	return _elm_lang$http$Http$expectStringResponse(
		function (response) {
			return A2(_elm_lang$core$Json_Decode$decodeString, decoder, response.body);
		});
};
var _elm_lang$http$Http$expectString = _elm_lang$http$Http$expectStringResponse(
	function (response) {
		return _elm_lang$core$Result$Ok(response.body);
	});
var _elm_lang$http$Http$multipartBody = _elm_lang$http$Native_Http.multipart;
var _elm_lang$http$Http$stringBody = _elm_lang$http$Http_Internal$StringBody;
var _elm_lang$http$Http$jsonBody = function (value) {
	return A2(
		_elm_lang$http$Http_Internal$StringBody,
		'application/json',
		A2(_elm_lang$core$Json_Encode$encode, 0, value));
};
var _elm_lang$http$Http$emptyBody = _elm_lang$http$Http_Internal$EmptyBody;
var _elm_lang$http$Http$header = _elm_lang$http$Http_Internal$Header;
var _elm_lang$http$Http$request = _elm_lang$http$Http_Internal$Request;
var _elm_lang$http$Http$post = F3(
	function (url, body, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'POST',
				headers: {ctor: '[]'},
				url: url,
				body: body,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _elm_lang$http$Http$get = F2(
	function (url, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'GET',
				headers: {ctor: '[]'},
				url: url,
				body: _elm_lang$http$Http$emptyBody,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _elm_lang$http$Http$getString = function (url) {
	return _elm_lang$http$Http$request(
		{
			method: 'GET',
			headers: {ctor: '[]'},
			url: url,
			body: _elm_lang$http$Http$emptyBody,
			expect: _elm_lang$http$Http$expectString,
			timeout: _elm_lang$core$Maybe$Nothing,
			withCredentials: false
		});
};
var _elm_lang$http$Http$toTask = function (_p0) {
	var _p1 = _p0;
	return A2(_elm_lang$http$Native_Http.toTask, _p1._0, _elm_lang$core$Maybe$Nothing);
};
var _elm_lang$http$Http$send = F2(
	function (resultToMessage, request) {
		return A2(
			_elm_lang$core$Task$attempt,
			resultToMessage,
			_elm_lang$http$Http$toTask(request));
	});
var _elm_lang$http$Http$Response = F4(
	function (a, b, c, d) {
		return {url: a, status: b, headers: c, body: d};
	});
var _elm_lang$http$Http$BadPayload = F2(
	function (a, b) {
		return {ctor: 'BadPayload', _0: a, _1: b};
	});
var _elm_lang$http$Http$BadStatus = function (a) {
	return {ctor: 'BadStatus', _0: a};
};
var _elm_lang$http$Http$NetworkError = {ctor: 'NetworkError'};
var _elm_lang$http$Http$Timeout = {ctor: 'Timeout'};
var _elm_lang$http$Http$BadUrl = function (a) {
	return {ctor: 'BadUrl', _0: a};
};
var _elm_lang$http$Http$StringPart = F2(
	function (a, b) {
		return {ctor: 'StringPart', _0: a, _1: b};
	});
var _elm_lang$http$Http$stringPart = _elm_lang$http$Http$StringPart;

var _elm_lang$keyboard$Keyboard$onSelfMsg = F3(
	function (router, _p0, state) {
		var _p1 = _p0;
		var _p2 = A2(_elm_lang$core$Dict$get, _p1.category, state);
		if (_p2.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var send = function (tagger) {
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					tagger(_p1.keyCode));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p3) {
					return _elm_lang$core$Task$succeed(state);
				},
				_elm_lang$core$Task$sequence(
					A2(_elm_lang$core$List$map, send, _p2._0.taggers)));
		}
	});
var _elm_lang$keyboard$Keyboard_ops = _elm_lang$keyboard$Keyboard_ops || {};
_elm_lang$keyboard$Keyboard_ops['&>'] = F2(
	function (task1, task2) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (_p4) {
				return task2;
			},
			task1);
	});
var _elm_lang$keyboard$Keyboard$init = _elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty);
var _elm_lang$keyboard$Keyboard$categorizeHelpHelp = F2(
	function (value, maybeValues) {
		var _p5 = maybeValues;
		if (_p5.ctor === 'Nothing') {
			return _elm_lang$core$Maybe$Just(
				{
					ctor: '::',
					_0: value,
					_1: {ctor: '[]'}
				});
		} else {
			return _elm_lang$core$Maybe$Just(
				{ctor: '::', _0: value, _1: _p5._0});
		}
	});
var _elm_lang$keyboard$Keyboard$categorizeHelp = F2(
	function (subs, subDict) {
		categorizeHelp:
		while (true) {
			var _p6 = subs;
			if (_p6.ctor === '[]') {
				return subDict;
			} else {
				var _v4 = _p6._1,
					_v5 = A3(
					_elm_lang$core$Dict$update,
					_p6._0._0,
					_elm_lang$keyboard$Keyboard$categorizeHelpHelp(_p6._0._1),
					subDict);
				subs = _v4;
				subDict = _v5;
				continue categorizeHelp;
			}
		}
	});
var _elm_lang$keyboard$Keyboard$categorize = function (subs) {
	return A2(_elm_lang$keyboard$Keyboard$categorizeHelp, subs, _elm_lang$core$Dict$empty);
};
var _elm_lang$keyboard$Keyboard$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$keyboard$Keyboard$subscription = _elm_lang$core$Native_Platform.leaf('Keyboard');
var _elm_lang$keyboard$Keyboard$Watcher = F2(
	function (a, b) {
		return {taggers: a, pid: b};
	});
var _elm_lang$keyboard$Keyboard$Msg = F2(
	function (a, b) {
		return {category: a, keyCode: b};
	});
var _elm_lang$keyboard$Keyboard$onEffects = F3(
	function (router, newSubs, oldState) {
		var rightStep = F3(
			function (category, taggers, task) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (state) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (pid) {
								return _elm_lang$core$Task$succeed(
									A3(
										_elm_lang$core$Dict$insert,
										category,
										A2(_elm_lang$keyboard$Keyboard$Watcher, taggers, pid),
										state));
							},
							_elm_lang$core$Process$spawn(
								A3(
									_elm_lang$dom$Dom_LowLevel$onDocument,
									category,
									_elm_lang$keyboard$Keyboard$keyCode,
									function (_p7) {
										return A2(
											_elm_lang$core$Platform$sendToSelf,
											router,
											A2(_elm_lang$keyboard$Keyboard$Msg, category, _p7));
									})));
					},
					task);
			});
		var bothStep = F4(
			function (category, _p8, taggers, task) {
				var _p9 = _p8;
				return A2(
					_elm_lang$core$Task$map,
					A2(
						_elm_lang$core$Dict$insert,
						category,
						A2(_elm_lang$keyboard$Keyboard$Watcher, taggers, _p9.pid)),
					task);
			});
		var leftStep = F3(
			function (category, _p10, task) {
				var _p11 = _p10;
				return A2(
					_elm_lang$keyboard$Keyboard_ops['&>'],
					_elm_lang$core$Process$kill(_p11.pid),
					task);
			});
		return A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			oldState,
			_elm_lang$keyboard$Keyboard$categorize(newSubs),
			_elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty));
	});
var _elm_lang$keyboard$Keyboard$MySub = F2(
	function (a, b) {
		return {ctor: 'MySub', _0: a, _1: b};
	});
var _elm_lang$keyboard$Keyboard$presses = function (tagger) {
	return _elm_lang$keyboard$Keyboard$subscription(
		A2(_elm_lang$keyboard$Keyboard$MySub, 'keypress', tagger));
};
var _elm_lang$keyboard$Keyboard$downs = function (tagger) {
	return _elm_lang$keyboard$Keyboard$subscription(
		A2(_elm_lang$keyboard$Keyboard$MySub, 'keydown', tagger));
};
var _elm_lang$keyboard$Keyboard$ups = function (tagger) {
	return _elm_lang$keyboard$Keyboard$subscription(
		A2(_elm_lang$keyboard$Keyboard$MySub, 'keyup', tagger));
};
var _elm_lang$keyboard$Keyboard$subMap = F2(
	function (func, _p12) {
		var _p13 = _p12;
		return A2(
			_elm_lang$keyboard$Keyboard$MySub,
			_p13._0,
			function (_p14) {
				return func(
					_p13._1(_p14));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Keyboard'] = {pkg: 'elm-lang/keyboard', init: _elm_lang$keyboard$Keyboard$init, onEffects: _elm_lang$keyboard$Keyboard$onEffects, onSelfMsg: _elm_lang$keyboard$Keyboard$onSelfMsg, tag: 'sub', subMap: _elm_lang$keyboard$Keyboard$subMap};

var _elm_lang$mouse$Mouse_ops = _elm_lang$mouse$Mouse_ops || {};
_elm_lang$mouse$Mouse_ops['&>'] = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (_p0) {
				return t2;
			},
			t1);
	});
var _elm_lang$mouse$Mouse$onSelfMsg = F3(
	function (router, _p1, state) {
		var _p2 = _p1;
		var _p3 = A2(_elm_lang$core$Dict$get, _p2.category, state);
		if (_p3.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var send = function (tagger) {
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					tagger(_p2.position));
			};
			return A2(
				_elm_lang$mouse$Mouse_ops['&>'],
				_elm_lang$core$Task$sequence(
					A2(_elm_lang$core$List$map, send, _p3._0.taggers)),
				_elm_lang$core$Task$succeed(state));
		}
	});
var _elm_lang$mouse$Mouse$init = _elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty);
var _elm_lang$mouse$Mouse$categorizeHelpHelp = F2(
	function (value, maybeValues) {
		var _p4 = maybeValues;
		if (_p4.ctor === 'Nothing') {
			return _elm_lang$core$Maybe$Just(
				{
					ctor: '::',
					_0: value,
					_1: {ctor: '[]'}
				});
		} else {
			return _elm_lang$core$Maybe$Just(
				{ctor: '::', _0: value, _1: _p4._0});
		}
	});
var _elm_lang$mouse$Mouse$categorizeHelp = F2(
	function (subs, subDict) {
		categorizeHelp:
		while (true) {
			var _p5 = subs;
			if (_p5.ctor === '[]') {
				return subDict;
			} else {
				var _v4 = _p5._1,
					_v5 = A3(
					_elm_lang$core$Dict$update,
					_p5._0._0,
					_elm_lang$mouse$Mouse$categorizeHelpHelp(_p5._0._1),
					subDict);
				subs = _v4;
				subDict = _v5;
				continue categorizeHelp;
			}
		}
	});
var _elm_lang$mouse$Mouse$categorize = function (subs) {
	return A2(_elm_lang$mouse$Mouse$categorizeHelp, subs, _elm_lang$core$Dict$empty);
};
var _elm_lang$mouse$Mouse$subscription = _elm_lang$core$Native_Platform.leaf('Mouse');
var _elm_lang$mouse$Mouse$Position = F2(
	function (a, b) {
		return {x: a, y: b};
	});
var _elm_lang$mouse$Mouse$position = A3(
	_elm_lang$core$Json_Decode$map2,
	_elm_lang$mouse$Mouse$Position,
	A2(_elm_lang$core$Json_Decode$field, 'pageX', _elm_lang$core$Json_Decode$int),
	A2(_elm_lang$core$Json_Decode$field, 'pageY', _elm_lang$core$Json_Decode$int));
var _elm_lang$mouse$Mouse$Watcher = F2(
	function (a, b) {
		return {taggers: a, pid: b};
	});
var _elm_lang$mouse$Mouse$Msg = F2(
	function (a, b) {
		return {category: a, position: b};
	});
var _elm_lang$mouse$Mouse$onEffects = F3(
	function (router, newSubs, oldState) {
		var rightStep = F3(
			function (category, taggers, task) {
				var tracker = A3(
					_elm_lang$dom$Dom_LowLevel$onDocument,
					category,
					_elm_lang$mouse$Mouse$position,
					function (_p6) {
						return A2(
							_elm_lang$core$Platform$sendToSelf,
							router,
							A2(_elm_lang$mouse$Mouse$Msg, category, _p6));
					});
				return A2(
					_elm_lang$core$Task$andThen,
					function (state) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (pid) {
								return _elm_lang$core$Task$succeed(
									A3(
										_elm_lang$core$Dict$insert,
										category,
										A2(_elm_lang$mouse$Mouse$Watcher, taggers, pid),
										state));
							},
							_elm_lang$core$Process$spawn(tracker));
					},
					task);
			});
		var bothStep = F4(
			function (category, _p7, taggers, task) {
				var _p8 = _p7;
				return A2(
					_elm_lang$core$Task$andThen,
					function (state) {
						return _elm_lang$core$Task$succeed(
							A3(
								_elm_lang$core$Dict$insert,
								category,
								A2(_elm_lang$mouse$Mouse$Watcher, taggers, _p8.pid),
								state));
					},
					task);
			});
		var leftStep = F3(
			function (category, _p9, task) {
				var _p10 = _p9;
				return A2(
					_elm_lang$mouse$Mouse_ops['&>'],
					_elm_lang$core$Process$kill(_p10.pid),
					task);
			});
		return A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			oldState,
			_elm_lang$mouse$Mouse$categorize(newSubs),
			_elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty));
	});
var _elm_lang$mouse$Mouse$MySub = F2(
	function (a, b) {
		return {ctor: 'MySub', _0: a, _1: b};
	});
var _elm_lang$mouse$Mouse$clicks = function (tagger) {
	return _elm_lang$mouse$Mouse$subscription(
		A2(_elm_lang$mouse$Mouse$MySub, 'click', tagger));
};
var _elm_lang$mouse$Mouse$moves = function (tagger) {
	return _elm_lang$mouse$Mouse$subscription(
		A2(_elm_lang$mouse$Mouse$MySub, 'mousemove', tagger));
};
var _elm_lang$mouse$Mouse$downs = function (tagger) {
	return _elm_lang$mouse$Mouse$subscription(
		A2(_elm_lang$mouse$Mouse$MySub, 'mousedown', tagger));
};
var _elm_lang$mouse$Mouse$ups = function (tagger) {
	return _elm_lang$mouse$Mouse$subscription(
		A2(_elm_lang$mouse$Mouse$MySub, 'mouseup', tagger));
};
var _elm_lang$mouse$Mouse$subMap = F2(
	function (func, _p11) {
		var _p12 = _p11;
		return A2(
			_elm_lang$mouse$Mouse$MySub,
			_p12._0,
			function (_p13) {
				return func(
					_p12._1(_p13));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Mouse'] = {pkg: 'elm-lang/mouse', init: _elm_lang$mouse$Mouse$init, onEffects: _elm_lang$mouse$Mouse$onEffects, onSelfMsg: _elm_lang$mouse$Mouse$onSelfMsg, tag: 'sub', subMap: _elm_lang$mouse$Mouse$subMap};

var _elm_lang$svg$Svg$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$svg$Svg$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$svg$Svg$svgNamespace = A2(
	_elm_lang$virtual_dom$VirtualDom$property,
	'namespace',
	_elm_lang$core$Json_Encode$string('http://www.w3.org/2000/svg'));
var _elm_lang$svg$Svg$node = F3(
	function (name, attributes, children) {
		return A3(
			_elm_lang$virtual_dom$VirtualDom$node,
			name,
			{ctor: '::', _0: _elm_lang$svg$Svg$svgNamespace, _1: attributes},
			children);
	});
var _elm_lang$svg$Svg$svg = _elm_lang$svg$Svg$node('svg');
var _elm_lang$svg$Svg$foreignObject = _elm_lang$svg$Svg$node('foreignObject');
var _elm_lang$svg$Svg$animate = _elm_lang$svg$Svg$node('animate');
var _elm_lang$svg$Svg$animateColor = _elm_lang$svg$Svg$node('animateColor');
var _elm_lang$svg$Svg$animateMotion = _elm_lang$svg$Svg$node('animateMotion');
var _elm_lang$svg$Svg$animateTransform = _elm_lang$svg$Svg$node('animateTransform');
var _elm_lang$svg$Svg$mpath = _elm_lang$svg$Svg$node('mpath');
var _elm_lang$svg$Svg$set = _elm_lang$svg$Svg$node('set');
var _elm_lang$svg$Svg$a = _elm_lang$svg$Svg$node('a');
var _elm_lang$svg$Svg$defs = _elm_lang$svg$Svg$node('defs');
var _elm_lang$svg$Svg$g = _elm_lang$svg$Svg$node('g');
var _elm_lang$svg$Svg$marker = _elm_lang$svg$Svg$node('marker');
var _elm_lang$svg$Svg$mask = _elm_lang$svg$Svg$node('mask');
var _elm_lang$svg$Svg$pattern = _elm_lang$svg$Svg$node('pattern');
var _elm_lang$svg$Svg$switch = _elm_lang$svg$Svg$node('switch');
var _elm_lang$svg$Svg$symbol = _elm_lang$svg$Svg$node('symbol');
var _elm_lang$svg$Svg$desc = _elm_lang$svg$Svg$node('desc');
var _elm_lang$svg$Svg$metadata = _elm_lang$svg$Svg$node('metadata');
var _elm_lang$svg$Svg$title = _elm_lang$svg$Svg$node('title');
var _elm_lang$svg$Svg$feBlend = _elm_lang$svg$Svg$node('feBlend');
var _elm_lang$svg$Svg$feColorMatrix = _elm_lang$svg$Svg$node('feColorMatrix');
var _elm_lang$svg$Svg$feComponentTransfer = _elm_lang$svg$Svg$node('feComponentTransfer');
var _elm_lang$svg$Svg$feComposite = _elm_lang$svg$Svg$node('feComposite');
var _elm_lang$svg$Svg$feConvolveMatrix = _elm_lang$svg$Svg$node('feConvolveMatrix');
var _elm_lang$svg$Svg$feDiffuseLighting = _elm_lang$svg$Svg$node('feDiffuseLighting');
var _elm_lang$svg$Svg$feDisplacementMap = _elm_lang$svg$Svg$node('feDisplacementMap');
var _elm_lang$svg$Svg$feFlood = _elm_lang$svg$Svg$node('feFlood');
var _elm_lang$svg$Svg$feFuncA = _elm_lang$svg$Svg$node('feFuncA');
var _elm_lang$svg$Svg$feFuncB = _elm_lang$svg$Svg$node('feFuncB');
var _elm_lang$svg$Svg$feFuncG = _elm_lang$svg$Svg$node('feFuncG');
var _elm_lang$svg$Svg$feFuncR = _elm_lang$svg$Svg$node('feFuncR');
var _elm_lang$svg$Svg$feGaussianBlur = _elm_lang$svg$Svg$node('feGaussianBlur');
var _elm_lang$svg$Svg$feImage = _elm_lang$svg$Svg$node('feImage');
var _elm_lang$svg$Svg$feMerge = _elm_lang$svg$Svg$node('feMerge');
var _elm_lang$svg$Svg$feMergeNode = _elm_lang$svg$Svg$node('feMergeNode');
var _elm_lang$svg$Svg$feMorphology = _elm_lang$svg$Svg$node('feMorphology');
var _elm_lang$svg$Svg$feOffset = _elm_lang$svg$Svg$node('feOffset');
var _elm_lang$svg$Svg$feSpecularLighting = _elm_lang$svg$Svg$node('feSpecularLighting');
var _elm_lang$svg$Svg$feTile = _elm_lang$svg$Svg$node('feTile');
var _elm_lang$svg$Svg$feTurbulence = _elm_lang$svg$Svg$node('feTurbulence');
var _elm_lang$svg$Svg$font = _elm_lang$svg$Svg$node('font');
var _elm_lang$svg$Svg$linearGradient = _elm_lang$svg$Svg$node('linearGradient');
var _elm_lang$svg$Svg$radialGradient = _elm_lang$svg$Svg$node('radialGradient');
var _elm_lang$svg$Svg$stop = _elm_lang$svg$Svg$node('stop');
var _elm_lang$svg$Svg$circle = _elm_lang$svg$Svg$node('circle');
var _elm_lang$svg$Svg$ellipse = _elm_lang$svg$Svg$node('ellipse');
var _elm_lang$svg$Svg$image = _elm_lang$svg$Svg$node('image');
var _elm_lang$svg$Svg$line = _elm_lang$svg$Svg$node('line');
var _elm_lang$svg$Svg$path = _elm_lang$svg$Svg$node('path');
var _elm_lang$svg$Svg$polygon = _elm_lang$svg$Svg$node('polygon');
var _elm_lang$svg$Svg$polyline = _elm_lang$svg$Svg$node('polyline');
var _elm_lang$svg$Svg$rect = _elm_lang$svg$Svg$node('rect');
var _elm_lang$svg$Svg$use = _elm_lang$svg$Svg$node('use');
var _elm_lang$svg$Svg$feDistantLight = _elm_lang$svg$Svg$node('feDistantLight');
var _elm_lang$svg$Svg$fePointLight = _elm_lang$svg$Svg$node('fePointLight');
var _elm_lang$svg$Svg$feSpotLight = _elm_lang$svg$Svg$node('feSpotLight');
var _elm_lang$svg$Svg$altGlyph = _elm_lang$svg$Svg$node('altGlyph');
var _elm_lang$svg$Svg$altGlyphDef = _elm_lang$svg$Svg$node('altGlyphDef');
var _elm_lang$svg$Svg$altGlyphItem = _elm_lang$svg$Svg$node('altGlyphItem');
var _elm_lang$svg$Svg$glyph = _elm_lang$svg$Svg$node('glyph');
var _elm_lang$svg$Svg$glyphRef = _elm_lang$svg$Svg$node('glyphRef');
var _elm_lang$svg$Svg$textPath = _elm_lang$svg$Svg$node('textPath');
var _elm_lang$svg$Svg$text_ = _elm_lang$svg$Svg$node('text');
var _elm_lang$svg$Svg$tref = _elm_lang$svg$Svg$node('tref');
var _elm_lang$svg$Svg$tspan = _elm_lang$svg$Svg$node('tspan');
var _elm_lang$svg$Svg$clipPath = _elm_lang$svg$Svg$node('clipPath');
var _elm_lang$svg$Svg$colorProfile = _elm_lang$svg$Svg$node('colorProfile');
var _elm_lang$svg$Svg$cursor = _elm_lang$svg$Svg$node('cursor');
var _elm_lang$svg$Svg$filter = _elm_lang$svg$Svg$node('filter');
var _elm_lang$svg$Svg$script = _elm_lang$svg$Svg$node('script');
var _elm_lang$svg$Svg$style = _elm_lang$svg$Svg$node('style');
var _elm_lang$svg$Svg$view = _elm_lang$svg$Svg$node('view');

var _elm_lang$svg$Svg_Attributes$writingMode = _elm_lang$virtual_dom$VirtualDom$attribute('writing-mode');
var _elm_lang$svg$Svg_Attributes$wordSpacing = _elm_lang$virtual_dom$VirtualDom$attribute('word-spacing');
var _elm_lang$svg$Svg_Attributes$visibility = _elm_lang$virtual_dom$VirtualDom$attribute('visibility');
var _elm_lang$svg$Svg_Attributes$unicodeBidi = _elm_lang$virtual_dom$VirtualDom$attribute('unicode-bidi');
var _elm_lang$svg$Svg_Attributes$textRendering = _elm_lang$virtual_dom$VirtualDom$attribute('text-rendering');
var _elm_lang$svg$Svg_Attributes$textDecoration = _elm_lang$virtual_dom$VirtualDom$attribute('text-decoration');
var _elm_lang$svg$Svg_Attributes$textAnchor = _elm_lang$virtual_dom$VirtualDom$attribute('text-anchor');
var _elm_lang$svg$Svg_Attributes$stroke = _elm_lang$virtual_dom$VirtualDom$attribute('stroke');
var _elm_lang$svg$Svg_Attributes$strokeWidth = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-width');
var _elm_lang$svg$Svg_Attributes$strokeOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-opacity');
var _elm_lang$svg$Svg_Attributes$strokeMiterlimit = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-miterlimit');
var _elm_lang$svg$Svg_Attributes$strokeLinejoin = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-linejoin');
var _elm_lang$svg$Svg_Attributes$strokeLinecap = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-linecap');
var _elm_lang$svg$Svg_Attributes$strokeDashoffset = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-dashoffset');
var _elm_lang$svg$Svg_Attributes$strokeDasharray = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-dasharray');
var _elm_lang$svg$Svg_Attributes$stopOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('stop-opacity');
var _elm_lang$svg$Svg_Attributes$stopColor = _elm_lang$virtual_dom$VirtualDom$attribute('stop-color');
var _elm_lang$svg$Svg_Attributes$shapeRendering = _elm_lang$virtual_dom$VirtualDom$attribute('shape-rendering');
var _elm_lang$svg$Svg_Attributes$pointerEvents = _elm_lang$virtual_dom$VirtualDom$attribute('pointer-events');
var _elm_lang$svg$Svg_Attributes$overflow = _elm_lang$virtual_dom$VirtualDom$attribute('overflow');
var _elm_lang$svg$Svg_Attributes$opacity = _elm_lang$virtual_dom$VirtualDom$attribute('opacity');
var _elm_lang$svg$Svg_Attributes$mask = _elm_lang$virtual_dom$VirtualDom$attribute('mask');
var _elm_lang$svg$Svg_Attributes$markerStart = _elm_lang$virtual_dom$VirtualDom$attribute('marker-start');
var _elm_lang$svg$Svg_Attributes$markerMid = _elm_lang$virtual_dom$VirtualDom$attribute('marker-mid');
var _elm_lang$svg$Svg_Attributes$markerEnd = _elm_lang$virtual_dom$VirtualDom$attribute('marker-end');
var _elm_lang$svg$Svg_Attributes$lightingColor = _elm_lang$virtual_dom$VirtualDom$attribute('lighting-color');
var _elm_lang$svg$Svg_Attributes$letterSpacing = _elm_lang$virtual_dom$VirtualDom$attribute('letter-spacing');
var _elm_lang$svg$Svg_Attributes$kerning = _elm_lang$virtual_dom$VirtualDom$attribute('kerning');
var _elm_lang$svg$Svg_Attributes$imageRendering = _elm_lang$virtual_dom$VirtualDom$attribute('image-rendering');
var _elm_lang$svg$Svg_Attributes$glyphOrientationVertical = _elm_lang$virtual_dom$VirtualDom$attribute('glyph-orientation-vertical');
var _elm_lang$svg$Svg_Attributes$glyphOrientationHorizontal = _elm_lang$virtual_dom$VirtualDom$attribute('glyph-orientation-horizontal');
var _elm_lang$svg$Svg_Attributes$fontWeight = _elm_lang$virtual_dom$VirtualDom$attribute('font-weight');
var _elm_lang$svg$Svg_Attributes$fontVariant = _elm_lang$virtual_dom$VirtualDom$attribute('font-variant');
var _elm_lang$svg$Svg_Attributes$fontStyle = _elm_lang$virtual_dom$VirtualDom$attribute('font-style');
var _elm_lang$svg$Svg_Attributes$fontStretch = _elm_lang$virtual_dom$VirtualDom$attribute('font-stretch');
var _elm_lang$svg$Svg_Attributes$fontSize = _elm_lang$virtual_dom$VirtualDom$attribute('font-size');
var _elm_lang$svg$Svg_Attributes$fontSizeAdjust = _elm_lang$virtual_dom$VirtualDom$attribute('font-size-adjust');
var _elm_lang$svg$Svg_Attributes$fontFamily = _elm_lang$virtual_dom$VirtualDom$attribute('font-family');
var _elm_lang$svg$Svg_Attributes$floodOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('flood-opacity');
var _elm_lang$svg$Svg_Attributes$floodColor = _elm_lang$virtual_dom$VirtualDom$attribute('flood-color');
var _elm_lang$svg$Svg_Attributes$filter = _elm_lang$virtual_dom$VirtualDom$attribute('filter');
var _elm_lang$svg$Svg_Attributes$fill = _elm_lang$virtual_dom$VirtualDom$attribute('fill');
var _elm_lang$svg$Svg_Attributes$fillRule = _elm_lang$virtual_dom$VirtualDom$attribute('fill-rule');
var _elm_lang$svg$Svg_Attributes$fillOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('fill-opacity');
var _elm_lang$svg$Svg_Attributes$enableBackground = _elm_lang$virtual_dom$VirtualDom$attribute('enable-background');
var _elm_lang$svg$Svg_Attributes$dominantBaseline = _elm_lang$virtual_dom$VirtualDom$attribute('dominant-baseline');
var _elm_lang$svg$Svg_Attributes$display = _elm_lang$virtual_dom$VirtualDom$attribute('display');
var _elm_lang$svg$Svg_Attributes$direction = _elm_lang$virtual_dom$VirtualDom$attribute('direction');
var _elm_lang$svg$Svg_Attributes$cursor = _elm_lang$virtual_dom$VirtualDom$attribute('cursor');
var _elm_lang$svg$Svg_Attributes$color = _elm_lang$virtual_dom$VirtualDom$attribute('color');
var _elm_lang$svg$Svg_Attributes$colorRendering = _elm_lang$virtual_dom$VirtualDom$attribute('color-rendering');
var _elm_lang$svg$Svg_Attributes$colorProfile = _elm_lang$virtual_dom$VirtualDom$attribute('color-profile');
var _elm_lang$svg$Svg_Attributes$colorInterpolation = _elm_lang$virtual_dom$VirtualDom$attribute('color-interpolation');
var _elm_lang$svg$Svg_Attributes$colorInterpolationFilters = _elm_lang$virtual_dom$VirtualDom$attribute('color-interpolation-filters');
var _elm_lang$svg$Svg_Attributes$clip = _elm_lang$virtual_dom$VirtualDom$attribute('clip');
var _elm_lang$svg$Svg_Attributes$clipRule = _elm_lang$virtual_dom$VirtualDom$attribute('clip-rule');
var _elm_lang$svg$Svg_Attributes$clipPath = _elm_lang$virtual_dom$VirtualDom$attribute('clip-path');
var _elm_lang$svg$Svg_Attributes$baselineShift = _elm_lang$virtual_dom$VirtualDom$attribute('baseline-shift');
var _elm_lang$svg$Svg_Attributes$alignmentBaseline = _elm_lang$virtual_dom$VirtualDom$attribute('alignment-baseline');
var _elm_lang$svg$Svg_Attributes$zoomAndPan = _elm_lang$virtual_dom$VirtualDom$attribute('zoomAndPan');
var _elm_lang$svg$Svg_Attributes$z = _elm_lang$virtual_dom$VirtualDom$attribute('z');
var _elm_lang$svg$Svg_Attributes$yChannelSelector = _elm_lang$virtual_dom$VirtualDom$attribute('yChannelSelector');
var _elm_lang$svg$Svg_Attributes$y2 = _elm_lang$virtual_dom$VirtualDom$attribute('y2');
var _elm_lang$svg$Svg_Attributes$y1 = _elm_lang$virtual_dom$VirtualDom$attribute('y1');
var _elm_lang$svg$Svg_Attributes$y = _elm_lang$virtual_dom$VirtualDom$attribute('y');
var _elm_lang$svg$Svg_Attributes$xmlSpace = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:space');
var _elm_lang$svg$Svg_Attributes$xmlLang = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:lang');
var _elm_lang$svg$Svg_Attributes$xmlBase = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:base');
var _elm_lang$svg$Svg_Attributes$xlinkType = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:type');
var _elm_lang$svg$Svg_Attributes$xlinkTitle = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:title');
var _elm_lang$svg$Svg_Attributes$xlinkShow = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:show');
var _elm_lang$svg$Svg_Attributes$xlinkRole = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:role');
var _elm_lang$svg$Svg_Attributes$xlinkHref = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:href');
var _elm_lang$svg$Svg_Attributes$xlinkArcrole = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:arcrole');
var _elm_lang$svg$Svg_Attributes$xlinkActuate = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:actuate');
var _elm_lang$svg$Svg_Attributes$xChannelSelector = _elm_lang$virtual_dom$VirtualDom$attribute('xChannelSelector');
var _elm_lang$svg$Svg_Attributes$x2 = _elm_lang$virtual_dom$VirtualDom$attribute('x2');
var _elm_lang$svg$Svg_Attributes$x1 = _elm_lang$virtual_dom$VirtualDom$attribute('x1');
var _elm_lang$svg$Svg_Attributes$xHeight = _elm_lang$virtual_dom$VirtualDom$attribute('x-height');
var _elm_lang$svg$Svg_Attributes$x = _elm_lang$virtual_dom$VirtualDom$attribute('x');
var _elm_lang$svg$Svg_Attributes$widths = _elm_lang$virtual_dom$VirtualDom$attribute('widths');
var _elm_lang$svg$Svg_Attributes$width = _elm_lang$virtual_dom$VirtualDom$attribute('width');
var _elm_lang$svg$Svg_Attributes$viewTarget = _elm_lang$virtual_dom$VirtualDom$attribute('viewTarget');
var _elm_lang$svg$Svg_Attributes$viewBox = _elm_lang$virtual_dom$VirtualDom$attribute('viewBox');
var _elm_lang$svg$Svg_Attributes$vertOriginY = _elm_lang$virtual_dom$VirtualDom$attribute('vert-origin-y');
var _elm_lang$svg$Svg_Attributes$vertOriginX = _elm_lang$virtual_dom$VirtualDom$attribute('vert-origin-x');
var _elm_lang$svg$Svg_Attributes$vertAdvY = _elm_lang$virtual_dom$VirtualDom$attribute('vert-adv-y');
var _elm_lang$svg$Svg_Attributes$version = _elm_lang$virtual_dom$VirtualDom$attribute('version');
var _elm_lang$svg$Svg_Attributes$values = _elm_lang$virtual_dom$VirtualDom$attribute('values');
var _elm_lang$svg$Svg_Attributes$vMathematical = _elm_lang$virtual_dom$VirtualDom$attribute('v-mathematical');
var _elm_lang$svg$Svg_Attributes$vIdeographic = _elm_lang$virtual_dom$VirtualDom$attribute('v-ideographic');
var _elm_lang$svg$Svg_Attributes$vHanging = _elm_lang$virtual_dom$VirtualDom$attribute('v-hanging');
var _elm_lang$svg$Svg_Attributes$vAlphabetic = _elm_lang$virtual_dom$VirtualDom$attribute('v-alphabetic');
var _elm_lang$svg$Svg_Attributes$unitsPerEm = _elm_lang$virtual_dom$VirtualDom$attribute('units-per-em');
var _elm_lang$svg$Svg_Attributes$unicodeRange = _elm_lang$virtual_dom$VirtualDom$attribute('unicode-range');
var _elm_lang$svg$Svg_Attributes$unicode = _elm_lang$virtual_dom$VirtualDom$attribute('unicode');
var _elm_lang$svg$Svg_Attributes$underlineThickness = _elm_lang$virtual_dom$VirtualDom$attribute('underline-thickness');
var _elm_lang$svg$Svg_Attributes$underlinePosition = _elm_lang$virtual_dom$VirtualDom$attribute('underline-position');
var _elm_lang$svg$Svg_Attributes$u2 = _elm_lang$virtual_dom$VirtualDom$attribute('u2');
var _elm_lang$svg$Svg_Attributes$u1 = _elm_lang$virtual_dom$VirtualDom$attribute('u1');
var _elm_lang$svg$Svg_Attributes$type_ = _elm_lang$virtual_dom$VirtualDom$attribute('type');
var _elm_lang$svg$Svg_Attributes$transform = _elm_lang$virtual_dom$VirtualDom$attribute('transform');
var _elm_lang$svg$Svg_Attributes$to = _elm_lang$virtual_dom$VirtualDom$attribute('to');
var _elm_lang$svg$Svg_Attributes$title = _elm_lang$virtual_dom$VirtualDom$attribute('title');
var _elm_lang$svg$Svg_Attributes$textLength = _elm_lang$virtual_dom$VirtualDom$attribute('textLength');
var _elm_lang$svg$Svg_Attributes$targetY = _elm_lang$virtual_dom$VirtualDom$attribute('targetY');
var _elm_lang$svg$Svg_Attributes$targetX = _elm_lang$virtual_dom$VirtualDom$attribute('targetX');
var _elm_lang$svg$Svg_Attributes$target = _elm_lang$virtual_dom$VirtualDom$attribute('target');
var _elm_lang$svg$Svg_Attributes$tableValues = _elm_lang$virtual_dom$VirtualDom$attribute('tableValues');
var _elm_lang$svg$Svg_Attributes$systemLanguage = _elm_lang$virtual_dom$VirtualDom$attribute('systemLanguage');
var _elm_lang$svg$Svg_Attributes$surfaceScale = _elm_lang$virtual_dom$VirtualDom$attribute('surfaceScale');
var _elm_lang$svg$Svg_Attributes$style = _elm_lang$virtual_dom$VirtualDom$attribute('style');
var _elm_lang$svg$Svg_Attributes$string = _elm_lang$virtual_dom$VirtualDom$attribute('string');
var _elm_lang$svg$Svg_Attributes$strikethroughThickness = _elm_lang$virtual_dom$VirtualDom$attribute('strikethrough-thickness');
var _elm_lang$svg$Svg_Attributes$strikethroughPosition = _elm_lang$virtual_dom$VirtualDom$attribute('strikethrough-position');
var _elm_lang$svg$Svg_Attributes$stitchTiles = _elm_lang$virtual_dom$VirtualDom$attribute('stitchTiles');
var _elm_lang$svg$Svg_Attributes$stemv = _elm_lang$virtual_dom$VirtualDom$attribute('stemv');
var _elm_lang$svg$Svg_Attributes$stemh = _elm_lang$virtual_dom$VirtualDom$attribute('stemh');
var _elm_lang$svg$Svg_Attributes$stdDeviation = _elm_lang$virtual_dom$VirtualDom$attribute('stdDeviation');
var _elm_lang$svg$Svg_Attributes$startOffset = _elm_lang$virtual_dom$VirtualDom$attribute('startOffset');
var _elm_lang$svg$Svg_Attributes$spreadMethod = _elm_lang$virtual_dom$VirtualDom$attribute('spreadMethod');
var _elm_lang$svg$Svg_Attributes$speed = _elm_lang$virtual_dom$VirtualDom$attribute('speed');
var _elm_lang$svg$Svg_Attributes$specularExponent = _elm_lang$virtual_dom$VirtualDom$attribute('specularExponent');
var _elm_lang$svg$Svg_Attributes$specularConstant = _elm_lang$virtual_dom$VirtualDom$attribute('specularConstant');
var _elm_lang$svg$Svg_Attributes$spacing = _elm_lang$virtual_dom$VirtualDom$attribute('spacing');
var _elm_lang$svg$Svg_Attributes$slope = _elm_lang$virtual_dom$VirtualDom$attribute('slope');
var _elm_lang$svg$Svg_Attributes$seed = _elm_lang$virtual_dom$VirtualDom$attribute('seed');
var _elm_lang$svg$Svg_Attributes$scale = _elm_lang$virtual_dom$VirtualDom$attribute('scale');
var _elm_lang$svg$Svg_Attributes$ry = _elm_lang$virtual_dom$VirtualDom$attribute('ry');
var _elm_lang$svg$Svg_Attributes$rx = _elm_lang$virtual_dom$VirtualDom$attribute('rx');
var _elm_lang$svg$Svg_Attributes$rotate = _elm_lang$virtual_dom$VirtualDom$attribute('rotate');
var _elm_lang$svg$Svg_Attributes$result = _elm_lang$virtual_dom$VirtualDom$attribute('result');
var _elm_lang$svg$Svg_Attributes$restart = _elm_lang$virtual_dom$VirtualDom$attribute('restart');
var _elm_lang$svg$Svg_Attributes$requiredFeatures = _elm_lang$virtual_dom$VirtualDom$attribute('requiredFeatures');
var _elm_lang$svg$Svg_Attributes$requiredExtensions = _elm_lang$virtual_dom$VirtualDom$attribute('requiredExtensions');
var _elm_lang$svg$Svg_Attributes$repeatDur = _elm_lang$virtual_dom$VirtualDom$attribute('repeatDur');
var _elm_lang$svg$Svg_Attributes$repeatCount = _elm_lang$virtual_dom$VirtualDom$attribute('repeatCount');
var _elm_lang$svg$Svg_Attributes$renderingIntent = _elm_lang$virtual_dom$VirtualDom$attribute('rendering-intent');
var _elm_lang$svg$Svg_Attributes$refY = _elm_lang$virtual_dom$VirtualDom$attribute('refY');
var _elm_lang$svg$Svg_Attributes$refX = _elm_lang$virtual_dom$VirtualDom$attribute('refX');
var _elm_lang$svg$Svg_Attributes$radius = _elm_lang$virtual_dom$VirtualDom$attribute('radius');
var _elm_lang$svg$Svg_Attributes$r = _elm_lang$virtual_dom$VirtualDom$attribute('r');
var _elm_lang$svg$Svg_Attributes$primitiveUnits = _elm_lang$virtual_dom$VirtualDom$attribute('primitiveUnits');
var _elm_lang$svg$Svg_Attributes$preserveAspectRatio = _elm_lang$virtual_dom$VirtualDom$attribute('preserveAspectRatio');
var _elm_lang$svg$Svg_Attributes$preserveAlpha = _elm_lang$virtual_dom$VirtualDom$attribute('preserveAlpha');
var _elm_lang$svg$Svg_Attributes$pointsAtZ = _elm_lang$virtual_dom$VirtualDom$attribute('pointsAtZ');
var _elm_lang$svg$Svg_Attributes$pointsAtY = _elm_lang$virtual_dom$VirtualDom$attribute('pointsAtY');
var _elm_lang$svg$Svg_Attributes$pointsAtX = _elm_lang$virtual_dom$VirtualDom$attribute('pointsAtX');
var _elm_lang$svg$Svg_Attributes$points = _elm_lang$virtual_dom$VirtualDom$attribute('points');
var _elm_lang$svg$Svg_Attributes$pointOrder = _elm_lang$virtual_dom$VirtualDom$attribute('point-order');
var _elm_lang$svg$Svg_Attributes$patternUnits = _elm_lang$virtual_dom$VirtualDom$attribute('patternUnits');
var _elm_lang$svg$Svg_Attributes$patternTransform = _elm_lang$virtual_dom$VirtualDom$attribute('patternTransform');
var _elm_lang$svg$Svg_Attributes$patternContentUnits = _elm_lang$virtual_dom$VirtualDom$attribute('patternContentUnits');
var _elm_lang$svg$Svg_Attributes$pathLength = _elm_lang$virtual_dom$VirtualDom$attribute('pathLength');
var _elm_lang$svg$Svg_Attributes$path = _elm_lang$virtual_dom$VirtualDom$attribute('path');
var _elm_lang$svg$Svg_Attributes$panose1 = _elm_lang$virtual_dom$VirtualDom$attribute('panose-1');
var _elm_lang$svg$Svg_Attributes$overlineThickness = _elm_lang$virtual_dom$VirtualDom$attribute('overline-thickness');
var _elm_lang$svg$Svg_Attributes$overlinePosition = _elm_lang$virtual_dom$VirtualDom$attribute('overline-position');
var _elm_lang$svg$Svg_Attributes$origin = _elm_lang$virtual_dom$VirtualDom$attribute('origin');
var _elm_lang$svg$Svg_Attributes$orientation = _elm_lang$virtual_dom$VirtualDom$attribute('orientation');
var _elm_lang$svg$Svg_Attributes$orient = _elm_lang$virtual_dom$VirtualDom$attribute('orient');
var _elm_lang$svg$Svg_Attributes$order = _elm_lang$virtual_dom$VirtualDom$attribute('order');
var _elm_lang$svg$Svg_Attributes$operator = _elm_lang$virtual_dom$VirtualDom$attribute('operator');
var _elm_lang$svg$Svg_Attributes$offset = _elm_lang$virtual_dom$VirtualDom$attribute('offset');
var _elm_lang$svg$Svg_Attributes$numOctaves = _elm_lang$virtual_dom$VirtualDom$attribute('numOctaves');
var _elm_lang$svg$Svg_Attributes$name = _elm_lang$virtual_dom$VirtualDom$attribute('name');
var _elm_lang$svg$Svg_Attributes$mode = _elm_lang$virtual_dom$VirtualDom$attribute('mode');
var _elm_lang$svg$Svg_Attributes$min = _elm_lang$virtual_dom$VirtualDom$attribute('min');
var _elm_lang$svg$Svg_Attributes$method = _elm_lang$virtual_dom$VirtualDom$attribute('method');
var _elm_lang$svg$Svg_Attributes$media = _elm_lang$virtual_dom$VirtualDom$attribute('media');
var _elm_lang$svg$Svg_Attributes$max = _elm_lang$virtual_dom$VirtualDom$attribute('max');
var _elm_lang$svg$Svg_Attributes$mathematical = _elm_lang$virtual_dom$VirtualDom$attribute('mathematical');
var _elm_lang$svg$Svg_Attributes$maskUnits = _elm_lang$virtual_dom$VirtualDom$attribute('maskUnits');
var _elm_lang$svg$Svg_Attributes$maskContentUnits = _elm_lang$virtual_dom$VirtualDom$attribute('maskContentUnits');
var _elm_lang$svg$Svg_Attributes$markerWidth = _elm_lang$virtual_dom$VirtualDom$attribute('markerWidth');
var _elm_lang$svg$Svg_Attributes$markerUnits = _elm_lang$virtual_dom$VirtualDom$attribute('markerUnits');
var _elm_lang$svg$Svg_Attributes$markerHeight = _elm_lang$virtual_dom$VirtualDom$attribute('markerHeight');
var _elm_lang$svg$Svg_Attributes$local = _elm_lang$virtual_dom$VirtualDom$attribute('local');
var _elm_lang$svg$Svg_Attributes$limitingConeAngle = _elm_lang$virtual_dom$VirtualDom$attribute('limitingConeAngle');
var _elm_lang$svg$Svg_Attributes$lengthAdjust = _elm_lang$virtual_dom$VirtualDom$attribute('lengthAdjust');
var _elm_lang$svg$Svg_Attributes$lang = _elm_lang$virtual_dom$VirtualDom$attribute('lang');
var _elm_lang$svg$Svg_Attributes$keyTimes = _elm_lang$virtual_dom$VirtualDom$attribute('keyTimes');
var _elm_lang$svg$Svg_Attributes$keySplines = _elm_lang$virtual_dom$VirtualDom$attribute('keySplines');
var _elm_lang$svg$Svg_Attributes$keyPoints = _elm_lang$virtual_dom$VirtualDom$attribute('keyPoints');
var _elm_lang$svg$Svg_Attributes$kernelUnitLength = _elm_lang$virtual_dom$VirtualDom$attribute('kernelUnitLength');
var _elm_lang$svg$Svg_Attributes$kernelMatrix = _elm_lang$virtual_dom$VirtualDom$attribute('kernelMatrix');
var _elm_lang$svg$Svg_Attributes$k4 = _elm_lang$virtual_dom$VirtualDom$attribute('k4');
var _elm_lang$svg$Svg_Attributes$k3 = _elm_lang$virtual_dom$VirtualDom$attribute('k3');
var _elm_lang$svg$Svg_Attributes$k2 = _elm_lang$virtual_dom$VirtualDom$attribute('k2');
var _elm_lang$svg$Svg_Attributes$k1 = _elm_lang$virtual_dom$VirtualDom$attribute('k1');
var _elm_lang$svg$Svg_Attributes$k = _elm_lang$virtual_dom$VirtualDom$attribute('k');
var _elm_lang$svg$Svg_Attributes$intercept = _elm_lang$virtual_dom$VirtualDom$attribute('intercept');
var _elm_lang$svg$Svg_Attributes$in2 = _elm_lang$virtual_dom$VirtualDom$attribute('in2');
var _elm_lang$svg$Svg_Attributes$in_ = _elm_lang$virtual_dom$VirtualDom$attribute('in');
var _elm_lang$svg$Svg_Attributes$ideographic = _elm_lang$virtual_dom$VirtualDom$attribute('ideographic');
var _elm_lang$svg$Svg_Attributes$id = _elm_lang$virtual_dom$VirtualDom$attribute('id');
var _elm_lang$svg$Svg_Attributes$horizOriginY = _elm_lang$virtual_dom$VirtualDom$attribute('horiz-origin-y');
var _elm_lang$svg$Svg_Attributes$horizOriginX = _elm_lang$virtual_dom$VirtualDom$attribute('horiz-origin-x');
var _elm_lang$svg$Svg_Attributes$horizAdvX = _elm_lang$virtual_dom$VirtualDom$attribute('horiz-adv-x');
var _elm_lang$svg$Svg_Attributes$height = _elm_lang$virtual_dom$VirtualDom$attribute('height');
var _elm_lang$svg$Svg_Attributes$hanging = _elm_lang$virtual_dom$VirtualDom$attribute('hanging');
var _elm_lang$svg$Svg_Attributes$gradientUnits = _elm_lang$virtual_dom$VirtualDom$attribute('gradientUnits');
var _elm_lang$svg$Svg_Attributes$gradientTransform = _elm_lang$virtual_dom$VirtualDom$attribute('gradientTransform');
var _elm_lang$svg$Svg_Attributes$glyphRef = _elm_lang$virtual_dom$VirtualDom$attribute('glyphRef');
var _elm_lang$svg$Svg_Attributes$glyphName = _elm_lang$virtual_dom$VirtualDom$attribute('glyph-name');
var _elm_lang$svg$Svg_Attributes$g2 = _elm_lang$virtual_dom$VirtualDom$attribute('g2');
var _elm_lang$svg$Svg_Attributes$g1 = _elm_lang$virtual_dom$VirtualDom$attribute('g1');
var _elm_lang$svg$Svg_Attributes$fy = _elm_lang$virtual_dom$VirtualDom$attribute('fy');
var _elm_lang$svg$Svg_Attributes$fx = _elm_lang$virtual_dom$VirtualDom$attribute('fx');
var _elm_lang$svg$Svg_Attributes$from = _elm_lang$virtual_dom$VirtualDom$attribute('from');
var _elm_lang$svg$Svg_Attributes$format = _elm_lang$virtual_dom$VirtualDom$attribute('format');
var _elm_lang$svg$Svg_Attributes$filterUnits = _elm_lang$virtual_dom$VirtualDom$attribute('filterUnits');
var _elm_lang$svg$Svg_Attributes$filterRes = _elm_lang$virtual_dom$VirtualDom$attribute('filterRes');
var _elm_lang$svg$Svg_Attributes$externalResourcesRequired = _elm_lang$virtual_dom$VirtualDom$attribute('externalResourcesRequired');
var _elm_lang$svg$Svg_Attributes$exponent = _elm_lang$virtual_dom$VirtualDom$attribute('exponent');
var _elm_lang$svg$Svg_Attributes$end = _elm_lang$virtual_dom$VirtualDom$attribute('end');
var _elm_lang$svg$Svg_Attributes$elevation = _elm_lang$virtual_dom$VirtualDom$attribute('elevation');
var _elm_lang$svg$Svg_Attributes$edgeMode = _elm_lang$virtual_dom$VirtualDom$attribute('edgeMode');
var _elm_lang$svg$Svg_Attributes$dy = _elm_lang$virtual_dom$VirtualDom$attribute('dy');
var _elm_lang$svg$Svg_Attributes$dx = _elm_lang$virtual_dom$VirtualDom$attribute('dx');
var _elm_lang$svg$Svg_Attributes$dur = _elm_lang$virtual_dom$VirtualDom$attribute('dur');
var _elm_lang$svg$Svg_Attributes$divisor = _elm_lang$virtual_dom$VirtualDom$attribute('divisor');
var _elm_lang$svg$Svg_Attributes$diffuseConstant = _elm_lang$virtual_dom$VirtualDom$attribute('diffuseConstant');
var _elm_lang$svg$Svg_Attributes$descent = _elm_lang$virtual_dom$VirtualDom$attribute('descent');
var _elm_lang$svg$Svg_Attributes$decelerate = _elm_lang$virtual_dom$VirtualDom$attribute('decelerate');
var _elm_lang$svg$Svg_Attributes$d = _elm_lang$virtual_dom$VirtualDom$attribute('d');
var _elm_lang$svg$Svg_Attributes$cy = _elm_lang$virtual_dom$VirtualDom$attribute('cy');
var _elm_lang$svg$Svg_Attributes$cx = _elm_lang$virtual_dom$VirtualDom$attribute('cx');
var _elm_lang$svg$Svg_Attributes$contentStyleType = _elm_lang$virtual_dom$VirtualDom$attribute('contentStyleType');
var _elm_lang$svg$Svg_Attributes$contentScriptType = _elm_lang$virtual_dom$VirtualDom$attribute('contentScriptType');
var _elm_lang$svg$Svg_Attributes$clipPathUnits = _elm_lang$virtual_dom$VirtualDom$attribute('clipPathUnits');
var _elm_lang$svg$Svg_Attributes$class = _elm_lang$virtual_dom$VirtualDom$attribute('class');
var _elm_lang$svg$Svg_Attributes$capHeight = _elm_lang$virtual_dom$VirtualDom$attribute('cap-height');
var _elm_lang$svg$Svg_Attributes$calcMode = _elm_lang$virtual_dom$VirtualDom$attribute('calcMode');
var _elm_lang$svg$Svg_Attributes$by = _elm_lang$virtual_dom$VirtualDom$attribute('by');
var _elm_lang$svg$Svg_Attributes$bias = _elm_lang$virtual_dom$VirtualDom$attribute('bias');
var _elm_lang$svg$Svg_Attributes$begin = _elm_lang$virtual_dom$VirtualDom$attribute('begin');
var _elm_lang$svg$Svg_Attributes$bbox = _elm_lang$virtual_dom$VirtualDom$attribute('bbox');
var _elm_lang$svg$Svg_Attributes$baseProfile = _elm_lang$virtual_dom$VirtualDom$attribute('baseProfile');
var _elm_lang$svg$Svg_Attributes$baseFrequency = _elm_lang$virtual_dom$VirtualDom$attribute('baseFrequency');
var _elm_lang$svg$Svg_Attributes$azimuth = _elm_lang$virtual_dom$VirtualDom$attribute('azimuth');
var _elm_lang$svg$Svg_Attributes$autoReverse = _elm_lang$virtual_dom$VirtualDom$attribute('autoReverse');
var _elm_lang$svg$Svg_Attributes$attributeType = _elm_lang$virtual_dom$VirtualDom$attribute('attributeType');
var _elm_lang$svg$Svg_Attributes$attributeName = _elm_lang$virtual_dom$VirtualDom$attribute('attributeName');
var _elm_lang$svg$Svg_Attributes$ascent = _elm_lang$virtual_dom$VirtualDom$attribute('ascent');
var _elm_lang$svg$Svg_Attributes$arabicForm = _elm_lang$virtual_dom$VirtualDom$attribute('arabic-form');
var _elm_lang$svg$Svg_Attributes$amplitude = _elm_lang$virtual_dom$VirtualDom$attribute('amplitude');
var _elm_lang$svg$Svg_Attributes$allowReorder = _elm_lang$virtual_dom$VirtualDom$attribute('allowReorder');
var _elm_lang$svg$Svg_Attributes$alphabetic = _elm_lang$virtual_dom$VirtualDom$attribute('alphabetic');
var _elm_lang$svg$Svg_Attributes$additive = _elm_lang$virtual_dom$VirtualDom$attribute('additive');
var _elm_lang$svg$Svg_Attributes$accumulate = _elm_lang$virtual_dom$VirtualDom$attribute('accumulate');
var _elm_lang$svg$Svg_Attributes$accelerate = _elm_lang$virtual_dom$VirtualDom$attribute('accelerate');
var _elm_lang$svg$Svg_Attributes$accentHeight = _elm_lang$virtual_dom$VirtualDom$attribute('accent-height');

var _elm_lang$svg$Svg_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$svg$Svg_Events$simpleOn = F2(
	function (name, msg) {
		return A2(
			_elm_lang$svg$Svg_Events$on,
			name,
			_elm_lang$core$Json_Decode$succeed(msg));
	});
var _elm_lang$svg$Svg_Events$onBegin = _elm_lang$svg$Svg_Events$simpleOn('begin');
var _elm_lang$svg$Svg_Events$onEnd = _elm_lang$svg$Svg_Events$simpleOn('end');
var _elm_lang$svg$Svg_Events$onRepeat = _elm_lang$svg$Svg_Events$simpleOn('repeat');
var _elm_lang$svg$Svg_Events$onAbort = _elm_lang$svg$Svg_Events$simpleOn('abort');
var _elm_lang$svg$Svg_Events$onError = _elm_lang$svg$Svg_Events$simpleOn('error');
var _elm_lang$svg$Svg_Events$onResize = _elm_lang$svg$Svg_Events$simpleOn('resize');
var _elm_lang$svg$Svg_Events$onScroll = _elm_lang$svg$Svg_Events$simpleOn('scroll');
var _elm_lang$svg$Svg_Events$onLoad = _elm_lang$svg$Svg_Events$simpleOn('load');
var _elm_lang$svg$Svg_Events$onUnload = _elm_lang$svg$Svg_Events$simpleOn('unload');
var _elm_lang$svg$Svg_Events$onZoom = _elm_lang$svg$Svg_Events$simpleOn('zoom');
var _elm_lang$svg$Svg_Events$onActivate = _elm_lang$svg$Svg_Events$simpleOn('activate');
var _elm_lang$svg$Svg_Events$onClick = _elm_lang$svg$Svg_Events$simpleOn('click');
var _elm_lang$svg$Svg_Events$onFocusIn = _elm_lang$svg$Svg_Events$simpleOn('focusin');
var _elm_lang$svg$Svg_Events$onFocusOut = _elm_lang$svg$Svg_Events$simpleOn('focusout');
var _elm_lang$svg$Svg_Events$onMouseDown = _elm_lang$svg$Svg_Events$simpleOn('mousedown');
var _elm_lang$svg$Svg_Events$onMouseMove = _elm_lang$svg$Svg_Events$simpleOn('mousemove');
var _elm_lang$svg$Svg_Events$onMouseOut = _elm_lang$svg$Svg_Events$simpleOn('mouseout');
var _elm_lang$svg$Svg_Events$onMouseOver = _elm_lang$svg$Svg_Events$simpleOn('mouseover');
var _elm_lang$svg$Svg_Events$onMouseUp = _elm_lang$svg$Svg_Events$simpleOn('mouseup');

var _elm_lang$window$Native_Window = function()
{

var size = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)	{
	callback(_elm_lang$core$Native_Scheduler.succeed({
		width: window.innerWidth,
		height: window.innerHeight
	}));
});

return {
	size: size
};

}();
var _elm_lang$window$Window_ops = _elm_lang$window$Window_ops || {};
_elm_lang$window$Window_ops['&>'] = F2(
	function (task1, task2) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (_p0) {
				return task2;
			},
			task1);
	});
var _elm_lang$window$Window$onSelfMsg = F3(
	function (router, dimensions, state) {
		var _p1 = state;
		if (_p1.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var send = function (_p2) {
				var _p3 = _p2;
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					_p3._0(dimensions));
			};
			return A2(
				_elm_lang$window$Window_ops['&>'],
				_elm_lang$core$Task$sequence(
					A2(_elm_lang$core$List$map, send, _p1._0.subs)),
				_elm_lang$core$Task$succeed(state));
		}
	});
var _elm_lang$window$Window$init = _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
var _elm_lang$window$Window$size = _elm_lang$window$Native_Window.size;
var _elm_lang$window$Window$width = A2(
	_elm_lang$core$Task$map,
	function (_) {
		return _.width;
	},
	_elm_lang$window$Window$size);
var _elm_lang$window$Window$height = A2(
	_elm_lang$core$Task$map,
	function (_) {
		return _.height;
	},
	_elm_lang$window$Window$size);
var _elm_lang$window$Window$onEffects = F3(
	function (router, newSubs, oldState) {
		var _p4 = {ctor: '_Tuple2', _0: oldState, _1: newSubs};
		if (_p4._0.ctor === 'Nothing') {
			if (_p4._1.ctor === '[]') {
				return _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
			} else {
				return A2(
					_elm_lang$core$Task$andThen,
					function (pid) {
						return _elm_lang$core$Task$succeed(
							_elm_lang$core$Maybe$Just(
								{subs: newSubs, pid: pid}));
					},
					_elm_lang$core$Process$spawn(
						A3(
							_elm_lang$dom$Dom_LowLevel$onWindow,
							'resize',
							_elm_lang$core$Json_Decode$succeed(
								{ctor: '_Tuple0'}),
							function (_p5) {
								return A2(
									_elm_lang$core$Task$andThen,
									_elm_lang$core$Platform$sendToSelf(router),
									_elm_lang$window$Window$size);
							})));
			}
		} else {
			if (_p4._1.ctor === '[]') {
				return A2(
					_elm_lang$window$Window_ops['&>'],
					_elm_lang$core$Process$kill(_p4._0._0.pid),
					_elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing));
			} else {
				return _elm_lang$core$Task$succeed(
					_elm_lang$core$Maybe$Just(
						{subs: newSubs, pid: _p4._0._0.pid}));
			}
		}
	});
var _elm_lang$window$Window$subscription = _elm_lang$core$Native_Platform.leaf('Window');
var _elm_lang$window$Window$Size = F2(
	function (a, b) {
		return {width: a, height: b};
	});
var _elm_lang$window$Window$MySub = function (a) {
	return {ctor: 'MySub', _0: a};
};
var _elm_lang$window$Window$resizes = function (tagger) {
	return _elm_lang$window$Window$subscription(
		_elm_lang$window$Window$MySub(tagger));
};
var _elm_lang$window$Window$subMap = F2(
	function (func, _p6) {
		var _p7 = _p6;
		return _elm_lang$window$Window$MySub(
			function (_p8) {
				return func(
					_p7._0(_p8));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Window'] = {pkg: 'elm-lang/window', init: _elm_lang$window$Window$init, onEffects: _elm_lang$window$Window$onEffects, onSelfMsg: _elm_lang$window$Window$onSelfMsg, tag: 'sub', subMap: _elm_lang$window$Window$subMap};

var _elm_tools$parser_primitives$Native_ParserPrimitives = function() {


// STRINGS

function isSubString(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var bigLength = bigString.length - offset;

	if (bigLength < smallLength)
	{
		return tuple3(-1, row, col);
	}

	for (var i = 0; i < smallLength; i++)
	{
		var char = smallString[i];

		if (char !== bigString[offset + i])
		{
			return tuple3(-1, row, col);
		}

		// if it is a two word character
		if ((bigString.charCodeAt(offset) & 0xF800) === 0xD800)
		{
			i++
			if (smallString[i] !== bigString[offset + i])
			{
				return tuple3(-1, row, col);
			}
			col++;
			continue;
		}

		// if it is a newline
		if (char === '\n')
		{
			row++;
			col = 1;
			continue;
		}

		// if it is a one word character
		col++
	}

	return tuple3(offset + smallLength, row, col);
}

function tuple3(a, b, c)
{
	return { ctor: '_Tuple3', _0: a, _1: b, _2: c };
}


// CHARS

var mkChar = _elm_lang$core$Native_Utils.chr;

function isSubChar(predicate, offset, string)
{
	if (offset >= string.length)
	{
		return -1;
	}

	if ((string.charCodeAt(offset) & 0xF800) === 0xD800)
	{
		return predicate(mkChar(string.substr(offset, 2)))
			? offset + 2
			: -1;
	}

	var char = string[offset];

	return predicate(mkChar(char))
		? ((char === '\n') ? -2 : (offset + 1))
		: -1;
}


// FIND STRING

function findSubString(before, smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);

	if (newOffset === -1)
	{
		return tuple3(-1, row, col);
	}

	var scanTarget = before ? newOffset	: newOffset + smallString.length;

	while (offset < scanTarget)
	{
		var char = bigString[offset];

		if (char === '\n')
		{
			offset++;
			row++;
			col = 1;
			continue;
		}

		if ((bigString.charCodeAt(offset) & 0xF800) === 0xD800)
		{
			offset += 2;
			col++;
			continue;
		}

		offset++;
		col++;
	}

	return tuple3(offset, row, col);
}


return {
	isSubString: F5(isSubString),
	isSubChar: F3(isSubChar),
	findSubString: F6(findSubString)
};

}();

var _elm_tools$parser_primitives$ParserPrimitives$findSubString = _elm_tools$parser_primitives$Native_ParserPrimitives.findSubString;
var _elm_tools$parser_primitives$ParserPrimitives$isSubChar = _elm_tools$parser_primitives$Native_ParserPrimitives.isSubChar;
var _elm_tools$parser_primitives$ParserPrimitives$isSubString = _elm_tools$parser_primitives$Native_ParserPrimitives.isSubString;

var _elm_tools$parser$Parser_Internal$isPlusOrMinus = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('+')) || _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('-'));
};
var _elm_tools$parser$Parser_Internal$isZero = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('0'));
};
var _elm_tools$parser$Parser_Internal$isE = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('e')) || _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('E'));
};
var _elm_tools$parser$Parser_Internal$isDot = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('.'));
};
var _elm_tools$parser$Parser_Internal$isBadIntEnd = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (_elm_lang$core$Char$isUpper($char) || (_elm_lang$core$Char$isLower($char) || _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('.'))));
};
var _elm_tools$parser$Parser_Internal$chomp = F3(
	function (isGood, offset, source) {
		chomp:
		while (true) {
			var newOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, isGood, offset, source);
			if (_elm_lang$core$Native_Utils.cmp(newOffset, 0) < 0) {
				return offset;
			} else {
				var _v0 = isGood,
					_v1 = newOffset,
					_v2 = source;
				isGood = _v0;
				offset = _v1;
				source = _v2;
				continue chomp;
			}
		}
	});
var _elm_tools$parser$Parser_Internal$chompDigits = F3(
	function (isValidDigit, offset, source) {
		var newOffset = A3(_elm_tools$parser$Parser_Internal$chomp, isValidDigit, offset, source);
		return _elm_lang$core$Native_Utils.eq(newOffset, offset) ? _elm_lang$core$Result$Err(newOffset) : ((!_elm_lang$core$Native_Utils.eq(
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isBadIntEnd, newOffset, source),
			-1)) ? _elm_lang$core$Result$Err(newOffset) : _elm_lang$core$Result$Ok(newOffset));
	});
var _elm_tools$parser$Parser_Internal$chompExp = F2(
	function (offset, source) {
		var eOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isE, offset, source);
		if (_elm_lang$core$Native_Utils.eq(eOffset, -1)) {
			return _elm_lang$core$Result$Ok(offset);
		} else {
			var opOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isPlusOrMinus, eOffset, source);
			var expOffset = _elm_lang$core$Native_Utils.eq(opOffset, -1) ? eOffset : opOffset;
			return (!_elm_lang$core$Native_Utils.eq(
				A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isZero, expOffset, source),
				-1)) ? _elm_lang$core$Result$Err(expOffset) : (_elm_lang$core$Native_Utils.eq(
				A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_lang$core$Char$isDigit, expOffset, source),
				-1) ? _elm_lang$core$Result$Err(expOffset) : A3(_elm_tools$parser$Parser_Internal$chompDigits, _elm_lang$core$Char$isDigit, expOffset, source));
		}
	});
var _elm_tools$parser$Parser_Internal$chompDotAndExp = F2(
	function (offset, source) {
		var dotOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isDot, offset, source);
		return _elm_lang$core$Native_Utils.eq(dotOffset, -1) ? A2(_elm_tools$parser$Parser_Internal$chompExp, offset, source) : A2(
			_elm_tools$parser$Parser_Internal$chompExp,
			A3(_elm_tools$parser$Parser_Internal$chomp, _elm_lang$core$Char$isDigit, dotOffset, source),
			source);
	});
var _elm_tools$parser$Parser_Internal$State = F6(
	function (a, b, c, d, e, f) {
		return {source: a, offset: b, indent: c, context: d, row: e, col: f};
	});
var _elm_tools$parser$Parser_Internal$Parser = function (a) {
	return {ctor: 'Parser', _0: a};
};
var _elm_tools$parser$Parser_Internal$Bad = F2(
	function (a, b) {
		return {ctor: 'Bad', _0: a, _1: b};
	});
var _elm_tools$parser$Parser_Internal$Good = F2(
	function (a, b) {
		return {ctor: 'Good', _0: a, _1: b};
	});

var _elm_tools$parser$Parser$changeContext = F2(
	function (newContext, _p0) {
		var _p1 = _p0;
		return {source: _p1.source, offset: _p1.offset, indent: _p1.indent, context: newContext, row: _p1.row, col: _p1.col};
	});
var _elm_tools$parser$Parser$sourceMap = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (_p4) {
				var _p5 = _p4;
				var _p6 = _p3._0(_p5);
				if (_p6.ctor === 'Bad') {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p6._0, _p6._1);
				} else {
					var _p7 = _p6._1;
					var subString = A3(_elm_lang$core$String$slice, _p5.offset, _p7.offset, _p5.source);
					return A2(
						_elm_tools$parser$Parser_Internal$Good,
						A2(func, subString, _p6._0),
						_p7);
				}
			});
	});
var _elm_tools$parser$Parser$source = function (parser) {
	return A2(_elm_tools$parser$Parser$sourceMap, _elm_lang$core$Basics$always, parser);
};
var _elm_tools$parser$Parser$badFloatMsg = 'The `Parser.float` parser seems to have a bug.\nPlease report an SSCCE to <https://github.com/elm-tools/parser/issues>.';
var _elm_tools$parser$Parser$floatHelp = F3(
	function (offset, zeroOffset, source) {
		if (_elm_lang$core$Native_Utils.cmp(zeroOffset, 0) > -1) {
			return A2(_elm_tools$parser$Parser_Internal$chompDotAndExp, zeroOffset, source);
		} else {
			var dotOffset = A3(_elm_tools$parser$Parser_Internal$chomp, _elm_lang$core$Char$isDigit, offset, source);
			var result = A2(_elm_tools$parser$Parser_Internal$chompDotAndExp, dotOffset, source);
			var _p8 = result;
			if (_p8.ctor === 'Err') {
				return result;
			} else {
				var _p9 = _p8._0;
				return _elm_lang$core$Native_Utils.eq(_p9, offset) ? _elm_lang$core$Result$Err(_p9) : result;
			}
		}
	});
var _elm_tools$parser$Parser$badIntMsg = 'The `Parser.int` parser seems to have a bug.\nPlease report an SSCCE to <https://github.com/elm-tools/parser/issues>.';
var _elm_tools$parser$Parser$isX = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('x'));
};
var _elm_tools$parser$Parser$isO = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('o'));
};
var _elm_tools$parser$Parser$isZero = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('0'));
};
var _elm_tools$parser$Parser$intHelp = F3(
	function (offset, zeroOffset, source) {
		return _elm_lang$core$Native_Utils.eq(zeroOffset, -1) ? A3(_elm_tools$parser$Parser_Internal$chompDigits, _elm_lang$core$Char$isDigit, offset, source) : ((!_elm_lang$core$Native_Utils.eq(
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser$isX, zeroOffset, source),
			-1)) ? A3(_elm_tools$parser$Parser_Internal$chompDigits, _elm_lang$core$Char$isHexDigit, offset + 2, source) : (_elm_lang$core$Native_Utils.eq(
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isBadIntEnd, zeroOffset, source),
			-1) ? _elm_lang$core$Result$Ok(zeroOffset) : _elm_lang$core$Result$Err(zeroOffset)));
	});
var _elm_tools$parser$Parser$token = F2(
	function (makeProblem, str) {
		return _elm_tools$parser$Parser_Internal$Parser(
			function (_p10) {
				var _p11 = _p10;
				var _p13 = _p11.source;
				var _p12 = A5(_elm_tools$parser_primitives$ParserPrimitives$isSubString, str, _p11.offset, _p11.row, _p11.col, _p13);
				var newOffset = _p12._0;
				var newRow = _p12._1;
				var newCol = _p12._2;
				return _elm_lang$core$Native_Utils.eq(newOffset, -1) ? A2(
					_elm_tools$parser$Parser_Internal$Bad,
					makeProblem(str),
					_p11) : A2(
					_elm_tools$parser$Parser_Internal$Good,
					{ctor: '_Tuple0'},
					{source: _p13, offset: newOffset, indent: _p11.indent, context: _p11.context, row: newRow, col: newCol});
			});
	});
var _elm_tools$parser$Parser$delayedCommitMap = F3(
	function (func, _p15, _p14) {
		var _p16 = _p15;
		var _p17 = _p14;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (state1) {
				var _p18 = _p16._0(state1);
				if (_p18.ctor === 'Bad') {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p18._0, state1);
				} else {
					var _p22 = _p18._1;
					var _p19 = _p17._0(_p22);
					if (_p19.ctor === 'Good') {
						return A2(
							_elm_tools$parser$Parser_Internal$Good,
							A2(func, _p18._0, _p19._0),
							_p19._1);
					} else {
						var _p21 = _p19._0;
						var _p20 = _p19._1;
						return (_elm_lang$core$Native_Utils.eq(_p22.row, _p20.row) && _elm_lang$core$Native_Utils.eq(_p22.col, _p20.col)) ? A2(_elm_tools$parser$Parser_Internal$Bad, _p21, state1) : A2(_elm_tools$parser$Parser_Internal$Bad, _p21, _p20);
					}
				}
			});
	});
var _elm_tools$parser$Parser$delayedCommit = F2(
	function (filler, realStuff) {
		return A3(
			_elm_tools$parser$Parser$delayedCommitMap,
			F2(
				function (_p23, v) {
					return v;
				}),
			filler,
			realStuff);
	});
var _elm_tools$parser$Parser$lazy = function (thunk) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (state) {
			var _p24 = thunk(
				{ctor: '_Tuple0'});
			var parse = _p24._0;
			return parse(state);
		});
};
var _elm_tools$parser$Parser$andThen = F2(
	function (callback, _p25) {
		var _p26 = _p25;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (state1) {
				var _p27 = _p26._0(state1);
				if (_p27.ctor === 'Bad') {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p27._0, _p27._1);
				} else {
					var _p28 = callback(_p27._0);
					var parseB = _p28._0;
					return parseB(_p27._1);
				}
			});
	});
var _elm_tools$parser$Parser$apply = F2(
	function (f, a) {
		return f(a);
	});
var _elm_tools$parser$Parser$map2 = F3(
	function (func, _p30, _p29) {
		var _p31 = _p30;
		var _p32 = _p29;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (state1) {
				var _p33 = _p31._0(state1);
				if (_p33.ctor === 'Bad') {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p33._0, _p33._1);
				} else {
					var _p34 = _p32._0(_p33._1);
					if (_p34.ctor === 'Bad') {
						return A2(_elm_tools$parser$Parser_Internal$Bad, _p34._0, _p34._1);
					} else {
						return A2(
							_elm_tools$parser$Parser_Internal$Good,
							A2(func, _p33._0, _p34._0),
							_p34._1);
					}
				}
			});
	});
var _elm_tools$parser$Parser_ops = _elm_tools$parser$Parser_ops || {};
_elm_tools$parser$Parser_ops['|='] = F2(
	function (parseFunc, parseArg) {
		return A3(_elm_tools$parser$Parser$map2, _elm_tools$parser$Parser$apply, parseFunc, parseArg);
	});
var _elm_tools$parser$Parser_ops = _elm_tools$parser$Parser_ops || {};
_elm_tools$parser$Parser_ops['|.'] = F2(
	function (keepParser, ignoreParser) {
		return A3(_elm_tools$parser$Parser$map2, _elm_lang$core$Basics$always, keepParser, ignoreParser);
	});
var _elm_tools$parser$Parser$map = F2(
	function (func, _p35) {
		var _p36 = _p35;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (state1) {
				var _p37 = _p36._0(state1);
				if (_p37.ctor === 'Good') {
					return A2(
						_elm_tools$parser$Parser_Internal$Good,
						func(_p37._0),
						_p37._1);
				} else {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p37._0, _p37._1);
				}
			});
	});
var _elm_tools$parser$Parser$succeed = function (a) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (state) {
			return A2(_elm_tools$parser$Parser_Internal$Good, a, state);
		});
};
var _elm_tools$parser$Parser$run = F2(
	function (_p38, source) {
		var _p39 = _p38;
		var initialState = {
			source: source,
			offset: 0,
			indent: 1,
			context: {ctor: '[]'},
			row: 1,
			col: 1
		};
		var _p40 = _p39._0(initialState);
		if (_p40.ctor === 'Good') {
			return _elm_lang$core$Result$Ok(_p40._0);
		} else {
			return _elm_lang$core$Result$Err(
				{row: _p40._1.row, col: _p40._1.col, source: source, problem: _p40._0, context: _p40._1.context});
		}
	});
var _elm_tools$parser$Parser$Error = F5(
	function (a, b, c, d, e) {
		return {row: a, col: b, source: c, problem: d, context: e};
	});
var _elm_tools$parser$Parser$Context = F3(
	function (a, b, c) {
		return {row: a, col: b, description: c};
	});
var _elm_tools$parser$Parser$inContext = F2(
	function (ctx, _p41) {
		var _p42 = _p41;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (_p43) {
				var _p44 = _p43;
				var _p46 = _p44.context;
				var state1 = A2(
					_elm_tools$parser$Parser$changeContext,
					{
						ctor: '::',
						_0: A3(_elm_tools$parser$Parser$Context, _p44.row, _p44.col, ctx),
						_1: _p46
					},
					_p44);
				var _p45 = _p42._0(state1);
				if (_p45.ctor === 'Good') {
					return A2(
						_elm_tools$parser$Parser_Internal$Good,
						_p45._0,
						A2(_elm_tools$parser$Parser$changeContext, _p46, _p45._1));
				} else {
					return _p45;
				}
			});
	});
var _elm_tools$parser$Parser$Fail = function (a) {
	return {ctor: 'Fail', _0: a};
};
var _elm_tools$parser$Parser$fail = function (message) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (state) {
			return A2(
				_elm_tools$parser$Parser_Internal$Bad,
				_elm_tools$parser$Parser$Fail(message),
				state);
		});
};
var _elm_tools$parser$Parser$ExpectingClosing = function (a) {
	return {ctor: 'ExpectingClosing', _0: a};
};
var _elm_tools$parser$Parser$ignoreUntil = function (str) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (_p47) {
			var _p48 = _p47;
			var _p50 = _p48.source;
			var _p49 = A6(_elm_tools$parser_primitives$ParserPrimitives$findSubString, false, str, _p48.offset, _p48.row, _p48.col, _p50);
			var newOffset = _p49._0;
			var newRow = _p49._1;
			var newCol = _p49._2;
			return _elm_lang$core$Native_Utils.eq(newOffset, -1) ? A2(
				_elm_tools$parser$Parser_Internal$Bad,
				_elm_tools$parser$Parser$ExpectingClosing(str),
				_p48) : A2(
				_elm_tools$parser$Parser_Internal$Good,
				{ctor: '_Tuple0'},
				{source: _p50, offset: newOffset, indent: _p48.indent, context: _p48.context, row: newRow, col: newCol});
		});
};
var _elm_tools$parser$Parser$ExpectingVariable = {ctor: 'ExpectingVariable'};
var _elm_tools$parser$Parser$ExpectingKeyword = function (a) {
	return {ctor: 'ExpectingKeyword', _0: a};
};
var _elm_tools$parser$Parser$keyword = function (str) {
	return A2(_elm_tools$parser$Parser$token, _elm_tools$parser$Parser$ExpectingKeyword, str);
};
var _elm_tools$parser$Parser$ExpectingSymbol = function (a) {
	return {ctor: 'ExpectingSymbol', _0: a};
};
var _elm_tools$parser$Parser$symbol = function (str) {
	return A2(_elm_tools$parser$Parser$token, _elm_tools$parser$Parser$ExpectingSymbol, str);
};
var _elm_tools$parser$Parser$ExpectingEnd = {ctor: 'ExpectingEnd'};
var _elm_tools$parser$Parser$end = _elm_tools$parser$Parser_Internal$Parser(
	function (state) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$String$length(state.source),
			state.offset) ? A2(
			_elm_tools$parser$Parser_Internal$Good,
			{ctor: '_Tuple0'},
			state) : A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$ExpectingEnd, state);
	});
var _elm_tools$parser$Parser$BadRepeat = {ctor: 'BadRepeat'};
var _elm_tools$parser$Parser$repeatExactly = F4(
	function (n, parse, revList, state1) {
		repeatExactly:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return A2(
					_elm_tools$parser$Parser_Internal$Good,
					_elm_lang$core$List$reverse(revList),
					state1);
			} else {
				var _p51 = parse(state1);
				if (_p51.ctor === 'Good') {
					var _p52 = _p51._1;
					if (_elm_lang$core$Native_Utils.eq(state1.row, _p52.row) && _elm_lang$core$Native_Utils.eq(state1.col, _p52.col)) {
						return A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$BadRepeat, _p52);
					} else {
						var _v25 = n - 1,
							_v26 = parse,
							_v27 = {ctor: '::', _0: _p51._0, _1: revList},
							_v28 = _p52;
						n = _v25;
						parse = _v26;
						revList = _v27;
						state1 = _v28;
						continue repeatExactly;
					}
				} else {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p51._0, _p51._1);
				}
			}
		}
	});
var _elm_tools$parser$Parser$repeatAtLeast = F4(
	function (n, parse, revList, state1) {
		repeatAtLeast:
		while (true) {
			var _p53 = parse(state1);
			if (_p53.ctor === 'Good') {
				var _p54 = _p53._1;
				if (_elm_lang$core$Native_Utils.eq(state1.row, _p54.row) && _elm_lang$core$Native_Utils.eq(state1.col, _p54.col)) {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$BadRepeat, _p54);
				} else {
					var _v30 = n - 1,
						_v31 = parse,
						_v32 = {ctor: '::', _0: _p53._0, _1: revList},
						_v33 = _p54;
					n = _v30;
					parse = _v31;
					revList = _v32;
					state1 = _v33;
					continue repeatAtLeast;
				}
			} else {
				var _p55 = _p53._1;
				return (_elm_lang$core$Native_Utils.eq(state1.row, _p55.row) && (_elm_lang$core$Native_Utils.eq(state1.col, _p55.col) && (_elm_lang$core$Native_Utils.cmp(n, 0) < 1))) ? A2(
					_elm_tools$parser$Parser_Internal$Good,
					_elm_lang$core$List$reverse(revList),
					state1) : A2(_elm_tools$parser$Parser_Internal$Bad, _p53._0, _p55);
			}
		}
	});
var _elm_tools$parser$Parser$repeat = F2(
	function (count, _p56) {
		var _p57 = _p56;
		var _p59 = _p57._0;
		var _p58 = count;
		if (_p58.ctor === 'Exactly') {
			return _elm_tools$parser$Parser_Internal$Parser(
				function (state) {
					return A4(
						_elm_tools$parser$Parser$repeatExactly,
						_p58._0,
						_p59,
						{ctor: '[]'},
						state);
				});
		} else {
			return _elm_tools$parser$Parser_Internal$Parser(
				function (state) {
					return A4(
						_elm_tools$parser$Parser$repeatAtLeast,
						_p58._0,
						_p59,
						{ctor: '[]'},
						state);
				});
		}
	});
var _elm_tools$parser$Parser$ignoreExactly = F8(
	function (n, predicate, source, offset, indent, context, row, col) {
		ignoreExactly:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return A2(
					_elm_tools$parser$Parser_Internal$Good,
					{ctor: '_Tuple0'},
					{source: source, offset: offset, indent: indent, context: context, row: row, col: col});
			} else {
				var newOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, predicate, offset, source);
				if (_elm_lang$core$Native_Utils.eq(newOffset, -1)) {
					return A2(
						_elm_tools$parser$Parser_Internal$Bad,
						_elm_tools$parser$Parser$BadRepeat,
						{source: source, offset: offset, indent: indent, context: context, row: row, col: col});
				} else {
					if (_elm_lang$core$Native_Utils.eq(newOffset, -2)) {
						var _v36 = n - 1,
							_v37 = predicate,
							_v38 = source,
							_v39 = offset + 1,
							_v40 = indent,
							_v41 = context,
							_v42 = row + 1,
							_v43 = 1;
						n = _v36;
						predicate = _v37;
						source = _v38;
						offset = _v39;
						indent = _v40;
						context = _v41;
						row = _v42;
						col = _v43;
						continue ignoreExactly;
					} else {
						var _v44 = n - 1,
							_v45 = predicate,
							_v46 = source,
							_v47 = newOffset,
							_v48 = indent,
							_v49 = context,
							_v50 = row,
							_v51 = col + 1;
						n = _v44;
						predicate = _v45;
						source = _v46;
						offset = _v47;
						indent = _v48;
						context = _v49;
						row = _v50;
						col = _v51;
						continue ignoreExactly;
					}
				}
			}
		}
	});
var _elm_tools$parser$Parser$ignoreAtLeast = F8(
	function (n, predicate, source, offset, indent, context, row, col) {
		ignoreAtLeast:
		while (true) {
			var newOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, predicate, offset, source);
			if (_elm_lang$core$Native_Utils.eq(newOffset, -1)) {
				var state = {source: source, offset: offset, indent: indent, context: context, row: row, col: col};
				return (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) ? A2(
					_elm_tools$parser$Parser_Internal$Good,
					{ctor: '_Tuple0'},
					state) : A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$BadRepeat, state);
			} else {
				if (_elm_lang$core$Native_Utils.eq(newOffset, -2)) {
					var _v52 = n - 1,
						_v53 = predicate,
						_v54 = source,
						_v55 = offset + 1,
						_v56 = indent,
						_v57 = context,
						_v58 = row + 1,
						_v59 = 1;
					n = _v52;
					predicate = _v53;
					source = _v54;
					offset = _v55;
					indent = _v56;
					context = _v57;
					row = _v58;
					col = _v59;
					continue ignoreAtLeast;
				} else {
					var _v60 = n - 1,
						_v61 = predicate,
						_v62 = source,
						_v63 = newOffset,
						_v64 = indent,
						_v65 = context,
						_v66 = row,
						_v67 = col + 1;
					n = _v60;
					predicate = _v61;
					source = _v62;
					offset = _v63;
					indent = _v64;
					context = _v65;
					row = _v66;
					col = _v67;
					continue ignoreAtLeast;
				}
			}
		}
	});
var _elm_tools$parser$Parser$ignore = F2(
	function (count, predicate) {
		var _p60 = count;
		if (_p60.ctor === 'Exactly') {
			return _elm_tools$parser$Parser_Internal$Parser(
				function (_p61) {
					var _p62 = _p61;
					return A8(_elm_tools$parser$Parser$ignoreExactly, _p60._0, predicate, _p62.source, _p62.offset, _p62.indent, _p62.context, _p62.row, _p62.col);
				});
		} else {
			return _elm_tools$parser$Parser_Internal$Parser(
				function (_p63) {
					var _p64 = _p63;
					return A8(_elm_tools$parser$Parser$ignoreAtLeast, _p60._0, predicate, _p64.source, _p64.offset, _p64.indent, _p64.context, _p64.row, _p64.col);
				});
		}
	});
var _elm_tools$parser$Parser$keep = F2(
	function (count, predicate) {
		return _elm_tools$parser$Parser$source(
			A2(_elm_tools$parser$Parser$ignore, count, predicate));
	});
var _elm_tools$parser$Parser$BadFloat = {ctor: 'BadFloat'};
var _elm_tools$parser$Parser$float = _elm_tools$parser$Parser_Internal$Parser(
	function (_p65) {
		var _p66 = _p65;
		var _p77 = _p66.source;
		var _p76 = _p66.row;
		var _p75 = _p66.offset;
		var _p74 = _p66.indent;
		var _p73 = _p66.context;
		var _p72 = _p66.col;
		var _p67 = A3(
			_elm_tools$parser$Parser$floatHelp,
			_p75,
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser$isZero, _p75, _p77),
			_p77);
		if (_p67.ctor === 'Err') {
			var _p68 = _p67._0;
			return A2(
				_elm_tools$parser$Parser_Internal$Bad,
				_elm_tools$parser$Parser$BadFloat,
				{source: _p77, offset: _p68, indent: _p74, context: _p73, row: _p76, col: _p72 + (_p68 - _p75)});
		} else {
			var _p71 = _p67._0;
			var _p69 = _elm_lang$core$String$toFloat(
				A3(_elm_lang$core$String$slice, _p75, _p71, _p77));
			if (_p69.ctor === 'Err') {
				return _elm_lang$core$Native_Utils.crashCase(
					'Parser',
					{
						start: {line: 733, column: 9},
						end: {line: 745, column: 16}
					},
					_p69)(_elm_tools$parser$Parser$badFloatMsg);
			} else {
				return A2(
					_elm_tools$parser$Parser_Internal$Good,
					_p69._0,
					{source: _p77, offset: _p71, indent: _p74, context: _p73, row: _p76, col: _p72 + (_p71 - _p75)});
			}
		}
	});
var _elm_tools$parser$Parser$BadInt = {ctor: 'BadInt'};
var _elm_tools$parser$Parser$int = _elm_tools$parser$Parser_Internal$Parser(
	function (_p78) {
		var _p79 = _p78;
		var _p90 = _p79.source;
		var _p89 = _p79.row;
		var _p88 = _p79.offset;
		var _p87 = _p79.indent;
		var _p86 = _p79.context;
		var _p85 = _p79.col;
		var _p80 = A3(
			_elm_tools$parser$Parser$intHelp,
			_p88,
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser$isZero, _p88, _p90),
			_p90);
		if (_p80.ctor === 'Err') {
			var _p81 = _p80._0;
			return A2(
				_elm_tools$parser$Parser_Internal$Bad,
				_elm_tools$parser$Parser$BadInt,
				{source: _p90, offset: _p81, indent: _p87, context: _p86, row: _p89, col: _p85 + (_p81 - _p88)});
		} else {
			var _p84 = _p80._0;
			var _p82 = _elm_lang$core$String$toInt(
				A3(_elm_lang$core$String$slice, _p88, _p84, _p90));
			if (_p82.ctor === 'Err') {
				return _elm_lang$core$Native_Utils.crashCase(
					'Parser',
					{
						start: {line: 638, column: 9},
						end: {line: 650, column: 16}
					},
					_p82)(_elm_tools$parser$Parser$badIntMsg);
			} else {
				return A2(
					_elm_tools$parser$Parser_Internal$Good,
					_p82._0,
					{source: _p90, offset: _p84, indent: _p87, context: _p86, row: _p89, col: _p85 + (_p84 - _p88)});
			}
		}
	});
var _elm_tools$parser$Parser$BadOneOf = function (a) {
	return {ctor: 'BadOneOf', _0: a};
};
var _elm_tools$parser$Parser$oneOfHelp = F3(
	function (state, problems, parsers) {
		oneOfHelp:
		while (true) {
			var _p91 = parsers;
			if (_p91.ctor === '[]') {
				return A2(
					_elm_tools$parser$Parser_Internal$Bad,
					_elm_tools$parser$Parser$BadOneOf(
						_elm_lang$core$List$reverse(problems)),
					state);
			} else {
				var _p92 = _p91._0._0(state);
				if (_p92.ctor === 'Good') {
					return _p92;
				} else {
					if (_elm_lang$core$Native_Utils.eq(state.row, _p92._1.row) && _elm_lang$core$Native_Utils.eq(state.col, _p92._1.col)) {
						var _v79 = state,
							_v80 = {ctor: '::', _0: _p92._0, _1: problems},
							_v81 = _p91._1;
						state = _v79;
						problems = _v80;
						parsers = _v81;
						continue oneOfHelp;
					} else {
						return _p92;
					}
				}
			}
		}
	});
var _elm_tools$parser$Parser$oneOf = function (parsers) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (state) {
			return A3(
				_elm_tools$parser$Parser$oneOfHelp,
				state,
				{ctor: '[]'},
				parsers);
		});
};
var _elm_tools$parser$Parser$Exactly = function (a) {
	return {ctor: 'Exactly', _0: a};
};
var _elm_tools$parser$Parser$AtLeast = function (a) {
	return {ctor: 'AtLeast', _0: a};
};
var _elm_tools$parser$Parser$zeroOrMore = _elm_tools$parser$Parser$AtLeast(0);
var _elm_tools$parser$Parser$oneOrMore = _elm_tools$parser$Parser$AtLeast(1);

var _elm_tools$parser$Parser_LanguageKit$isChar = function ($char) {
	return true;
};
var _elm_tools$parser$Parser_LanguageKit$isTab = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('\t'));
};
var _elm_tools$parser$Parser_LanguageKit$isSpace = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr(' ')) || (_elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('\n')) || _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('\r')));
};
var _elm_tools$parser$Parser_LanguageKit$chompSpaces = A2(_elm_tools$parser$Parser$ignore, _elm_tools$parser$Parser$zeroOrMore, _elm_tools$parser$Parser_LanguageKit$isSpace);
var _elm_tools$parser$Parser_LanguageKit$revAlways = F2(
	function (_p0, keep) {
		return keep;
	});
var _elm_tools$parser$Parser_LanguageKit$ignore = F2(
	function (ignoreParser, keepParser) {
		return A3(_elm_tools$parser$Parser$map2, _elm_tools$parser$Parser_LanguageKit$revAlways, ignoreParser, keepParser);
	});
var _elm_tools$parser$Parser_LanguageKit_ops = _elm_tools$parser$Parser_LanguageKit_ops || {};
_elm_tools$parser$Parser_LanguageKit_ops['|-'] = _elm_tools$parser$Parser_LanguageKit$ignore;
var _elm_tools$parser$Parser_LanguageKit$sequenceEndMandatory = F5(
	function (end, spaces, parseItem, sep, revItems) {
		var chompRest = function (item) {
			return A5(
				_elm_tools$parser$Parser_LanguageKit$sequenceEndMandatory,
				end,
				spaces,
				parseItem,
				sep,
				{ctor: '::', _0: item, _1: revItems});
		};
		return _elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$andThen,
					chompRest,
					A2(
						_elm_tools$parser$Parser_ops['|.'],
						A2(
							_elm_tools$parser$Parser_ops['|.'],
							A2(_elm_tools$parser$Parser_ops['|.'], parseItem, spaces),
							_elm_tools$parser$Parser$symbol(sep)),
						spaces)),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser_LanguageKit_ops['|-'],
						_elm_tools$parser$Parser$symbol(end),
						_elm_tools$parser$Parser$succeed(
							_elm_lang$core$List$reverse(revItems))),
					_1: {ctor: '[]'}
				}
			});
	});
var _elm_tools$parser$Parser_LanguageKit$sequenceEndForbidden = F5(
	function (end, spaces, parseItem, sep, revItems) {
		var chompRest = function (item) {
			return A5(
				_elm_tools$parser$Parser_LanguageKit$sequenceEndForbidden,
				end,
				spaces,
				parseItem,
				sep,
				{ctor: '::', _0: item, _1: revItems});
		};
		return A2(
			_elm_tools$parser$Parser_LanguageKit$ignore,
			spaces,
			_elm_tools$parser$Parser$oneOf(
				{
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser_LanguageKit_ops['|-'],
						A2(
							_elm_tools$parser$Parser_LanguageKit_ops['|-'],
							_elm_tools$parser$Parser$symbol(sep),
							spaces),
						A2(_elm_tools$parser$Parser$andThen, chompRest, parseItem)),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_tools$parser$Parser_LanguageKit_ops['|-'],
							_elm_tools$parser$Parser$symbol(end),
							_elm_tools$parser$Parser$succeed(
								_elm_lang$core$List$reverse(revItems))),
						_1: {ctor: '[]'}
					}
				}));
	});
var _elm_tools$parser$Parser_LanguageKit$sequenceEndOptional = F5(
	function (end, spaces, parseItem, sep, revItems) {
		var chompRest = function (item) {
			return A5(
				_elm_tools$parser$Parser_LanguageKit$sequenceEndOptional,
				end,
				spaces,
				parseItem,
				sep,
				{ctor: '::', _0: item, _1: revItems});
		};
		var parseEnd = A2(
			_elm_tools$parser$Parser$andThen,
			function (_p1) {
				return _elm_tools$parser$Parser$succeed(
					_elm_lang$core$List$reverse(revItems));
			},
			_elm_tools$parser$Parser$symbol(end));
		return A2(
			_elm_tools$parser$Parser_LanguageKit$ignore,
			spaces,
			_elm_tools$parser$Parser$oneOf(
				{
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser_LanguageKit_ops['|-'],
						A2(
							_elm_tools$parser$Parser_LanguageKit_ops['|-'],
							_elm_tools$parser$Parser$symbol(sep),
							spaces),
						_elm_tools$parser$Parser$oneOf(
							{
								ctor: '::',
								_0: A2(_elm_tools$parser$Parser$andThen, chompRest, parseItem),
								_1: {
									ctor: '::',
									_0: parseEnd,
									_1: {ctor: '[]'}
								}
							})),
					_1: {
						ctor: '::',
						_0: parseEnd,
						_1: {ctor: '[]'}
					}
				}));
	});
var _elm_tools$parser$Parser_LanguageKit$sequenceEnd = F5(
	function (end, spaces, parseItem, sep, trailing) {
		var chompRest = function (item) {
			var _p2 = trailing;
			switch (_p2.ctor) {
				case 'Forbidden':
					return A5(
						_elm_tools$parser$Parser_LanguageKit$sequenceEndForbidden,
						end,
						spaces,
						parseItem,
						sep,
						{
							ctor: '::',
							_0: item,
							_1: {ctor: '[]'}
						});
				case 'Optional':
					return A5(
						_elm_tools$parser$Parser_LanguageKit$sequenceEndOptional,
						end,
						spaces,
						parseItem,
						sep,
						{
							ctor: '::',
							_0: item,
							_1: {ctor: '[]'}
						});
				default:
					return A2(
						_elm_tools$parser$Parser_LanguageKit_ops['|-'],
						A2(
							_elm_tools$parser$Parser_LanguageKit_ops['|-'],
							A2(
								_elm_tools$parser$Parser_LanguageKit_ops['|-'],
								spaces,
								_elm_tools$parser$Parser$symbol(sep)),
							spaces),
						A5(
							_elm_tools$parser$Parser_LanguageKit$sequenceEndMandatory,
							end,
							spaces,
							parseItem,
							sep,
							{
								ctor: '::',
								_0: item,
								_1: {ctor: '[]'}
							}));
			}
		};
		return _elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: A2(_elm_tools$parser$Parser$andThen, chompRest, parseItem),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser_LanguageKit_ops['|-'],
						_elm_tools$parser$Parser$symbol(end),
						_elm_tools$parser$Parser$succeed(
							{ctor: '[]'})),
					_1: {ctor: '[]'}
				}
			});
	});
var _elm_tools$parser$Parser_LanguageKit$whitespaceHelp = function (parser) {
	return A2(
		_elm_tools$parser$Parser_LanguageKit$ignore,
		_elm_tools$parser$Parser_LanguageKit$chompSpaces,
		_elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$andThen,
					function (_p3) {
						return _elm_tools$parser$Parser_LanguageKit$whitespaceHelp(parser);
					},
					parser),
				_1: {
					ctor: '::',
					_0: _elm_tools$parser$Parser$succeed(
						{ctor: '_Tuple0'}),
					_1: {ctor: '[]'}
				}
			}));
};
var _elm_tools$parser$Parser_LanguageKit$nestableCommentHelp = F4(
	function (isNotRelevant, start, end, nestLevel) {
		return _elm_tools$parser$Parser$lazy(
			function (_p4) {
				return A2(
					_elm_tools$parser$Parser_LanguageKit$ignore,
					A2(_elm_tools$parser$Parser$ignore, _elm_tools$parser$Parser$zeroOrMore, isNotRelevant),
					_elm_tools$parser$Parser$oneOf(
						{
							ctor: '::',
							_0: A2(
								_elm_tools$parser$Parser_LanguageKit$ignore,
								_elm_tools$parser$Parser$symbol(end),
								_elm_lang$core$Native_Utils.eq(nestLevel, 1) ? _elm_tools$parser$Parser$succeed(
									{ctor: '_Tuple0'}) : A4(_elm_tools$parser$Parser_LanguageKit$nestableCommentHelp, isNotRelevant, start, end, nestLevel - 1)),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_tools$parser$Parser_LanguageKit$ignore,
									_elm_tools$parser$Parser$symbol(start),
									A4(_elm_tools$parser$Parser_LanguageKit$nestableCommentHelp, isNotRelevant, start, end, nestLevel + 1)),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_tools$parser$Parser_LanguageKit$ignore,
										A2(
											_elm_tools$parser$Parser$ignore,
											_elm_tools$parser$Parser$Exactly(1),
											_elm_tools$parser$Parser_LanguageKit$isChar),
										A4(_elm_tools$parser$Parser_LanguageKit$nestableCommentHelp, isNotRelevant, start, end, nestLevel)),
									_1: {ctor: '[]'}
								}
							}
						}));
			});
	});
var _elm_tools$parser$Parser_LanguageKit$nestableComment = F2(
	function (start, end) {
		var _p5 = {
			ctor: '_Tuple2',
			_0: _elm_lang$core$String$uncons(start),
			_1: _elm_lang$core$String$uncons(end)
		};
		if (_p5._0.ctor === 'Nothing') {
			return _elm_tools$parser$Parser$fail('Trying to parse a multi-line comment, but the start token cannot be the empty string!');
		} else {
			if (_p5._1.ctor === 'Nothing') {
				return _elm_tools$parser$Parser$fail('Trying to parse a multi-line comment, but the end token cannot be the empty string!');
			} else {
				var isNotRelevant = function ($char) {
					return (!_elm_lang$core$Native_Utils.eq($char, _p5._0._0._0)) && (!_elm_lang$core$Native_Utils.eq($char, _p5._1._0._0));
				};
				return A2(
					_elm_tools$parser$Parser_ops['|.'],
					_elm_tools$parser$Parser$symbol(start),
					A4(_elm_tools$parser$Parser_LanguageKit$nestableCommentHelp, isNotRelevant, start, end, 1));
			}
		}
	});
var _elm_tools$parser$Parser_LanguageKit$whitespace = function (_p6) {
	var _p7 = _p6;
	var multiParser = function () {
		var _p8 = _p7.multiComment;
		switch (_p8.ctor) {
			case 'NoMultiComment':
				return {ctor: '[]'};
			case 'UnnestableComment':
				return {
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser_ops['|.'],
						_elm_tools$parser$Parser$symbol(_p8._0),
						_elm_tools$parser$Parser$ignoreUntil(_p8._1)),
					_1: {ctor: '[]'}
				};
			default:
				return {
					ctor: '::',
					_0: A2(_elm_tools$parser$Parser_LanguageKit$nestableComment, _p8._0, _p8._1),
					_1: {ctor: '[]'}
				};
		}
	}();
	var lineParser = function () {
		var _p9 = _p7.lineComment;
		if (_p9.ctor === 'NoLineComment') {
			return {ctor: '[]'};
		} else {
			return {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser_ops['|.'],
					_elm_tools$parser$Parser$symbol(_p9._0),
					_elm_tools$parser$Parser$ignoreUntil('\n')),
				_1: {ctor: '[]'}
			};
		}
	}();
	var tabParser = _p7.allowTabs ? {
		ctor: '::',
		_0: A2(_elm_tools$parser$Parser$ignore, _elm_tools$parser$Parser$zeroOrMore, _elm_tools$parser$Parser_LanguageKit$isTab),
		_1: {ctor: '[]'}
	} : {ctor: '[]'};
	return _elm_tools$parser$Parser_LanguageKit$whitespaceHelp(
		_elm_tools$parser$Parser$oneOf(
			A2(
				_elm_lang$core$Basics_ops['++'],
				tabParser,
				A2(_elm_lang$core$Basics_ops['++'], lineParser, multiParser))));
};
var _elm_tools$parser$Parser_LanguageKit$sequence = function (_p10) {
	var _p11 = _p10;
	var _p12 = _p11.spaces;
	return A2(
		_elm_tools$parser$Parser_LanguageKit_ops['|-'],
		A2(
			_elm_tools$parser$Parser_LanguageKit_ops['|-'],
			_elm_tools$parser$Parser$symbol(_p11.start),
			_p12),
		A5(_elm_tools$parser$Parser_LanguageKit$sequenceEnd, _p11.end, _p12, _p11.item, _p11.separator, _p11.trailing));
};
var _elm_tools$parser$Parser_LanguageKit$varHelp = F7(
	function (isGood, offset, row, col, source, indent, context) {
		varHelp:
		while (true) {
			var newOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, isGood, offset, source);
			if (_elm_lang$core$Native_Utils.eq(newOffset, -1)) {
				return {source: source, offset: offset, indent: indent, context: context, row: row, col: col};
			} else {
				if (_elm_lang$core$Native_Utils.eq(newOffset, -2)) {
					var _v6 = isGood,
						_v7 = offset + 1,
						_v8 = row + 1,
						_v9 = 1,
						_v10 = source,
						_v11 = indent,
						_v12 = context;
					isGood = _v6;
					offset = _v7;
					row = _v8;
					col = _v9;
					source = _v10;
					indent = _v11;
					context = _v12;
					continue varHelp;
				} else {
					var _v13 = isGood,
						_v14 = newOffset,
						_v15 = row,
						_v16 = col + 1,
						_v17 = source,
						_v18 = indent,
						_v19 = context;
					isGood = _v13;
					offset = _v14;
					row = _v15;
					col = _v16;
					source = _v17;
					indent = _v18;
					context = _v19;
					continue varHelp;
				}
			}
		}
	});
var _elm_tools$parser$Parser_LanguageKit$variable = F3(
	function (isFirst, isOther, keywords) {
		return _elm_tools$parser$Parser_Internal$Parser(
			function (_p13) {
				var _p14 = _p13;
				var _p20 = _p14;
				var _p19 = _p14.source;
				var _p18 = _p14.row;
				var _p17 = _p14.offset;
				var _p16 = _p14.indent;
				var _p15 = _p14.context;
				var firstOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, isFirst, _p17, _p19);
				if (_elm_lang$core$Native_Utils.eq(firstOffset, -1)) {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$ExpectingVariable, _p20);
				} else {
					var state2 = _elm_lang$core$Native_Utils.eq(firstOffset, -2) ? A7(_elm_tools$parser$Parser_LanguageKit$varHelp, isOther, _p17 + 1, _p18 + 1, 1, _p19, _p16, _p15) : A7(_elm_tools$parser$Parser_LanguageKit$varHelp, isOther, firstOffset, _p18, _p14.col + 1, _p19, _p16, _p15);
					var name = A3(_elm_lang$core$String$slice, _p17, state2.offset, _p19);
					return A2(_elm_lang$core$Set$member, name, keywords) ? A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$ExpectingVariable, _p20) : A2(_elm_tools$parser$Parser_Internal$Good, name, state2);
				}
			});
	});
var _elm_tools$parser$Parser_LanguageKit$Mandatory = {ctor: 'Mandatory'};
var _elm_tools$parser$Parser_LanguageKit$Optional = {ctor: 'Optional'};
var _elm_tools$parser$Parser_LanguageKit$Forbidden = {ctor: 'Forbidden'};
var _elm_tools$parser$Parser_LanguageKit$list = F2(
	function (spaces, item) {
		return _elm_tools$parser$Parser_LanguageKit$sequence(
			{start: '[', separator: ',', end: ']', spaces: spaces, item: item, trailing: _elm_tools$parser$Parser_LanguageKit$Forbidden});
	});
var _elm_tools$parser$Parser_LanguageKit$record = F2(
	function (spaces, item) {
		return _elm_tools$parser$Parser_LanguageKit$sequence(
			{start: '{', separator: ',', end: '}', spaces: spaces, item: item, trailing: _elm_tools$parser$Parser_LanguageKit$Forbidden});
	});
var _elm_tools$parser$Parser_LanguageKit$tuple = F2(
	function (spaces, item) {
		return _elm_tools$parser$Parser_LanguageKit$sequence(
			{start: '(', separator: ',', end: ')', spaces: spaces, item: item, trailing: _elm_tools$parser$Parser_LanguageKit$Forbidden});
	});
var _elm_tools$parser$Parser_LanguageKit$LineComment = function (a) {
	return {ctor: 'LineComment', _0: a};
};
var _elm_tools$parser$Parser_LanguageKit$NoLineComment = {ctor: 'NoLineComment'};
var _elm_tools$parser$Parser_LanguageKit$UnnestableComment = F2(
	function (a, b) {
		return {ctor: 'UnnestableComment', _0: a, _1: b};
	});
var _elm_tools$parser$Parser_LanguageKit$NestableComment = F2(
	function (a, b) {
		return {ctor: 'NestableComment', _0: a, _1: b};
	});
var _elm_tools$parser$Parser_LanguageKit$NoMultiComment = {ctor: 'NoMultiComment'};

var _kirchner$elm_pat$Expr$spaces = A2(
	_elm_tools$parser$Parser$ignore,
	_elm_tools$parser$Parser$zeroOrMore,
	function (c) {
		return _elm_lang$core$Native_Utils.eq(
			c,
			_elm_lang$core$Native_Utils.chr(' '));
	});
var _kirchner$elm_pat$Expr$isVarChar = function ($char) {
	return _elm_lang$core$Char$isLower($char) || (_elm_lang$core$Char$isUpper($char) || _elm_lang$core$Char$isDigit($char));
};
var _kirchner$elm_pat$Expr$parseVariable = function (s) {
	return _elm_lang$core$Result$toMaybe(
		A2(
			_elm_tools$parser$Parser$run,
			A2(
				_elm_tools$parser$Parser_ops['|.'],
				A2(
					_elm_tools$parser$Parser_ops['|='],
					_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
					A3(_elm_tools$parser$Parser_LanguageKit$variable, _elm_lang$core$Char$isLower, _kirchner$elm_pat$Expr$isVarChar, _elm_lang$core$Set$empty)),
				_elm_tools$parser$Parser$end),
			s));
};
var _kirchner$elm_pat$Expr$print = function (expr) {
	var apply = F3(
		function (operator, e1, e2) {
			return _elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: _kirchner$elm_pat$Expr$print(e1),
					_1: {
						ctor: '::',
						_0: ' ',
						_1: {
							ctor: '::',
							_0: operator,
							_1: {
								ctor: '::',
								_0: ' ',
								_1: {
									ctor: '::',
									_0: _kirchner$elm_pat$Expr$print(e2),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				});
		});
	var _p0 = expr;
	switch (_p0.ctor) {
		case 'Number':
			return _elm_lang$core$Basics$toString(_p0._0);
		case 'Symbol':
			return _p0._0;
		case 'Sum':
			return A3(apply, '+', _p0._0, _p0._1);
		case 'Difference':
			return A3(apply, '-', _p0._0, _p0._1);
		case 'Product':
			return A3(apply, '*', _p0._0, _p0._1);
		default:
			return A3(apply, '/', _p0._0, _p0._1);
	}
};
var _kirchner$elm_pat$Expr$encode = function (expr) {
	return _elm_lang$core$Json_Encode$string(
		_kirchner$elm_pat$Expr$print(expr));
};
var _kirchner$elm_pat$Expr$compute = F2(
	function (variables, expr) {
		var apply = F3(
			function (func, e1, e2) {
				return A3(
					_elm_lang$core$Maybe$map2,
					func,
					A2(_kirchner$elm_pat$Expr$compute, variables, e1),
					A2(_kirchner$elm_pat$Expr$compute, variables, e2));
			});
		var _p1 = expr;
		switch (_p1.ctor) {
			case 'Number':
				return _elm_lang$core$Maybe$Just(_p1._0);
			case 'Symbol':
				return A2(
					_elm_lang$core$Maybe$andThen,
					_kirchner$elm_pat$Expr$compute(variables),
					A2(_elm_lang$core$Dict$get, _p1._0, variables));
			case 'Sum':
				return A3(
					apply,
					F2(
						function (f1, f2) {
							return f1 + f2;
						}),
					_p1._0,
					_p1._1);
			case 'Difference':
				return A3(
					apply,
					F2(
						function (f1, f2) {
							return f1 - f2;
						}),
					_p1._0,
					_p1._1);
			case 'Product':
				return A3(
					apply,
					F2(
						function (f1, f2) {
							return f1 * f2;
						}),
					_p1._0,
					_p1._1);
			default:
				return A3(
					apply,
					F2(
						function (f1, f2) {
							return f1 / f2;
						}),
					_p1._0,
					_p1._1);
		}
	});
var _kirchner$elm_pat$Expr$Quotient = F2(
	function (a, b) {
		return {ctor: 'Quotient', _0: a, _1: b};
	});
var _kirchner$elm_pat$Expr$Product = F2(
	function (a, b) {
		return {ctor: 'Product', _0: a, _1: b};
	});
var _kirchner$elm_pat$Expr$Difference = F2(
	function (a, b) {
		return {ctor: 'Difference', _0: a, _1: b};
	});
var _kirchner$elm_pat$Expr$Sum = F2(
	function (a, b) {
		return {ctor: 'Sum', _0: a, _1: b};
	});
var _kirchner$elm_pat$Expr$Symbol = function (a) {
	return {ctor: 'Symbol', _0: a};
};
var _kirchner$elm_pat$Expr$Number = function (a) {
	return {ctor: 'Number', _0: a};
};
var _kirchner$elm_pat$Expr$atom = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: A2(
			_elm_tools$parser$Parser_ops['|='],
			_elm_tools$parser$Parser$succeed(_kirchner$elm_pat$Expr$Number),
			_elm_tools$parser$Parser$float),
		_1: {
			ctor: '::',
			_0: A2(
				_elm_tools$parser$Parser_ops['|='],
				A2(
					_elm_tools$parser$Parser_ops['|.'],
					_elm_tools$parser$Parser$succeed(
						function ($float) {
							return _kirchner$elm_pat$Expr$Number(0 - $float);
						}),
					_elm_tools$parser$Parser$symbol('-')),
				_elm_tools$parser$Parser$float),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser_ops['|='],
					_elm_tools$parser$Parser$succeed(_kirchner$elm_pat$Expr$Symbol),
					A3(_elm_tools$parser$Parser_LanguageKit$variable, _elm_lang$core$Char$isLower, _kirchner$elm_pat$Expr$isVarChar, _elm_lang$core$Set$empty)),
				_1: {ctor: '[]'}
			}
		}
	});
var _kirchner$elm_pat$Expr$factor = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: A2(
			_elm_tools$parser$Parser_ops['|.'],
			A2(
				_elm_tools$parser$Parser_ops['|='],
				A2(
					_elm_tools$parser$Parser_ops['|.'],
					_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
					_elm_tools$parser$Parser$symbol('(')),
				_elm_tools$parser$Parser$lazy(
					function (_p2) {
						return _kirchner$elm_pat$Expr$expr;
					})),
			_elm_tools$parser$Parser$symbol(')')),
		_1: {
			ctor: '::',
			_0: _kirchner$elm_pat$Expr$atom,
			_1: {ctor: '[]'}
		}
	});
var _kirchner$elm_pat$Expr$expr = A2(
	_elm_tools$parser$Parser$andThen,
	function (t) {
		return _kirchner$elm_pat$Expr$exprHelp(t);
	},
	_elm_tools$parser$Parser$lazy(
		function (_p3) {
			return _kirchner$elm_pat$Expr$term;
		}));
var _kirchner$elm_pat$Expr$exprHelp = function (t) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A2(
				_elm_tools$parser$Parser$andThen,
				function (t) {
					return _kirchner$elm_pat$Expr$exprHelp(t);
				},
				_kirchner$elm_pat$Expr$sum(t)),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$andThen,
					function (t) {
						return _kirchner$elm_pat$Expr$exprHelp(t);
					},
					_kirchner$elm_pat$Expr$difference(t)),
				_1: {
					ctor: '::',
					_0: _elm_tools$parser$Parser$succeed(t),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _kirchner$elm_pat$Expr$difference = function (t) {
	return A2(
		_elm_tools$parser$Parser$delayedCommit,
		_kirchner$elm_pat$Expr$spaces,
		A2(
			_elm_tools$parser$Parser_ops['|='],
			A2(
				_elm_tools$parser$Parser_ops['|.'],
				A2(
					_elm_tools$parser$Parser_ops['|.'],
					_elm_tools$parser$Parser$succeed(
						_kirchner$elm_pat$Expr$Difference(t)),
					_elm_tools$parser$Parser$symbol('-')),
				_kirchner$elm_pat$Expr$spaces),
			_kirchner$elm_pat$Expr$term));
};
var _kirchner$elm_pat$Expr$term = A2(
	_elm_tools$parser$Parser$andThen,
	function (f) {
		return _kirchner$elm_pat$Expr$termHelp(f);
	},
	_elm_tools$parser$Parser$lazy(
		function (_p4) {
			return _kirchner$elm_pat$Expr$factor;
		}));
var _kirchner$elm_pat$Expr$termHelp = function (f) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A2(
				_elm_tools$parser$Parser$andThen,
				function (f) {
					return _kirchner$elm_pat$Expr$termHelp(f);
				},
				_kirchner$elm_pat$Expr$product(f)),
			_1: {
				ctor: '::',
				_0: _kirchner$elm_pat$Expr$quotient(f),
				_1: {
					ctor: '::',
					_0: _elm_tools$parser$Parser$succeed(f),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _kirchner$elm_pat$Expr$product = function (f) {
	return A2(
		_elm_tools$parser$Parser$delayedCommit,
		_kirchner$elm_pat$Expr$spaces,
		A2(
			_elm_tools$parser$Parser_ops['|='],
			A2(
				_elm_tools$parser$Parser_ops['|.'],
				A2(
					_elm_tools$parser$Parser_ops['|.'],
					_elm_tools$parser$Parser$succeed(
						_kirchner$elm_pat$Expr$Product(f)),
					_elm_tools$parser$Parser$symbol('*')),
				_kirchner$elm_pat$Expr$spaces),
			_kirchner$elm_pat$Expr$factor));
};
var _kirchner$elm_pat$Expr$quotient = function (f) {
	return A2(
		_elm_tools$parser$Parser$delayedCommit,
		_kirchner$elm_pat$Expr$spaces,
		A2(
			_elm_tools$parser$Parser_ops['|='],
			A2(
				_elm_tools$parser$Parser_ops['|.'],
				A2(
					_elm_tools$parser$Parser_ops['|.'],
					_elm_tools$parser$Parser$succeed(
						_kirchner$elm_pat$Expr$Quotient(f)),
					_elm_tools$parser$Parser$symbol('/')),
				_kirchner$elm_pat$Expr$spaces),
			_kirchner$elm_pat$Expr$factor));
};
var _kirchner$elm_pat$Expr$sum = function (t) {
	return A2(
		_elm_tools$parser$Parser$delayedCommit,
		_kirchner$elm_pat$Expr$spaces,
		A2(
			_elm_tools$parser$Parser_ops['|='],
			A2(
				_elm_tools$parser$Parser_ops['|.'],
				A2(
					_elm_tools$parser$Parser_ops['|.'],
					_elm_tools$parser$Parser$succeed(
						_kirchner$elm_pat$Expr$Sum(t)),
					_elm_tools$parser$Parser$symbol('+')),
				_kirchner$elm_pat$Expr$spaces),
			_kirchner$elm_pat$Expr$term));
};
var _kirchner$elm_pat$Expr$parse = function (s) {
	return _elm_lang$core$Result$toMaybe(
		A2(_elm_tools$parser$Parser$run, _kirchner$elm_pat$Expr$expr, s));
};
var _kirchner$elm_pat$Expr$decode = A2(
	_elm_lang$core$Json_Decode$map,
	function (_p5) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			_kirchner$elm_pat$Expr$Number(0.0),
			_kirchner$elm_pat$Expr$parse(_p5));
	},
	_elm_lang$core$Json_Decode$string);

var _rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier = function (identifier) {
	return A4(
		_elm_lang$core$Regex$replace,
		_elm_lang$core$Regex$All,
		_elm_lang$core$Regex$regex('[^a-zA-Z0-9_-]'),
		function (_p0) {
			return '';
		},
		A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$All,
			_elm_lang$core$Regex$regex('\\s+'),
			function (_p1) {
				return '-';
			},
			_elm_lang$core$String$trim(
				_elm_lang$core$Basics$toString(identifier))));
};
var _rtfeldman$elm_css_util$Css_Helpers$identifierToString = F2(
	function (name, identifier) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(name),
			_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(identifier));
	});

var _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations = function (declarations) {
	dropEmptyDeclarations:
	while (true) {
		var _p0 = declarations;
		if (_p0.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			switch (_p0._0.ctor) {
				case 'StyleBlockDeclaration':
					var _p1 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._0._2)) {
						var _v1 = _p1;
						declarations = _v1;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p1)
						};
					}
				case 'MediaRule':
					var _p4 = _p0._1;
					if (A2(
						_elm_lang$core$List$all,
						function (_p2) {
							var _p3 = _p2;
							return _elm_lang$core$List$isEmpty(_p3._2);
						},
						_p0._0._1)) {
						var _v3 = _p4;
						declarations = _v3;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p4)
						};
					}
				case 'SupportsRule':
					var _p5 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._1)) {
						var _v4 = _p5;
						declarations = _v4;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p5)
						};
					}
				case 'DocumentRule':
					return {
						ctor: '::',
						_0: _p0._0,
						_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p0._1)
					};
				case 'PageRule':
					var _p6 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._1)) {
						var _v5 = _p6;
						declarations = _v5;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p6)
						};
					}
				case 'FontFace':
					var _p7 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._0)) {
						var _v6 = _p7;
						declarations = _v6;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p7)
						};
					}
				case 'Keyframes':
					var _p8 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._1)) {
						var _v7 = _p8;
						declarations = _v7;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p8)
						};
					}
				case 'Viewport':
					var _p9 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._0)) {
						var _v8 = _p9;
						declarations = _v8;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p9)
						};
					}
				case 'CounterStyle':
					var _p10 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._0)) {
						var _v9 = _p10;
						declarations = _v9;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p10)
						};
					}
				default:
					var _p13 = _p0._1;
					if (A2(
						_elm_lang$core$List$all,
						function (_p11) {
							var _p12 = _p11;
							return _elm_lang$core$List$isEmpty(_p12._1);
						},
						_p0._0._0)) {
						var _v11 = _p13;
						declarations = _v11;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p13)
						};
					}
			}
		}
	}
};
var _rtfeldman$elm_css$Css_Structure$dropEmpty = function (_p14) {
	var _p15 = _p14;
	return {
		charset: _p15.charset,
		imports: _p15.imports,
		namespaces: _p15.namespaces,
		declarations: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p15.declarations)
	};
};
var _rtfeldman$elm_css$Css_Structure$concatMapLast = F2(
	function (update, list) {
		var _p16 = list;
		if (_p16.ctor === '[]') {
			return list;
		} else {
			if (_p16._1.ctor === '[]') {
				return update(_p16._0);
			} else {
				return {
					ctor: '::',
					_0: _p16._0,
					_1: A2(_rtfeldman$elm_css$Css_Structure$concatMapLast, update, _p16._1)
				};
			}
		}
	});
var _rtfeldman$elm_css$Css_Structure$mapLast = F2(
	function (update, list) {
		var _p17 = list;
		if (_p17.ctor === '[]') {
			return list;
		} else {
			if (_p17._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: update(_p17._0),
					_1: {ctor: '[]'}
				};
			} else {
				return {
					ctor: '::',
					_0: _p17._0,
					_1: A2(_rtfeldman$elm_css$Css_Structure$mapLast, update, _p17._1)
				};
			}
		}
	});
var _rtfeldman$elm_css$Css_Structure$Property = F3(
	function (a, b, c) {
		return {important: a, key: b, value: c};
	});
var _rtfeldman$elm_css$Css_Structure$Stylesheet = F4(
	function (a, b, c, d) {
		return {charset: a, imports: b, namespaces: c, declarations: d};
	});
var _rtfeldman$elm_css$Css_Structure$FontFeatureValues = function (a) {
	return {ctor: 'FontFeatureValues', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$CounterStyle = function (a) {
	return {ctor: 'CounterStyle', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$Viewport = function (a) {
	return {ctor: 'Viewport', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$Keyframes = F2(
	function (a, b) {
		return {ctor: 'Keyframes', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$FontFace = function (a) {
	return {ctor: 'FontFace', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$PageRule = F2(
	function (a, b) {
		return {ctor: 'PageRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$DocumentRule = F5(
	function (a, b, c, d, e) {
		return {ctor: 'DocumentRule', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _rtfeldman$elm_css$Css_Structure$SupportsRule = F2(
	function (a, b) {
		return {ctor: 'SupportsRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$MediaRule = F2(
	function (a, b) {
		return {ctor: 'MediaRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration = function (a) {
	return {ctor: 'StyleBlockDeclaration', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock = F2(
	function (update, declarations) {
		var _p18 = declarations;
		_v15_12:
		do {
			if (_p18.ctor === '[]') {
				return declarations;
			} else {
				if (_p18._1.ctor === '[]') {
					switch (_p18._0.ctor) {
						case 'StyleBlockDeclaration':
							return A2(
								_elm_lang$core$List$map,
								_rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration,
								update(_p18._0._0));
						case 'MediaRule':
							if (_p18._0._1.ctor === '::') {
								if (_p18._0._1._1.ctor === '[]') {
									return {
										ctor: '::',
										_0: A2(
											_rtfeldman$elm_css$Css_Structure$MediaRule,
											_p18._0._0,
											update(_p18._0._1._0)),
										_1: {ctor: '[]'}
									};
								} else {
									var _p19 = A2(
										_rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock,
										update,
										{
											ctor: '::',
											_0: A2(_rtfeldman$elm_css$Css_Structure$MediaRule, _p18._0._0, _p18._0._1._1),
											_1: {ctor: '[]'}
										});
									if (((_p19.ctor === '::') && (_p19._0.ctor === 'MediaRule')) && (_p19._1.ctor === '[]')) {
										return {
											ctor: '::',
											_0: A2(
												_rtfeldman$elm_css$Css_Structure$MediaRule,
												_p19._0._0,
												{ctor: '::', _0: _p18._0._1._0, _1: _p19._0._1}),
											_1: {ctor: '[]'}
										};
									} else {
										return _p19;
									}
								}
							} else {
								break _v15_12;
							}
						case 'SupportsRule':
							return {
								ctor: '::',
								_0: A2(
									_rtfeldman$elm_css$Css_Structure$SupportsRule,
									_p18._0._0,
									A2(_rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock, update, _p18._0._1)),
								_1: {ctor: '[]'}
							};
						case 'DocumentRule':
							return A2(
								_elm_lang$core$List$map,
								A4(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p18._0._0, _p18._0._1, _p18._0._2, _p18._0._3),
								update(_p18._0._4));
						case 'PageRule':
							return declarations;
						case 'FontFace':
							return declarations;
						case 'Keyframes':
							return declarations;
						case 'Viewport':
							return declarations;
						case 'CounterStyle':
							return declarations;
						default:
							return declarations;
					}
				} else {
					break _v15_12;
				}
			}
		} while(false);
		return {
			ctor: '::',
			_0: _p18._0,
			_1: A2(_rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock, update, _p18._1)
		};
	});
var _rtfeldman$elm_css$Css_Structure$StyleBlock = F3(
	function (a, b, c) {
		return {ctor: 'StyleBlock', _0: a, _1: b, _2: c};
	});
var _rtfeldman$elm_css$Css_Structure$withPropertyAppended = F2(
	function (property, _p20) {
		var _p21 = _p20;
		return A3(
			_rtfeldman$elm_css$Css_Structure$StyleBlock,
			_p21._0,
			_p21._1,
			A2(
				_elm_lang$core$Basics_ops['++'],
				_p21._2,
				{
					ctor: '::',
					_0: property,
					_1: {ctor: '[]'}
				}));
	});
var _rtfeldman$elm_css$Css_Structure$appendProperty = F2(
	function (property, declarations) {
		var _p22 = declarations;
		if (_p22.ctor === '[]') {
			return declarations;
		} else {
			if (_p22._1.ctor === '[]') {
				switch (_p22._0.ctor) {
					case 'StyleBlockDeclaration':
						return {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
								A2(_rtfeldman$elm_css$Css_Structure$withPropertyAppended, property, _p22._0._0)),
							_1: {ctor: '[]'}
						};
					case 'MediaRule':
						return {
							ctor: '::',
							_0: A2(
								_rtfeldman$elm_css$Css_Structure$MediaRule,
								_p22._0._0,
								A2(
									_rtfeldman$elm_css$Css_Structure$mapLast,
									_rtfeldman$elm_css$Css_Structure$withPropertyAppended(property),
									_p22._0._1)),
							_1: {ctor: '[]'}
						};
					default:
						return declarations;
				}
			} else {
				return {
					ctor: '::',
					_0: _p22._0,
					_1: A2(_rtfeldman$elm_css$Css_Structure$appendProperty, property, _p22._1)
				};
			}
		}
	});
var _rtfeldman$elm_css$Css_Structure$appendToLastSelector = F2(
	function (f, styleBlock) {
		var _p23 = styleBlock;
		if (_p23._1.ctor === '[]') {
			var _p24 = _p23._0;
			return {
				ctor: '::',
				_0: A3(
					_rtfeldman$elm_css$Css_Structure$StyleBlock,
					_p24,
					{ctor: '[]'},
					_p23._2),
				_1: {
					ctor: '::',
					_0: A3(
						_rtfeldman$elm_css$Css_Structure$StyleBlock,
						f(_p24),
						{ctor: '[]'},
						{ctor: '[]'}),
					_1: {ctor: '[]'}
				}
			};
		} else {
			var _p26 = _p23._1;
			var _p25 = _p23._0;
			var newFirst = f(_p25);
			var newRest = A2(_elm_lang$core$List$map, f, _p26);
			return {
				ctor: '::',
				_0: A3(_rtfeldman$elm_css$Css_Structure$StyleBlock, _p25, _p26, _p23._2),
				_1: {
					ctor: '::',
					_0: A3(
						_rtfeldman$elm_css$Css_Structure$StyleBlock,
						newFirst,
						newRest,
						{ctor: '[]'}),
					_1: {ctor: '[]'}
				}
			};
		}
	});
var _rtfeldman$elm_css$Css_Structure$MediaQuery = function (a) {
	return {ctor: 'MediaQuery', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$Selector = F3(
	function (a, b, c) {
		return {ctor: 'Selector', _0: a, _1: b, _2: c};
	});
var _rtfeldman$elm_css$Css_Structure$applyPseudoElement = F2(
	function (pseudo, _p27) {
		var _p28 = _p27;
		return A3(
			_rtfeldman$elm_css$Css_Structure$Selector,
			_p28._0,
			_p28._1,
			_elm_lang$core$Maybe$Just(pseudo));
	});
var _rtfeldman$elm_css$Css_Structure$appendPseudoElementToLastSelector = F2(
	function (pseudo, styleBlock) {
		return A2(
			_rtfeldman$elm_css$Css_Structure$appendToLastSelector,
			_rtfeldman$elm_css$Css_Structure$applyPseudoElement(pseudo),
			styleBlock);
	});
var _rtfeldman$elm_css$Css_Structure$CustomSelector = F2(
	function (a, b) {
		return {ctor: 'CustomSelector', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence = function (a) {
	return {ctor: 'UniversalSelectorSequence', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$TypeSelectorSequence = F2(
	function (a, b) {
		return {ctor: 'TypeSelectorSequence', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$appendRepeatable = F2(
	function (selector, sequence) {
		var _p29 = sequence;
		switch (_p29.ctor) {
			case 'TypeSelectorSequence':
				return A2(
					_rtfeldman$elm_css$Css_Structure$TypeSelectorSequence,
					_p29._0,
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p29._1,
						{
							ctor: '::',
							_0: selector,
							_1: {ctor: '[]'}
						}));
			case 'UniversalSelectorSequence':
				return _rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence(
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p29._0,
						{
							ctor: '::',
							_0: selector,
							_1: {ctor: '[]'}
						}));
			default:
				return A2(
					_rtfeldman$elm_css$Css_Structure$CustomSelector,
					_p29._0,
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p29._1,
						{
							ctor: '::',
							_0: selector,
							_1: {ctor: '[]'}
						}));
		}
	});
var _rtfeldman$elm_css$Css_Structure$appendRepeatableWithCombinator = F2(
	function (selector, list) {
		var _p30 = list;
		if (_p30.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if ((_p30._0.ctor === '_Tuple2') && (_p30._1.ctor === '[]')) {
				return {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: _p30._0._0,
						_1: A2(_rtfeldman$elm_css$Css_Structure$appendRepeatable, selector, _p30._0._1)
					},
					_1: {ctor: '[]'}
				};
			} else {
				return {
					ctor: '::',
					_0: _p30._0,
					_1: A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableWithCombinator, selector, _p30._1)
				};
			}
		}
	});
var _rtfeldman$elm_css$Css_Structure$appendRepeatableSelector = F2(
	function (repeatableSimpleSelector, selector) {
		var _p31 = selector;
		if (_p31._1.ctor === '[]') {
			return A3(
				_rtfeldman$elm_css$Css_Structure$Selector,
				A2(_rtfeldman$elm_css$Css_Structure$appendRepeatable, repeatableSimpleSelector, _p31._0),
				{ctor: '[]'},
				_p31._2);
		} else {
			return A3(
				_rtfeldman$elm_css$Css_Structure$Selector,
				_p31._0,
				A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableWithCombinator, repeatableSimpleSelector, _p31._1),
				_p31._2);
		}
	});
var _rtfeldman$elm_css$Css_Structure$extendLastSelector = F2(
	function (selector, declarations) {
		var _p32 = declarations;
		_v24_15:
		do {
			if (_p32.ctor === '[]') {
				return declarations;
			} else {
				if (_p32._1.ctor === '[]') {
					switch (_p32._0.ctor) {
						case 'StyleBlockDeclaration':
							if (_p32._0._0._1.ctor === '[]') {
								return {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
										A3(
											_rtfeldman$elm_css$Css_Structure$StyleBlock,
											A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector, selector, _p32._0._0._0),
											{ctor: '[]'},
											_p32._0._0._2)),
									_1: {ctor: '[]'}
								};
							} else {
								var newRest = A2(
									_rtfeldman$elm_css$Css_Structure$mapLast,
									_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector(selector),
									_p32._0._0._1);
								return {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
										A3(_rtfeldman$elm_css$Css_Structure$StyleBlock, _p32._0._0._0, newRest, _p32._0._0._2)),
									_1: {ctor: '[]'}
								};
							}
						case 'MediaRule':
							if (_p32._0._1.ctor === '::') {
								if (_p32._0._1._1.ctor === '[]') {
									if (_p32._0._1._0._1.ctor === '[]') {
										var newStyleBlock = A3(
											_rtfeldman$elm_css$Css_Structure$StyleBlock,
											A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector, selector, _p32._0._1._0._0),
											{ctor: '[]'},
											_p32._0._1._0._2);
										return {
											ctor: '::',
											_0: A2(
												_rtfeldman$elm_css$Css_Structure$MediaRule,
												_p32._0._0,
												{
													ctor: '::',
													_0: newStyleBlock,
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										};
									} else {
										var newRest = A2(
											_rtfeldman$elm_css$Css_Structure$mapLast,
											_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector(selector),
											_p32._0._1._0._1);
										var newStyleBlock = A3(_rtfeldman$elm_css$Css_Structure$StyleBlock, _p32._0._1._0._0, newRest, _p32._0._1._0._2);
										return {
											ctor: '::',
											_0: A2(
												_rtfeldman$elm_css$Css_Structure$MediaRule,
												_p32._0._0,
												{
													ctor: '::',
													_0: newStyleBlock,
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										};
									}
								} else {
									var _p33 = A2(
										_rtfeldman$elm_css$Css_Structure$extendLastSelector,
										selector,
										{
											ctor: '::',
											_0: A2(_rtfeldman$elm_css$Css_Structure$MediaRule, _p32._0._0, _p32._0._1._1),
											_1: {ctor: '[]'}
										});
									if (((_p33.ctor === '::') && (_p33._0.ctor === 'MediaRule')) && (_p33._1.ctor === '[]')) {
										return {
											ctor: '::',
											_0: A2(
												_rtfeldman$elm_css$Css_Structure$MediaRule,
												_p33._0._0,
												{ctor: '::', _0: _p32._0._1._0, _1: _p33._0._1}),
											_1: {ctor: '[]'}
										};
									} else {
										return _p33;
									}
								}
							} else {
								break _v24_15;
							}
						case 'SupportsRule':
							return {
								ctor: '::',
								_0: A2(
									_rtfeldman$elm_css$Css_Structure$SupportsRule,
									_p32._0._0,
									A2(_rtfeldman$elm_css$Css_Structure$extendLastSelector, selector, _p32._0._1)),
								_1: {ctor: '[]'}
							};
						case 'DocumentRule':
							if (_p32._0._4._1.ctor === '[]') {
								var newStyleBlock = A3(
									_rtfeldman$elm_css$Css_Structure$StyleBlock,
									A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector, selector, _p32._0._4._0),
									{ctor: '[]'},
									_p32._0._4._2);
								return {
									ctor: '::',
									_0: A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p32._0._0, _p32._0._1, _p32._0._2, _p32._0._3, newStyleBlock),
									_1: {ctor: '[]'}
								};
							} else {
								var newRest = A2(
									_rtfeldman$elm_css$Css_Structure$mapLast,
									_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector(selector),
									_p32._0._4._1);
								var newStyleBlock = A3(_rtfeldman$elm_css$Css_Structure$StyleBlock, _p32._0._4._0, newRest, _p32._0._4._2);
								return {
									ctor: '::',
									_0: A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p32._0._0, _p32._0._1, _p32._0._2, _p32._0._3, newStyleBlock),
									_1: {ctor: '[]'}
								};
							}
						case 'PageRule':
							return declarations;
						case 'FontFace':
							return declarations;
						case 'Keyframes':
							return declarations;
						case 'Viewport':
							return declarations;
						case 'CounterStyle':
							return declarations;
						default:
							return declarations;
					}
				} else {
					break _v24_15;
				}
			}
		} while(false);
		return {
			ctor: '::',
			_0: _p32._0,
			_1: A2(_rtfeldman$elm_css$Css_Structure$extendLastSelector, selector, _p32._1)
		};
	});
var _rtfeldman$elm_css$Css_Structure$appendRepeatableToLastSelector = F2(
	function (selector, styleBlock) {
		return A2(
			_rtfeldman$elm_css$Css_Structure$appendToLastSelector,
			_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector(selector),
			styleBlock);
	});
var _rtfeldman$elm_css$Css_Structure$PseudoClassSelector = function (a) {
	return {ctor: 'PseudoClassSelector', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$IdSelector = function (a) {
	return {ctor: 'IdSelector', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$ClassSelector = function (a) {
	return {ctor: 'ClassSelector', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$TypeSelector = function (a) {
	return {ctor: 'TypeSelector', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$PseudoElement = function (a) {
	return {ctor: 'PseudoElement', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$Descendant = {ctor: 'Descendant'};
var _rtfeldman$elm_css$Css_Structure$Child = {ctor: 'Child'};
var _rtfeldman$elm_css$Css_Structure$GeneralSibling = {ctor: 'GeneralSibling'};
var _rtfeldman$elm_css$Css_Structure$AdjacentSibling = {ctor: 'AdjacentSibling'};

var _rtfeldman$elm_css$Css_Preprocess$propertyToPair = function (property) {
	var value = property.important ? A2(_elm_lang$core$Basics_ops['++'], property.value, ' !important') : property.value;
	return {ctor: '_Tuple2', _0: property.key, _1: value};
};
var _rtfeldman$elm_css$Css_Preprocess$toPropertyPairs = function (mixins) {
	toPropertyPairs:
	while (true) {
		var _p0 = mixins;
		if (_p0.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			switch (_p0._0.ctor) {
				case 'AppendProperty':
					return {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css_Preprocess$propertyToPair(_p0._0._0),
						_1: _rtfeldman$elm_css$Css_Preprocess$toPropertyPairs(_p0._1)
					};
				case 'ApplyMixins':
					return A2(
						_elm_lang$core$Basics_ops['++'],
						_rtfeldman$elm_css$Css_Preprocess$toPropertyPairs(_p0._0._0),
						_rtfeldman$elm_css$Css_Preprocess$toPropertyPairs(_p0._1));
				default:
					var _v1 = _p0._1;
					mixins = _v1;
					continue toPropertyPairs;
			}
		}
	}
};
var _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet = function (_p1) {
	var _p2 = _p1;
	return _p2._0;
};
var _rtfeldman$elm_css$Css_Preprocess$toMediaRule = F2(
	function (mediaQueries, declaration) {
		var _p3 = declaration;
		switch (_p3.ctor) {
			case 'StyleBlockDeclaration':
				return A2(
					_rtfeldman$elm_css$Css_Structure$MediaRule,
					mediaQueries,
					{
						ctor: '::',
						_0: _p3._0,
						_1: {ctor: '[]'}
					});
			case 'MediaRule':
				return A2(
					_rtfeldman$elm_css$Css_Structure$MediaRule,
					A2(_elm_lang$core$Basics_ops['++'], mediaQueries, _p3._0),
					_p3._1);
			case 'SupportsRule':
				return A2(
					_rtfeldman$elm_css$Css_Structure$SupportsRule,
					_p3._0,
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Preprocess$toMediaRule(mediaQueries),
						_p3._1));
			case 'DocumentRule':
				return A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p3._0, _p3._1, _p3._2, _p3._3, _p3._4);
			case 'PageRule':
				return declaration;
			case 'FontFace':
				return declaration;
			case 'Keyframes':
				return declaration;
			case 'Viewport':
				return declaration;
			case 'CounterStyle':
				return declaration;
			default:
				return declaration;
		}
	});
var _rtfeldman$elm_css$Css_Preprocess$stylesheet = function (snippets) {
	return {
		charset: _elm_lang$core$Maybe$Nothing,
		imports: {ctor: '[]'},
		namespaces: {ctor: '[]'},
		snippets: snippets
	};
};
var _rtfeldman$elm_css$Css_Preprocess$Property = F4(
	function (a, b, c, d) {
		return {key: a, value: b, important: c, warnings: d};
	});
var _rtfeldman$elm_css$Css_Preprocess$Stylesheet = F4(
	function (a, b, c, d) {
		return {charset: a, imports: b, namespaces: c, snippets: d};
	});
var _rtfeldman$elm_css$Css_Preprocess$ApplyMixins = function (a) {
	return {ctor: 'ApplyMixins', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$WithMedia = F2(
	function (a, b) {
		return {ctor: 'WithMedia', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$WithPseudoElement = F2(
	function (a, b) {
		return {ctor: 'WithPseudoElement', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$NestSnippet = F2(
	function (a, b) {
		return {ctor: 'NestSnippet', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$ExtendSelector = F2(
	function (a, b) {
		return {ctor: 'ExtendSelector', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$AppendProperty = function (a) {
	return {ctor: 'AppendProperty', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$mapLastProperty = F2(
	function (update, mixin) {
		var _p4 = mixin;
		switch (_p4.ctor) {
			case 'AppendProperty':
				return _rtfeldman$elm_css$Css_Preprocess$AppendProperty(
					update(_p4._0));
			case 'ExtendSelector':
				return A2(
					_rtfeldman$elm_css$Css_Preprocess$ExtendSelector,
					_p4._0,
					A2(_rtfeldman$elm_css$Css_Preprocess$mapAllLastProperty, update, _p4._1));
			case 'NestSnippet':
				return mixin;
			case 'WithPseudoElement':
				return mixin;
			case 'WithMedia':
				return mixin;
			default:
				return _rtfeldman$elm_css$Css_Preprocess$ApplyMixins(
					A2(
						_rtfeldman$elm_css$Css_Structure$mapLast,
						_rtfeldman$elm_css$Css_Preprocess$mapLastProperty(update),
						_p4._0));
		}
	});
var _rtfeldman$elm_css$Css_Preprocess$mapAllLastProperty = F2(
	function (update, mixins) {
		var _p5 = mixins;
		if (_p5.ctor === '[]') {
			return mixins;
		} else {
			if (_p5._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: A2(_rtfeldman$elm_css$Css_Preprocess$mapLastProperty, update, _p5._0),
					_1: {ctor: '[]'}
				};
			} else {
				return {
					ctor: '::',
					_0: _p5._0,
					_1: A2(_rtfeldman$elm_css$Css_Preprocess$mapAllLastProperty, update, _p5._1)
				};
			}
		}
	});
var _rtfeldman$elm_css$Css_Preprocess$Snippet = function (a) {
	return {ctor: 'Snippet', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$FontFeatureValues = function (a) {
	return {ctor: 'FontFeatureValues', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$CounterStyle = function (a) {
	return {ctor: 'CounterStyle', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$Viewport = function (a) {
	return {ctor: 'Viewport', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$Keyframes = F2(
	function (a, b) {
		return {ctor: 'Keyframes', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$FontFace = function (a) {
	return {ctor: 'FontFace', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$PageRule = F2(
	function (a, b) {
		return {ctor: 'PageRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$DocumentRule = F5(
	function (a, b, c, d, e) {
		return {ctor: 'DocumentRule', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _rtfeldman$elm_css$Css_Preprocess$SupportsRule = F2(
	function (a, b) {
		return {ctor: 'SupportsRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$MediaRule = F2(
	function (a, b) {
		return {ctor: 'MediaRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$StyleBlockDeclaration = function (a) {
	return {ctor: 'StyleBlockDeclaration', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$StyleBlock = F3(
	function (a, b, c) {
		return {ctor: 'StyleBlock', _0: a, _1: b, _2: c};
	});

var _rtfeldman$elm_css$Css_Structure_Output$indent = function (str) {
	return A2(_elm_lang$core$Basics_ops['++'], '    ', str);
};
var _rtfeldman$elm_css$Css_Structure_Output$prettyPrintProperty = function (_p0) {
	var _p1 = _p0;
	var suffix = _p1.important ? ' !important;' : ';';
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_p1.key,
		A2(
			_elm_lang$core$Basics_ops['++'],
			': ',
			A2(_elm_lang$core$Basics_ops['++'], _p1.value, suffix)));
};
var _rtfeldman$elm_css$Css_Structure_Output$prettyPrintProperties = function (properties) {
	return A2(
		_elm_lang$core$String$join,
		'\n',
		A2(
			_elm_lang$core$List$map,
			function (_p2) {
				return _rtfeldman$elm_css$Css_Structure_Output$indent(
					_rtfeldman$elm_css$Css_Structure_Output$prettyPrintProperty(_p2));
			},
			properties));
};
var _rtfeldman$elm_css$Css_Structure_Output$combinatorToString = function (combinator) {
	var _p3 = combinator;
	switch (_p3.ctor) {
		case 'AdjacentSibling':
			return '+';
		case 'GeneralSibling':
			return '~';
		case 'Child':
			return '>';
		default:
			return '';
	}
};
var _rtfeldman$elm_css$Css_Structure_Output$pseudoElementToString = function (_p4) {
	var _p5 = _p4;
	return A2(_elm_lang$core$Basics_ops['++'], '::', _p5._0);
};
var _rtfeldman$elm_css$Css_Structure_Output$repeatableSimpleSelectorToString = function (repeatableSimpleSelector) {
	var _p6 = repeatableSimpleSelector;
	switch (_p6.ctor) {
		case 'ClassSelector':
			return A2(_elm_lang$core$Basics_ops['++'], '.', _p6._0);
		case 'IdSelector':
			return A2(_elm_lang$core$Basics_ops['++'], '#', _p6._0);
		default:
			return A2(_elm_lang$core$Basics_ops['++'], ':', _p6._0);
	}
};
var _rtfeldman$elm_css$Css_Structure_Output$simpleSelectorSequenceToString = function (simpleSelectorSequence) {
	var _p7 = simpleSelectorSequence;
	switch (_p7.ctor) {
		case 'TypeSelectorSequence':
			return A2(
				_elm_lang$core$String$join,
				'',
				{
					ctor: '::',
					_0: _p7._0._0,
					_1: A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$repeatableSimpleSelectorToString, _p7._1)
				});
		case 'UniversalSelectorSequence':
			var _p8 = _p7._0;
			return _elm_lang$core$List$isEmpty(_p8) ? '*' : A2(
				_elm_lang$core$String$join,
				'',
				A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$repeatableSimpleSelectorToString, _p8));
		default:
			return A2(
				_elm_lang$core$String$join,
				'',
				{
					ctor: '::',
					_0: _p7._0,
					_1: A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$repeatableSimpleSelectorToString, _p7._1)
				});
	}
};
var _rtfeldman$elm_css$Css_Structure_Output$selectorChainToString = function (_p9) {
	var _p10 = _p9;
	return A2(
		_elm_lang$core$String$join,
		' ',
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Css_Structure_Output$combinatorToString(_p10._0),
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Css_Structure_Output$simpleSelectorSequenceToString(_p10._1),
				_1: {ctor: '[]'}
			}
		});
};
var _rtfeldman$elm_css$Css_Structure_Output$selectorToString = function (_p11) {
	var _p12 = _p11;
	var pseudoElementsString = A2(
		_elm_lang$core$String$join,
		'',
		{
			ctor: '::',
			_0: A2(
				_elm_lang$core$Maybe$withDefault,
				'',
				A2(_elm_lang$core$Maybe$map, _rtfeldman$elm_css$Css_Structure_Output$pseudoElementToString, _p12._2)),
			_1: {ctor: '[]'}
		});
	var segments = A2(
		_elm_lang$core$Basics_ops['++'],
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Css_Structure_Output$simpleSelectorSequenceToString(_p12._0),
			_1: {ctor: '[]'}
		},
		A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$selectorChainToString, _p12._1));
	return A3(
		_elm_lang$core$Basics$flip,
		F2(
			function (x, y) {
				return A2(_elm_lang$core$Basics_ops['++'], x, y);
			}),
		pseudoElementsString,
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$filter,
				function (_p13) {
					return !_elm_lang$core$String$isEmpty(_p13);
				},
				segments)));
};
var _rtfeldman$elm_css$Css_Structure_Output$prettyPrintStyleBlock = function (_p14) {
	var _p15 = _p14;
	var selectorStr = A2(
		_elm_lang$core$String$join,
		', ',
		A2(
			_elm_lang$core$List$map,
			_rtfeldman$elm_css$Css_Structure_Output$selectorToString,
			{ctor: '::', _0: _p15._0, _1: _p15._1}));
	return A2(
		_elm_lang$core$Basics_ops['++'],
		selectorStr,
		A2(
			_elm_lang$core$Basics_ops['++'],
			' {\n',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_rtfeldman$elm_css$Css_Structure_Output$prettyPrintProperties(_p15._2),
				'\n}')));
};
var _rtfeldman$elm_css$Css_Structure_Output$prettyPrintDeclaration = function (declaration) {
	var _p16 = declaration;
	switch (_p16.ctor) {
		case 'StyleBlockDeclaration':
			return _rtfeldman$elm_css$Css_Structure_Output$prettyPrintStyleBlock(_p16._0);
		case 'MediaRule':
			var query = A2(
				_elm_lang$core$String$join,
				' ',
				A2(
					_elm_lang$core$List$map,
					function (_p17) {
						var _p18 = _p17;
						return _p18._0;
					},
					_p16._0));
			var blocks = A2(
				_elm_lang$core$String$join,
				'\n\n',
				A2(
					_elm_lang$core$List$map,
					function (_p19) {
						return _rtfeldman$elm_css$Css_Structure_Output$indent(
							_rtfeldman$elm_css$Css_Structure_Output$prettyPrintStyleBlock(_p19));
					},
					_p16._1));
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'@media ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					query,
					A2(
						_elm_lang$core$Basics_ops['++'],
						' {\n',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_rtfeldman$elm_css$Css_Structure_Output$indent(blocks),
							'\n}'))));
		default:
			return _elm_lang$core$Native_Utils.crashCase(
				'Css.Structure.Output',
				{
					start: {line: 56, column: 5},
					end: {line: 73, column: 49}
				},
				_p16)('not yet implemented :x');
	}
};
var _rtfeldman$elm_css$Css_Structure_Output$namespaceToString = function (_p21) {
	var _p22 = _p21;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'@namespace ',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_p22._0,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'\"',
				A2(_elm_lang$core$Basics_ops['++'], _p22._1, '\"'))));
};
var _rtfeldman$elm_css$Css_Structure_Output$importToString = function (_p23) {
	var _p24 = _p23;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'@import \"',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_p24._0,
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p24._1),
				'\"')));
};
var _rtfeldman$elm_css$Css_Structure_Output$charsetToString = function (charset) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		A2(
			_elm_lang$core$Maybe$map,
			function (str) {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'@charset \"',
					A2(_elm_lang$core$Basics_ops['++'], str, '\"'));
			},
			charset));
};
var _rtfeldman$elm_css$Css_Structure_Output$prettyPrint = function (_p25) {
	var _p26 = _p25;
	return A2(
		_elm_lang$core$String$join,
		'\n\n',
		A2(
			_elm_lang$core$List$filter,
			function (_p27) {
				return !_elm_lang$core$String$isEmpty(_p27);
			},
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css_Structure_Output$charsetToString(_p26.charset),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$core$String$join,
						'\n',
						A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$importToString, _p26.imports)),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$core$String$join,
							'\n',
							A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$namespaceToString, _p26.namespaces)),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$core$String$join,
								'\n\n',
								A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$prettyPrintDeclaration, _p26.declarations)),
							_1: {ctor: '[]'}
						}
					}
				}
			}));
};

var _rtfeldman$elm_css$Css_Preprocess_Resolve$oneOf = function (maybes) {
	oneOf:
	while (true) {
		var _p0 = maybes;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var _p2 = _p0._0;
			var _p1 = _p2;
			if (_p1.ctor === 'Nothing') {
				var _v2 = _p0._1;
				maybes = _v2;
				continue oneOf;
			} else {
				return _p2;
			}
		}
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$collectSelectors = function (declarations) {
	collectSelectors:
	while (true) {
		var _p3 = declarations;
		if (_p3.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p3._0.ctor === 'StyleBlockDeclaration') {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					{ctor: '::', _0: _p3._0._0._0, _1: _p3._0._0._1},
					_rtfeldman$elm_css$Css_Preprocess_Resolve$collectSelectors(_p3._1));
			} else {
				var _v4 = _p3._1;
				declarations = _v4;
				continue collectSelectors;
			}
		}
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarning = function (_p4) {
	var _p5 = _p4;
	return {
		ctor: '_Tuple2',
		_0: _p5.warnings,
		_1: {key: _p5.key, value: _p5.value, important: _p5.important}
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings = function (properties) {
	return {
		ctor: '_Tuple2',
		_0: A2(
			_elm_lang$core$List$concatMap,
			function (_) {
				return _.warnings;
			},
			properties),
		_1: A2(
			_elm_lang$core$List$map,
			function (prop) {
				return _elm_lang$core$Tuple$second(
					_rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarning(prop));
			},
			properties)
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$toDocumentRule = F5(
	function (str1, str2, str3, str4, declaration) {
		var _p6 = declaration;
		if (_p6.ctor === 'StyleBlockDeclaration') {
			return A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, str1, str2, str3, str4, _p6._0);
		} else {
			return declaration;
		}
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$lastDeclaration = function (declarations) {
	lastDeclaration:
	while (true) {
		var _p7 = declarations;
		if (_p7.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			if (_p7._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(
					{
						ctor: '::',
						_0: _p7._0,
						_1: {ctor: '[]'}
					});
			} else {
				var _v8 = _p7._1;
				declarations = _v8;
				continue lastDeclaration;
			}
		}
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings = function (declarationsAndWarnings) {
	var _p8 = declarationsAndWarnings;
	if (_p8.ctor === '[]') {
		return {
			declarations: {ctor: '[]'},
			warnings: {ctor: '[]'}
		};
	} else {
		var result = _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(_p8._1);
		return {
			declarations: A2(_elm_lang$core$Basics_ops['++'], _p8._0.declarations, result.declarations),
			warnings: A2(_elm_lang$core$Basics_ops['++'], _p8._0.warnings, result.warnings)
		};
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFeatureValues = function (tuples) {
	var expandTuples = function (tuplesToExpand) {
		var _p9 = tuplesToExpand;
		if (_p9.ctor === '[]') {
			return {
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			};
		} else {
			var _p10 = expandTuples(_p9._1);
			var nextWarnings = _p10._0;
			var nextTuples = _p10._1;
			var _p11 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(_p9._0._1);
			var warnings = _p11._0;
			var properties = _p11._1;
			return {
				ctor: '_Tuple2',
				_0: A2(_elm_lang$core$Basics_ops['++'], warnings, nextWarnings),
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: _p9._0._0, _1: properties},
					_1: nextTuples
				}
			};
		}
	};
	var _p12 = expandTuples(tuples);
	var warnings = _p12._0;
	var newTuples = _p12._1;
	return {
		declarations: {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css_Structure$FontFeatureValues(newTuples),
			_1: {ctor: '[]'}
		},
		warnings: warnings
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveCounterStyle = function (counterStyleProperties) {
	var _p13 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(counterStyleProperties);
	var warnings = _p13._0;
	var properties = _p13._1;
	return {
		declarations: {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css_Structure$Viewport(properties),
			_1: {ctor: '[]'}
		},
		warnings: warnings
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveViewport = function (viewportProperties) {
	var _p14 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(viewportProperties);
	var warnings = _p14._0;
	var properties = _p14._1;
	return {
		declarations: {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css_Structure$Viewport(properties),
			_1: {ctor: '[]'}
		},
		warnings: warnings
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveKeyframes = F2(
	function (str, properties) {
		return {
			declarations: {
				ctor: '::',
				_0: A2(_rtfeldman$elm_css$Css_Structure$Keyframes, str, properties),
				_1: {ctor: '[]'}
			},
			warnings: {ctor: '[]'}
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFace = function (fontFaceProperties) {
	var _p15 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(fontFaceProperties);
	var warnings = _p15._0;
	var properties = _p15._1;
	return {
		declarations: {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css_Structure$FontFace(properties),
			_1: {ctor: '[]'}
		},
		warnings: warnings
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolvePageRule = F2(
	function (str, pageRuleProperties) {
		var _p16 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(pageRuleProperties);
		var warnings = _p16._0;
		var properties = _p16._1;
		return {
			declarations: {
				ctor: '::',
				_0: A2(_rtfeldman$elm_css$Css_Structure$PageRule, str, properties),
				_1: {ctor: '[]'}
			},
			warnings: warnings
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$toMediaRule = F2(
	function (mediaQueries, declaration) {
		var _p17 = declaration;
		switch (_p17.ctor) {
			case 'StyleBlockDeclaration':
				return A2(
					_rtfeldman$elm_css$Css_Structure$MediaRule,
					mediaQueries,
					{
						ctor: '::',
						_0: _p17._0,
						_1: {ctor: '[]'}
					});
			case 'MediaRule':
				return A2(
					_rtfeldman$elm_css$Css_Structure$MediaRule,
					A2(_elm_lang$core$Basics_ops['++'], mediaQueries, _p17._0),
					_p17._1);
			case 'SupportsRule':
				return A2(
					_rtfeldman$elm_css$Css_Structure$SupportsRule,
					_p17._0,
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Preprocess_Resolve$toMediaRule(mediaQueries),
						_p17._1));
			case 'DocumentRule':
				return A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p17._0, _p17._1, _p17._2, _p17._3, _p17._4);
			case 'PageRule':
				return declaration;
			case 'FontFace':
				return declaration;
			case 'Keyframes':
				return declaration;
			case 'Viewport':
				return declaration;
			case 'CounterStyle':
				return declaration;
			default:
				return declaration;
		}
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveMediaRule = F2(
	function (mediaQueries, styleBlocks) {
		var handleStyleBlock = function (styleBlock) {
			var _p18 = _rtfeldman$elm_css$Css_Preprocess_Resolve$expandStyleBlock(styleBlock);
			var declarations = _p18.declarations;
			var warnings = _p18.warnings;
			return {
				declarations: A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css_Preprocess_Resolve$toMediaRule(mediaQueries),
					declarations),
				warnings: warnings
			};
		};
		var results = A2(_elm_lang$core$List$map, handleStyleBlock, styleBlocks);
		return {
			warnings: A2(
				_elm_lang$core$List$concatMap,
				function (_) {
					return _.warnings;
				},
				results),
			declarations: A2(
				_elm_lang$core$List$concatMap,
				function (_) {
					return _.declarations;
				},
				results)
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$expandStyleBlock = function (_p19) {
	var _p20 = _p19;
	return A2(
		_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins,
		_p20._2,
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
				A3(
					_rtfeldman$elm_css$Css_Structure$StyleBlock,
					_p20._0,
					_p20._1,
					{ctor: '[]'})),
			_1: {ctor: '[]'}
		});
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins = F2(
	function (mixins, declarations) {
		applyMixins:
		while (true) {
			var _p21 = mixins;
			if (_p21.ctor === '[]') {
				return {
					declarations: declarations,
					warnings: {ctor: '[]'}
				};
			} else {
				switch (_p21._0.ctor) {
					case 'AppendProperty':
						var _p22 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarning(_p21._0._0);
						var warnings = _p22._0;
						var property = _p22._1;
						var result = A2(
							_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins,
							_p21._1,
							A2(_rtfeldman$elm_css$Css_Structure$appendProperty, property, declarations));
						return {
							declarations: result.declarations,
							warnings: A2(_elm_lang$core$Basics_ops['++'], warnings, result.warnings)
						};
					case 'ExtendSelector':
						return A4(
							_rtfeldman$elm_css$Css_Preprocess_Resolve$applyNestedMixinsToLast,
							_p21._0._1,
							_p21._1,
							_rtfeldman$elm_css$Css_Structure$appendRepeatableToLastSelector(_p21._0._0),
							declarations);
					case 'NestSnippet':
						var chain = F2(
							function (_p24, _p23) {
								var _p25 = _p24;
								var _p26 = _p23;
								return A3(
									_rtfeldman$elm_css$Css_Structure$Selector,
									_p25._0,
									A2(
										_elm_lang$core$Basics_ops['++'],
										_p25._1,
										{
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: _p21._0._0, _1: _p26._0},
											_1: _p26._1
										}),
									_rtfeldman$elm_css$Css_Preprocess_Resolve$oneOf(
										{
											ctor: '::',
											_0: _p26._2,
											_1: {
												ctor: '::',
												_0: _p25._2,
												_1: {ctor: '[]'}
											}
										}));
							});
						var expandDeclaration = function (declaration) {
							var _p27 = declaration;
							switch (_p27.ctor) {
								case 'StyleBlockDeclaration':
									var newSelectors = A2(
										_elm_lang$core$List$concatMap,
										function (originalSelector) {
											return A2(
												_elm_lang$core$List$map,
												chain(originalSelector),
												{ctor: '::', _0: _p27._0._0, _1: _p27._0._1});
										},
										_rtfeldman$elm_css$Css_Preprocess_Resolve$collectSelectors(declarations));
									var newDeclarations = function () {
										var _p28 = newSelectors;
										if (_p28.ctor === '[]') {
											return {ctor: '[]'};
										} else {
											return {
												ctor: '::',
												_0: _rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
													A3(
														_rtfeldman$elm_css$Css_Structure$StyleBlock,
														_p28._0,
														_p28._1,
														{ctor: '[]'})),
												_1: {ctor: '[]'}
											};
										}
									}();
									return _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
										{
											ctor: '::',
											_0: A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins, _p27._0._2, newDeclarations),
											_1: {ctor: '[]'}
										});
								case 'MediaRule':
									return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveMediaRule, _p27._0, _p27._1);
								case 'SupportsRule':
									return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveSupportsRule, _p27._0, _p27._1);
								case 'DocumentRule':
									return A5(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveDocumentRule, _p27._0, _p27._1, _p27._2, _p27._3, _p27._4);
								case 'PageRule':
									return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolvePageRule, _p27._0, _p27._1);
								case 'FontFace':
									return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFace(_p27._0);
								case 'Keyframes':
									return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveKeyframes, _p27._0, _p27._1);
								case 'Viewport':
									return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveViewport(_p27._0);
								case 'CounterStyle':
									return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveCounterStyle(_p27._0);
								default:
									return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFeatureValues(_p27._0);
							}
						};
						return _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
							A2(
								F2(
									function (x, y) {
										return A2(_elm_lang$core$Basics_ops['++'], x, y);
									}),
								{
									ctor: '::',
									_0: A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins, _p21._1, declarations),
									_1: {ctor: '[]'}
								},
								A2(
									_elm_lang$core$List$map,
									expandDeclaration,
									A2(_elm_lang$core$List$concatMap, _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet, _p21._0._1))));
					case 'WithPseudoElement':
						return A4(
							_rtfeldman$elm_css$Css_Preprocess_Resolve$applyNestedMixinsToLast,
							_p21._0._1,
							_p21._1,
							_rtfeldman$elm_css$Css_Structure$appendPseudoElementToLastSelector(_p21._0._0),
							declarations);
					case 'WithMedia':
						var newDeclarations = function () {
							var _p29 = _rtfeldman$elm_css$Css_Preprocess_Resolve$collectSelectors(declarations);
							if (_p29.ctor === '[]') {
								return {ctor: '[]'};
							} else {
								return {
									ctor: '::',
									_0: A2(
										_rtfeldman$elm_css$Css_Structure$MediaRule,
										_p21._0._0,
										{
											ctor: '::',
											_0: A3(
												_rtfeldman$elm_css$Css_Structure$StyleBlock,
												_p29._0,
												_p29._1,
												{ctor: '[]'}),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								};
							}
						}();
						return _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
							{
								ctor: '::',
								_0: A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins, _p21._1, declarations),
								_1: {
									ctor: '::',
									_0: A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins, _p21._0._1, newDeclarations),
									_1: {ctor: '[]'}
								}
							});
					default:
						var _v19 = A2(_elm_lang$core$Basics_ops['++'], _p21._0._0, _p21._1),
							_v20 = declarations;
						mixins = _v19;
						declarations = _v20;
						continue applyMixins;
				}
			}
		}
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$applyNestedMixinsToLast = F4(
	function (nestedMixins, rest, f, declarations) {
		var withoutParent = function (decls) {
			return A2(
				_elm_lang$core$Maybe$withDefault,
				{ctor: '[]'},
				_elm_lang$core$List$tail(decls));
		};
		var nextResult = A2(
			_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins,
			rest,
			A2(
				_elm_lang$core$Maybe$withDefault,
				{ctor: '[]'},
				_rtfeldman$elm_css$Css_Preprocess_Resolve$lastDeclaration(declarations)));
		var newDeclarations = function () {
			var _p30 = {
				ctor: '_Tuple2',
				_0: _elm_lang$core$List$head(nextResult.declarations),
				_1: _elm_lang$core$List$head(
					_elm_lang$core$List$reverse(declarations))
			};
			if (((_p30.ctor === '_Tuple2') && (_p30._0.ctor === 'Just')) && (_p30._1.ctor === 'Just')) {
				var _p32 = _p30._1._0;
				var _p31 = _p30._0._0;
				return A2(
					_elm_lang$core$Basics_ops['++'],
					A2(
						_elm_lang$core$List$take,
						_elm_lang$core$List$length(declarations) - 1,
						declarations),
					{
						ctor: '::',
						_0: (!_elm_lang$core$Native_Utils.eq(_p32, _p31)) ? _p31 : _p32,
						_1: {ctor: '[]'}
					});
			} else {
				return declarations;
			}
		}();
		var handleInitial = function (declarationsAndWarnings) {
			var result = A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins, nestedMixins, declarationsAndWarnings.declarations);
			return {
				warnings: A2(_elm_lang$core$Basics_ops['++'], declarationsAndWarnings.warnings, result.warnings),
				declarations: result.declarations
			};
		};
		var insertMixinsToNestedDecl = function (lastDecl) {
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
				A2(
					_rtfeldman$elm_css$Css_Structure$mapLast,
					handleInitial,
					A2(
						_elm_lang$core$List$map,
						function (declaration) {
							return {
								declarations: {
									ctor: '::',
									_0: declaration,
									_1: {ctor: '[]'}
								},
								warnings: {ctor: '[]'}
							};
						},
						A2(_rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock, f, lastDecl))));
		};
		var initialResult = A2(
			_elm_lang$core$Maybe$withDefault,
			{
				warnings: {ctor: '[]'},
				declarations: {ctor: '[]'}
			},
			A2(
				_elm_lang$core$Maybe$map,
				insertMixinsToNestedDecl,
				_rtfeldman$elm_css$Css_Preprocess_Resolve$lastDeclaration(declarations)));
		return {
			warnings: A2(_elm_lang$core$Basics_ops['++'], initialResult.warnings, nextResult.warnings),
			declarations: A2(
				_elm_lang$core$Basics_ops['++'],
				newDeclarations,
				A2(
					_elm_lang$core$Basics_ops['++'],
					withoutParent(initialResult.declarations),
					withoutParent(nextResult.declarations)))
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveDocumentRule = F5(
	function (str1, str2, str3, str4, styleBlock) {
		var _p33 = _rtfeldman$elm_css$Css_Preprocess_Resolve$expandStyleBlock(styleBlock);
		var declarations = _p33.declarations;
		var warnings = _p33.warnings;
		return {
			declarations: A2(
				_elm_lang$core$List$map,
				A4(_rtfeldman$elm_css$Css_Preprocess_Resolve$toDocumentRule, str1, str2, str3, str4),
				declarations),
			warnings: warnings
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveSupportsRule = F2(
	function (str, snippets) {
		var _p34 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extract(
			A2(_elm_lang$core$List$concatMap, _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet, snippets));
		var declarations = _p34.declarations;
		var warnings = _p34.warnings;
		return {
			declarations: {
				ctor: '::',
				_0: A2(_rtfeldman$elm_css$Css_Structure$SupportsRule, str, declarations),
				_1: {ctor: '[]'}
			},
			warnings: warnings
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$extract = function (snippetDeclarations) {
	var _p35 = snippetDeclarations;
	if (_p35.ctor === '[]') {
		return {
			declarations: {ctor: '[]'},
			warnings: {ctor: '[]'}
		};
	} else {
		var _p36 = _rtfeldman$elm_css$Css_Preprocess_Resolve$toDeclarations(_p35._0);
		var declarations = _p36.declarations;
		var warnings = _p36.warnings;
		var nextResult = _rtfeldman$elm_css$Css_Preprocess_Resolve$extract(_p35._1);
		return {
			declarations: A2(_elm_lang$core$Basics_ops['++'], declarations, nextResult.declarations),
			warnings: A2(_elm_lang$core$Basics_ops['++'], warnings, nextResult.warnings)
		};
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$toDeclarations = function (snippetDeclaration) {
	var _p37 = snippetDeclaration;
	switch (_p37.ctor) {
		case 'StyleBlockDeclaration':
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$expandStyleBlock(_p37._0);
		case 'MediaRule':
			return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveMediaRule, _p37._0, _p37._1);
		case 'SupportsRule':
			return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveSupportsRule, _p37._0, _p37._1);
		case 'DocumentRule':
			return A5(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveDocumentRule, _p37._0, _p37._1, _p37._2, _p37._3, _p37._4);
		case 'PageRule':
			return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolvePageRule, _p37._0, _p37._1);
		case 'FontFace':
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFace(_p37._0);
		case 'Keyframes':
			return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveKeyframes, _p37._0, _p37._1);
		case 'Viewport':
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveViewport(_p37._0);
		case 'CounterStyle':
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveCounterStyle(_p37._0);
		default:
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFeatureValues(_p37._0);
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$toStructure = function (_p38) {
	var _p39 = _p38;
	var _p40 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extract(
		A2(_elm_lang$core$List$concatMap, _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet, _p39.snippets));
	var warnings = _p40.warnings;
	var declarations = _p40.declarations;
	return {
		ctor: '_Tuple2',
		_0: {charset: _p39.charset, imports: _p39.imports, namespaces: _p39.namespaces, declarations: declarations},
		_1: warnings
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$compile1 = function (sheet) {
	var _p41 = _rtfeldman$elm_css$Css_Preprocess_Resolve$toStructure(sheet);
	var structureStylesheet = _p41._0;
	var warnings = _p41._1;
	return {
		warnings: warnings,
		css: _rtfeldman$elm_css$Css_Structure_Output$prettyPrint(
			_rtfeldman$elm_css$Css_Structure$dropEmpty(structureStylesheet))
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$compile = function (styles) {
	var results = A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Preprocess_Resolve$compile1, styles);
	return {
		warnings: A2(
			_elm_lang$core$List$concatMap,
			function (_) {
				return _.warnings;
			},
			results),
		css: A2(
			_elm_lang$core$String$join,
			'\n\n',
			A2(
				_elm_lang$core$List$map,
				function (_) {
					return _.css;
				},
				results))
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$DeclarationsAndWarnings = F2(
	function (a, b) {
		return {declarations: a, warnings: b};
	});

var _rtfeldman$hex$Hex$toString = function (num) {
	return _elm_lang$core$String$fromList(
		(_elm_lang$core$Native_Utils.cmp(num, 0) < 0) ? {
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.chr('-'),
			_1: A2(
				_rtfeldman$hex$Hex$unsafePositiveToDigits,
				{ctor: '[]'},
				_elm_lang$core$Basics$negate(num))
		} : A2(
			_rtfeldman$hex$Hex$unsafePositiveToDigits,
			{ctor: '[]'},
			num));
};
var _rtfeldman$hex$Hex$unsafePositiveToDigits = F2(
	function (digits, num) {
		unsafePositiveToDigits:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(num, 16) < 0) {
				return {
					ctor: '::',
					_0: _rtfeldman$hex$Hex$unsafeToDigit(num),
					_1: digits
				};
			} else {
				var _v0 = {
					ctor: '::',
					_0: _rtfeldman$hex$Hex$unsafeToDigit(
						A2(_elm_lang$core$Basics_ops['%'], num, 16)),
					_1: digits
				},
					_v1 = (num / 16) | 0;
				digits = _v0;
				num = _v1;
				continue unsafePositiveToDigits;
			}
		}
	});
var _rtfeldman$hex$Hex$unsafeToDigit = function (num) {
	var _p0 = num;
	switch (_p0) {
		case 0:
			return _elm_lang$core$Native_Utils.chr('0');
		case 1:
			return _elm_lang$core$Native_Utils.chr('1');
		case 2:
			return _elm_lang$core$Native_Utils.chr('2');
		case 3:
			return _elm_lang$core$Native_Utils.chr('3');
		case 4:
			return _elm_lang$core$Native_Utils.chr('4');
		case 5:
			return _elm_lang$core$Native_Utils.chr('5');
		case 6:
			return _elm_lang$core$Native_Utils.chr('6');
		case 7:
			return _elm_lang$core$Native_Utils.chr('7');
		case 8:
			return _elm_lang$core$Native_Utils.chr('8');
		case 9:
			return _elm_lang$core$Native_Utils.chr('9');
		case 10:
			return _elm_lang$core$Native_Utils.chr('a');
		case 11:
			return _elm_lang$core$Native_Utils.chr('b');
		case 12:
			return _elm_lang$core$Native_Utils.chr('c');
		case 13:
			return _elm_lang$core$Native_Utils.chr('d');
		case 14:
			return _elm_lang$core$Native_Utils.chr('e');
		case 15:
			return _elm_lang$core$Native_Utils.chr('f');
		default:
			return _elm_lang$core$Native_Utils.crashCase(
				'Hex',
				{
					start: {line: 138, column: 5},
					end: {line: 188, column: 84}
				},
				_p0)(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'Tried to convert ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_rtfeldman$hex$Hex$toString(num),
						' to hexadecimal.')));
	}
};
var _rtfeldman$hex$Hex$fromStringHelp = F3(
	function (position, chars, accumulated) {
		var _p2 = chars;
		if (_p2.ctor === '[]') {
			return _elm_lang$core$Result$Ok(accumulated);
		} else {
			var recurse = function (additional) {
				return A3(
					_rtfeldman$hex$Hex$fromStringHelp,
					position - 1,
					_p2._1,
					accumulated + (additional * Math.pow(16, position)));
			};
			var _p3 = _p2._0;
			switch (_p3.valueOf()) {
				case '0':
					return recurse(0);
				case '1':
					return recurse(1);
				case '2':
					return recurse(2);
				case '3':
					return recurse(3);
				case '4':
					return recurse(4);
				case '5':
					return recurse(5);
				case '6':
					return recurse(6);
				case '7':
					return recurse(7);
				case '8':
					return recurse(8);
				case '9':
					return recurse(9);
				case 'a':
					return recurse(10);
				case 'b':
					return recurse(11);
				case 'c':
					return recurse(12);
				case 'd':
					return recurse(13);
				case 'e':
					return recurse(14);
				case 'f':
					return recurse(15);
				default:
					return _elm_lang$core$Result$Err(
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p3),
							' is not a valid hexadecimal character.'));
			}
		}
	});
var _rtfeldman$hex$Hex$fromString = function (str) {
	if (_elm_lang$core$String$isEmpty(str)) {
		return _elm_lang$core$Result$Err('Empty strings are not valid hexadecimal strings.');
	} else {
		var formatError = function (err) {
			return A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: _elm_lang$core$Basics$toString(str),
					_1: {
						ctor: '::',
						_0: 'is not a valid hexadecimal string because',
						_1: {
							ctor: '::',
							_0: err,
							_1: {ctor: '[]'}
						}
					}
				});
		};
		var result = function () {
			if (A2(_elm_lang$core$String$startsWith, '-', str)) {
				var list = A2(
					_elm_lang$core$Maybe$withDefault,
					{ctor: '[]'},
					_elm_lang$core$List$tail(
						_elm_lang$core$String$toList(str)));
				return A2(
					_elm_lang$core$Result$map,
					_elm_lang$core$Basics$negate,
					A3(
						_rtfeldman$hex$Hex$fromStringHelp,
						_elm_lang$core$List$length(list) - 1,
						list,
						0));
			} else {
				return A3(
					_rtfeldman$hex$Hex$fromStringHelp,
					_elm_lang$core$String$length(str) - 1,
					_elm_lang$core$String$toList(str),
					0);
			}
		}();
		return A2(_elm_lang$core$Result$mapError, formatError, result);
	}
};

var _rtfeldman$elm_css$Css$asPairs = _rtfeldman$elm_css$Css_Preprocess$toPropertyPairs;
var _rtfeldman$elm_css$Css$collectSelectors = function (declarations) {
	collectSelectors:
	while (true) {
		var _p0 = declarations;
		if (_p0.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p0._0.ctor === 'StyleBlockDeclaration') {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					{ctor: '::', _0: _p0._0._0._0, _1: _p0._0._0._1},
					_rtfeldman$elm_css$Css$collectSelectors(_p0._1));
			} else {
				var _v1 = _p0._1;
				declarations = _v1;
				continue collectSelectors;
			}
		}
	}
};
var _rtfeldman$elm_css$Css$compile = _rtfeldman$elm_css$Css_Preprocess_Resolve$compile;
var _rtfeldman$elm_css$Css$stringsToValue = function (list) {
	return _elm_lang$core$List$isEmpty(list) ? {value: 'none'} : {
		value: A2(
			_elm_lang$core$String$join,
			', ',
			A2(
				_elm_lang$core$List$map,
				function (s) {
					return s;
				},
				list))
	};
};
var _rtfeldman$elm_css$Css$valuesOrNone = function (list) {
	return _elm_lang$core$List$isEmpty(list) ? {value: 'none'} : {
		value: A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				function (_) {
					return _.value;
				},
				list))
	};
};
var _rtfeldman$elm_css$Css$stringToInt = function (str) {
	return A2(
		_elm_lang$core$Result$withDefault,
		0,
		_elm_lang$core$String$toInt(str));
};
var _rtfeldman$elm_css$Css$numberToString = function (num) {
	return _elm_lang$core$Basics$toString(num + 0);
};
var _rtfeldman$elm_css$Css$numericalPercentageToString = function (value) {
	return A3(
		_elm_lang$core$Basics$flip,
		F2(
			function (x, y) {
				return A2(_elm_lang$core$Basics_ops['++'], x, y);
			}),
		'%',
		_rtfeldman$elm_css$Css$numberToString(
			A2(
				F2(
					function (x, y) {
						return x * y;
					}),
				100,
				value)));
};
var _rtfeldman$elm_css$Css$each = F2(
	function (snippetCreators, mixins) {
		var selectorsToSnippet = function (selectors) {
			var _p1 = selectors;
			if (_p1.ctor === '[]') {
				return _rtfeldman$elm_css$Css_Preprocess$Snippet(
					{ctor: '[]'});
			} else {
				return _rtfeldman$elm_css$Css_Preprocess$Snippet(
					{
						ctor: '::',
						_0: _rtfeldman$elm_css$Css_Preprocess$StyleBlockDeclaration(
							A3(_rtfeldman$elm_css$Css_Preprocess$StyleBlock, _p1._0, _p1._1, mixins)),
						_1: {ctor: '[]'}
					});
			}
		};
		return selectorsToSnippet(
			_rtfeldman$elm_css$Css$collectSelectors(
				A2(
					_elm_lang$core$List$concatMap,
					_rtfeldman$elm_css$Css_Preprocess$unwrapSnippet,
					A2(
						_elm_lang$core$List$map,
						F2(
							function (x, y) {
								return y(x);
							})(
							{ctor: '[]'}),
						snippetCreators))));
	});
var _rtfeldman$elm_css$Css$generalSiblings = _rtfeldman$elm_css$Css_Preprocess$NestSnippet(_rtfeldman$elm_css$Css_Structure$GeneralSibling);
var _rtfeldman$elm_css$Css$adjacentSiblings = _rtfeldman$elm_css$Css_Preprocess$NestSnippet(_rtfeldman$elm_css$Css_Structure$AdjacentSibling);
var _rtfeldman$elm_css$Css$descendants = _rtfeldman$elm_css$Css_Preprocess$NestSnippet(_rtfeldman$elm_css$Css_Structure$Descendant);
var _rtfeldman$elm_css$Css$withClass = function ($class) {
	return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$ClassSelector(
			A2(_rtfeldman$elm_css_util$Css_Helpers$identifierToString, '', $class)));
};
var _rtfeldman$elm_css$Css$children = _rtfeldman$elm_css$Css_Preprocess$NestSnippet(_rtfeldman$elm_css$Css_Structure$Child);
var _rtfeldman$elm_css$Css$pseudoElement = function (element) {
	return _rtfeldman$elm_css$Css_Preprocess$WithPseudoElement(
		_rtfeldman$elm_css$Css_Structure$PseudoElement(element));
};
var _rtfeldman$elm_css$Css$after = _rtfeldman$elm_css$Css$pseudoElement('after');
var _rtfeldman$elm_css$Css$before = _rtfeldman$elm_css$Css$pseudoElement('before');
var _rtfeldman$elm_css$Css$firstLetter = _rtfeldman$elm_css$Css$pseudoElement('first-letter');
var _rtfeldman$elm_css$Css$firstLine = _rtfeldman$elm_css$Css$pseudoElement('first-line');
var _rtfeldman$elm_css$Css$selection = _rtfeldman$elm_css$Css$pseudoElement('selection');
var _rtfeldman$elm_css$Css$pseudoClass = function ($class) {
	return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector($class));
};
var _rtfeldman$elm_css$Css$active = _rtfeldman$elm_css$Css$pseudoClass('active');
var _rtfeldman$elm_css$Css$any = function (str) {
	return _rtfeldman$elm_css$Css$pseudoClass(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'any(',
			A2(_elm_lang$core$Basics_ops['++'], str, ')')));
};
var _rtfeldman$elm_css$Css$checked = _rtfeldman$elm_css$Css$pseudoClass('checked');
var _rtfeldman$elm_css$Css$disabled = _rtfeldman$elm_css$Css$pseudoClass('disabled');
var _rtfeldman$elm_css$Css$empty = _rtfeldman$elm_css$Css$pseudoClass('empty');
var _rtfeldman$elm_css$Css$enabled = _rtfeldman$elm_css$Css$pseudoClass('enabled');
var _rtfeldman$elm_css$Css$first = _rtfeldman$elm_css$Css$pseudoClass('first');
var _rtfeldman$elm_css$Css$firstChild = _rtfeldman$elm_css$Css$pseudoClass('first-child');
var _rtfeldman$elm_css$Css$firstOfType = _rtfeldman$elm_css$Css$pseudoClass('first-of-type');
var _rtfeldman$elm_css$Css$fullscreen = _rtfeldman$elm_css$Css$pseudoClass('fullscreen');
var _rtfeldman$elm_css$Css$focus = _rtfeldman$elm_css$Css$pseudoClass('focus');
var _rtfeldman$elm_css$Css$hover = _rtfeldman$elm_css$Css$pseudoClass('hover');
var _rtfeldman$elm_css$Css$visited = _rtfeldman$elm_css$Css$pseudoClass('visited');
var _rtfeldman$elm_css$Css$indeterminate = _rtfeldman$elm_css$Css$pseudoClass('indeterminate');
var _rtfeldman$elm_css$Css$invalid = _rtfeldman$elm_css$Css$pseudoClass('invalid');
var _rtfeldman$elm_css$Css$lang = function (str) {
	return _rtfeldman$elm_css$Css$pseudoClass(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'lang(',
			A2(_elm_lang$core$Basics_ops['++'], str, ')')));
};
var _rtfeldman$elm_css$Css$lastChild = _rtfeldman$elm_css$Css$pseudoClass('last-child');
var _rtfeldman$elm_css$Css$lastOfType = _rtfeldman$elm_css$Css$pseudoClass('last-of-type');
var _rtfeldman$elm_css$Css$link = _rtfeldman$elm_css$Css$pseudoClass('link');
var _rtfeldman$elm_css$Css$nthChild = function (str) {
	return _rtfeldman$elm_css$Css$pseudoClass(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'nth-child(',
			A2(_elm_lang$core$Basics_ops['++'], str, ')')));
};
var _rtfeldman$elm_css$Css$nthLastChild = function (str) {
	return _rtfeldman$elm_css$Css$pseudoClass(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'nth-last-child(',
			A2(_elm_lang$core$Basics_ops['++'], str, ')')));
};
var _rtfeldman$elm_css$Css$nthLastOfType = function (str) {
	return _rtfeldman$elm_css$Css$pseudoClass(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'nth-last-of-type(',
			A2(_elm_lang$core$Basics_ops['++'], str, ')')));
};
var _rtfeldman$elm_css$Css$nthOfType = function (str) {
	return _rtfeldman$elm_css$Css$pseudoClass(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'nth-of-type(',
			A2(_elm_lang$core$Basics_ops['++'], str, ')')));
};
var _rtfeldman$elm_css$Css$onlyChild = _rtfeldman$elm_css$Css$pseudoClass('only-child');
var _rtfeldman$elm_css$Css$onlyOfType = _rtfeldman$elm_css$Css$pseudoClass('only-of-type');
var _rtfeldman$elm_css$Css$optional = _rtfeldman$elm_css$Css$pseudoClass('optional');
var _rtfeldman$elm_css$Css$outOfRange = _rtfeldman$elm_css$Css$pseudoClass('out-of-range');
var _rtfeldman$elm_css$Css$readWrite = _rtfeldman$elm_css$Css$pseudoClass('read-write');
var _rtfeldman$elm_css$Css$required = _rtfeldman$elm_css$Css$pseudoClass('required');
var _rtfeldman$elm_css$Css$root = _rtfeldman$elm_css$Css$pseudoClass('root');
var _rtfeldman$elm_css$Css$scope = _rtfeldman$elm_css$Css$pseudoClass('scope');
var _rtfeldman$elm_css$Css$target = _rtfeldman$elm_css$Css$pseudoClass('target');
var _rtfeldman$elm_css$Css$valid = _rtfeldman$elm_css$Css$pseudoClass('valid');
var _rtfeldman$elm_css$Css$directionalityToString = function (directionality) {
	var _p2 = directionality;
	if (_p2.ctor === 'Ltr') {
		return 'ltr';
	} else {
		return 'rtl';
	}
};
var _rtfeldman$elm_css$Css$dir = function (directionality) {
	return _rtfeldman$elm_css$Css$pseudoClass(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'dir(',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_rtfeldman$elm_css$Css$directionalityToString(directionality),
				')')));
};
var _rtfeldman$elm_css$Css$propertyWithWarnings = F3(
	function (warnings, key, value) {
		return _rtfeldman$elm_css$Css_Preprocess$AppendProperty(
			{key: key, value: value, important: false, warnings: warnings});
	});
var _rtfeldman$elm_css$Css$property = _rtfeldman$elm_css$Css$propertyWithWarnings(
	{ctor: '[]'});
var _rtfeldman$elm_css$Css$makeSnippet = F2(
	function (mixins, sequence) {
		var selector = A3(
			_rtfeldman$elm_css$Css_Structure$Selector,
			sequence,
			{ctor: '[]'},
			_elm_lang$core$Maybe$Nothing);
		return _rtfeldman$elm_css$Css_Preprocess$Snippet(
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css_Preprocess$StyleBlockDeclaration(
					A3(
						_rtfeldman$elm_css$Css_Preprocess$StyleBlock,
						selector,
						{ctor: '[]'},
						mixins)),
				_1: {ctor: '[]'}
			});
	});
var _rtfeldman$elm_css$Css$class = F2(
	function ($class, mixins) {
		return A2(
			_rtfeldman$elm_css$Css$makeSnippet,
			mixins,
			_rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence(
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Css_Structure$ClassSelector(
						A2(_rtfeldman$elm_css_util$Css_Helpers$identifierToString, '', $class)),
					_1: {ctor: '[]'}
				}));
	});
var _rtfeldman$elm_css$Css$selector = F2(
	function (selectorStr, mixins) {
		return A2(
			_rtfeldman$elm_css$Css$makeSnippet,
			mixins,
			A2(
				_rtfeldman$elm_css$Css_Structure$CustomSelector,
				selectorStr,
				{ctor: '[]'}));
	});
var _rtfeldman$elm_css$Css$everything = function (mixins) {
	return A2(
		_rtfeldman$elm_css$Css$makeSnippet,
		mixins,
		_rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence(
			{ctor: '[]'}));
};
var _rtfeldman$elm_css$Css$id = F2(
	function (identifier, mixins) {
		return A2(
			_rtfeldman$elm_css$Css$makeSnippet,
			mixins,
			_rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence(
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Css_Structure$IdSelector(
						A2(_rtfeldman$elm_css_util$Css_Helpers$identifierToString, '', identifier)),
					_1: {ctor: '[]'}
				}));
	});
var _rtfeldman$elm_css$Css$mixin = _rtfeldman$elm_css$Css_Preprocess$ApplyMixins;
var _rtfeldman$elm_css$Css$stylesheet = _rtfeldman$elm_css$Css_Preprocess$stylesheet;
var _rtfeldman$elm_css$Css$animationNames = function (identifiers) {
	var value = A2(
		_elm_lang$core$String$join,
		', ',
		A2(
			_elm_lang$core$List$map,
			_rtfeldman$elm_css_util$Css_Helpers$identifierToString(''),
			identifiers));
	return A2(_rtfeldman$elm_css$Css$property, 'animation-name', value);
};
var _rtfeldman$elm_css$Css$animationName = function (identifier) {
	return _rtfeldman$elm_css$Css$animationNames(
		{
			ctor: '::',
			_0: identifier,
			_1: {ctor: '[]'}
		});
};
var _rtfeldman$elm_css$Css$fontWeight = function (_p3) {
	var _p4 = _p3;
	var _p5 = _p4.value;
	var validWeight = function (weight) {
		return (!_elm_lang$core$Native_Utils.eq(
			_p5,
			_elm_lang$core$Basics$toString(weight))) ? true : A2(
			_elm_lang$core$List$member,
			weight,
			A2(
				_elm_lang$core$List$map,
				F2(
					function (x, y) {
						return x * y;
					})(100),
				A2(_elm_lang$core$List$range, 1, 9)));
	};
	var warnings = validWeight(
		_rtfeldman$elm_css$Css$stringToInt(_p5)) ? {ctor: '[]'} : {
		ctor: '::',
		_0: A2(
			_elm_lang$core$Basics_ops['++'],
			'fontWeight ',
			A2(_elm_lang$core$Basics_ops['++'], _p5, ' is invalid. Valid weights are: 100, 200, 300, 400, 500, 600, 700, 800, 900. Please see https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Values')),
		_1: {ctor: '[]'}
	};
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'font-weight', _p5);
};
var _rtfeldman$elm_css$Css$fontFeatureSettingsList = function (featureTagValues) {
	var warnings = _elm_lang$core$List$concat(
		A2(
			_elm_lang$core$List$map,
			function (_) {
				return _.warnings;
			},
			featureTagValues));
	var value = A2(
		_elm_lang$core$String$join,
		', ',
		A2(
			_elm_lang$core$List$map,
			function (_) {
				return _.value;
			},
			featureTagValues));
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'font-feature-settings', value);
};
var _rtfeldman$elm_css$Css$fontFeatureSettings = function (_p6) {
	var _p7 = _p6;
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, _p7.warnings, 'font-feature-settings', _p7.value);
};
var _rtfeldman$elm_css$Css$qt = function (str) {
	return _elm_lang$core$Basics$toString(str);
};
var _rtfeldman$elm_css$Css$fontFace = function (value) {
	return A2(_elm_lang$core$Basics_ops['++'], 'font-face ', value);
};
var _rtfeldman$elm_css$Css$src = function (value) {
	return _elm_lang$core$Basics$toString(value.value);
};
var _rtfeldman$elm_css$Css$withMedia = _rtfeldman$elm_css$Css_Preprocess$WithMedia;
var _rtfeldman$elm_css$Css$media = F2(
	function (mediaQueries, snippets) {
		var nestedMediaRules = function (declarations) {
			nestedMediaRules:
			while (true) {
				var _p8 = declarations;
				if (_p8.ctor === '[]') {
					return {ctor: '[]'};
				} else {
					switch (_p8._0.ctor) {
						case 'StyleBlockDeclaration':
							var _v7 = _p8._1;
							declarations = _v7;
							continue nestedMediaRules;
						case 'MediaRule':
							return {
								ctor: '::',
								_0: A2(
									_rtfeldman$elm_css$Css_Preprocess$MediaRule,
									A2(_elm_lang$core$Basics_ops['++'], mediaQueries, _p8._0._0),
									_p8._0._1),
								_1: nestedMediaRules(_p8._1)
							};
						default:
							return {
								ctor: '::',
								_0: _p8._0,
								_1: nestedMediaRules(_p8._1)
							};
					}
				}
			}
		};
		var extractStyleBlocks = function (declarations) {
			extractStyleBlocks:
			while (true) {
				var _p9 = declarations;
				if (_p9.ctor === '[]') {
					return {ctor: '[]'};
				} else {
					if (_p9._0.ctor === 'StyleBlockDeclaration') {
						return {
							ctor: '::',
							_0: _p9._0._0,
							_1: extractStyleBlocks(_p9._1)
						};
					} else {
						var _v9 = _p9._1;
						declarations = _v9;
						continue extractStyleBlocks;
					}
				}
			}
		};
		var snippetDeclarations = A2(_elm_lang$core$List$concatMap, _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet, snippets);
		var mediaRuleFromStyleBlocks = A2(
			_rtfeldman$elm_css$Css_Preprocess$MediaRule,
			mediaQueries,
			extractStyleBlocks(snippetDeclarations));
		return _rtfeldman$elm_css$Css_Preprocess$Snippet(
			{
				ctor: '::',
				_0: mediaRuleFromStyleBlocks,
				_1: nestedMediaRules(snippetDeclarations)
			});
	});
var _rtfeldman$elm_css$Css$mediaQuery = F2(
	function (queryString, snippets) {
		return A2(
			_rtfeldman$elm_css$Css$media,
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css_Structure$MediaQuery(queryString),
				_1: {ctor: '[]'}
			},
			snippets);
	});
var _rtfeldman$elm_css$Css$color = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'color', c.value);
};
var _rtfeldman$elm_css$Css$backgroundColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'background-color', c.value);
};
var _rtfeldman$elm_css$Css$outlineColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'outline-color', c.value);
};
var _rtfeldman$elm_css$Css$borderColor4 = F4(
	function (c1, c2, c3, c4) {
		var value = A2(
			_elm_lang$core$String$join,
			' ',
			{
				ctor: '::',
				_0: c1.value,
				_1: {
					ctor: '::',
					_0: c2.value,
					_1: {
						ctor: '::',
						_0: c3.value,
						_1: {
							ctor: '::',
							_0: c4.value,
							_1: {ctor: '[]'}
						}
					}
				}
			});
		var warnings = A2(
			_elm_lang$core$Basics_ops['++'],
			c1.warnings,
			A2(
				_elm_lang$core$Basics_ops['++'],
				c2.warnings,
				A2(_elm_lang$core$Basics_ops['++'], c3.warnings, c4.warnings)));
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'border-color', value);
	});
var _rtfeldman$elm_css$Css$borderColor3 = F3(
	function (c1, c2, c3) {
		var value = A2(
			_elm_lang$core$String$join,
			' ',
			{
				ctor: '::',
				_0: c1.value,
				_1: {
					ctor: '::',
					_0: c2.value,
					_1: {
						ctor: '::',
						_0: c3.value,
						_1: {ctor: '[]'}
					}
				}
			});
		var warnings = A2(
			_elm_lang$core$Basics_ops['++'],
			c1.warnings,
			A2(_elm_lang$core$Basics_ops['++'], c2.warnings, c3.warnings));
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'border-color', value);
	});
var _rtfeldman$elm_css$Css$borderColor2 = F2(
	function (c1, c2) {
		var value = A2(
			_elm_lang$core$String$join,
			' ',
			{
				ctor: '::',
				_0: c1.value,
				_1: {
					ctor: '::',
					_0: c2.value,
					_1: {ctor: '[]'}
				}
			});
		var warnings = A2(_elm_lang$core$Basics_ops['++'], c1.warnings, c2.warnings);
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'border-color', value);
	});
var _rtfeldman$elm_css$Css$borderColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-color', c.value);
};
var _rtfeldman$elm_css$Css$borderBlockEndColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-block-end-color', c.value);
};
var _rtfeldman$elm_css$Css$borderTopColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-top-color', c.value);
};
var _rtfeldman$elm_css$Css$borderRightColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-right-color', c.value);
};
var _rtfeldman$elm_css$Css$borderLeftColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-left-color', c.value);
};
var _rtfeldman$elm_css$Css$borderInlineEndColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-inline-end-color', c.value);
};
var _rtfeldman$elm_css$Css$borderInlineStartColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-inline-start-color', c.value);
};
var _rtfeldman$elm_css$Css$borderBottomColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-bottom-color', c.value);
};
var _rtfeldman$elm_css$Css$borderBlockStartColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-block-start-color', c.value);
};
var _rtfeldman$elm_css$Css$featureOff = 0;
var _rtfeldman$elm_css$Css$featureOn = 1;
var _rtfeldman$elm_css$Css$displayFlex = A2(_rtfeldman$elm_css$Css$property, 'display', 'flex');
var _rtfeldman$elm_css$Css$textEmphasisColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'text-emphasis-color', c.value);
};
var _rtfeldman$elm_css$Css$textDecorationColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'text-decoration-color', c.value);
};
var _rtfeldman$elm_css$Css$prop6 = F7(
	function (key, argA, argB, argC, argD, argE, argF) {
		return A2(
			_rtfeldman$elm_css$Css$property,
			key,
			A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: argA.value,
					_1: {
						ctor: '::',
						_0: argB.value,
						_1: {
							ctor: '::',
							_0: argC.value,
							_1: {
								ctor: '::',
								_0: argD.value,
								_1: {
									ctor: '::',
									_0: argE.value,
									_1: {
										ctor: '::',
										_0: argF.value,
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}));
	});
var _rtfeldman$elm_css$Css$boxShadow6 = _rtfeldman$elm_css$Css$prop6('box-shadow');
var _rtfeldman$elm_css$Css$prop5 = F6(
	function (key, argA, argB, argC, argD, argE) {
		return A2(
			_rtfeldman$elm_css$Css$property,
			key,
			A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: argA.value,
					_1: {
						ctor: '::',
						_0: argB.value,
						_1: {
							ctor: '::',
							_0: argC.value,
							_1: {
								ctor: '::',
								_0: argD.value,
								_1: {
									ctor: '::',
									_0: argE.value,
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}));
	});
var _rtfeldman$elm_css$Css$boxShadow5 = _rtfeldman$elm_css$Css$prop5('box-shadow');
var _rtfeldman$elm_css$Css$prop4 = F5(
	function (key, argA, argB, argC, argD) {
		return A2(
			_rtfeldman$elm_css$Css$property,
			key,
			A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: argA.value,
					_1: {
						ctor: '::',
						_0: argB.value,
						_1: {
							ctor: '::',
							_0: argC.value,
							_1: {
								ctor: '::',
								_0: argD.value,
								_1: {ctor: '[]'}
							}
						}
					}
				}));
	});
var _rtfeldman$elm_css$Css$textShadow4 = _rtfeldman$elm_css$Css$prop4('text-shadow');
var _rtfeldman$elm_css$Css$boxShadow4 = _rtfeldman$elm_css$Css$prop4('box-shadow');
var _rtfeldman$elm_css$Css$padding4 = _rtfeldman$elm_css$Css$prop4('padding');
var _rtfeldman$elm_css$Css$margin4 = _rtfeldman$elm_css$Css$prop4('margin');
var _rtfeldman$elm_css$Css$borderImageOutset4 = _rtfeldman$elm_css$Css$prop4('border-image-outset');
var _rtfeldman$elm_css$Css$borderImageWidth4 = _rtfeldman$elm_css$Css$prop4('border-image-width');
var _rtfeldman$elm_css$Css$borderRadius4 = _rtfeldman$elm_css$Css$prop4('border-radius');
var _rtfeldman$elm_css$Css$prop3 = F4(
	function (key, argA, argB, argC) {
		return A2(
			_rtfeldman$elm_css$Css$property,
			key,
			A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: argA.value,
					_1: {
						ctor: '::',
						_0: argB.value,
						_1: {
							ctor: '::',
							_0: argC.value,
							_1: {ctor: '[]'}
						}
					}
				}));
	});
var _rtfeldman$elm_css$Css$textShadow3 = _rtfeldman$elm_css$Css$prop3('text-shadow');
var _rtfeldman$elm_css$Css$boxShadow3 = _rtfeldman$elm_css$Css$prop3('box-shadow');
var _rtfeldman$elm_css$Css$textIndent3 = _rtfeldman$elm_css$Css$prop3('text-indent');
var _rtfeldman$elm_css$Css$padding3 = _rtfeldman$elm_css$Css$prop3('padding');
var _rtfeldman$elm_css$Css$margin3 = _rtfeldman$elm_css$Css$prop3('margin');
var _rtfeldman$elm_css$Css$border3 = _rtfeldman$elm_css$Css$prop3('border');
var _rtfeldman$elm_css$Css$borderTop3 = _rtfeldman$elm_css$Css$prop3('border-top');
var _rtfeldman$elm_css$Css$borderBottom3 = _rtfeldman$elm_css$Css$prop3('border-bottom');
var _rtfeldman$elm_css$Css$borderLeft3 = _rtfeldman$elm_css$Css$prop3('border-left');
var _rtfeldman$elm_css$Css$borderRight3 = _rtfeldman$elm_css$Css$prop3('border-right');
var _rtfeldman$elm_css$Css$borderBlockStart3 = _rtfeldman$elm_css$Css$prop3('border-block-start');
var _rtfeldman$elm_css$Css$borderBlockEnd3 = _rtfeldman$elm_css$Css$prop3('border-block-end');
var _rtfeldman$elm_css$Css$borderInlineStart3 = _rtfeldman$elm_css$Css$prop3('border-block-start');
var _rtfeldman$elm_css$Css$borderInlineEnd3 = _rtfeldman$elm_css$Css$prop3('border-block-end');
var _rtfeldman$elm_css$Css$borderImageOutset3 = _rtfeldman$elm_css$Css$prop3('border-image-outset');
var _rtfeldman$elm_css$Css$borderImageWidth3 = _rtfeldman$elm_css$Css$prop3('border-image-width');
var _rtfeldman$elm_css$Css$borderRadius3 = _rtfeldman$elm_css$Css$prop3('border-radius');
var _rtfeldman$elm_css$Css$outline3 = _rtfeldman$elm_css$Css$prop3('outline');
var _rtfeldman$elm_css$Css$fontVariant3 = _rtfeldman$elm_css$Css$prop3('font-variant');
var _rtfeldman$elm_css$Css$fontVariantNumeric3 = _rtfeldman$elm_css$Css$prop3('font-variant-numeric');
var _rtfeldman$elm_css$Css$textDecoration3 = _rtfeldman$elm_css$Css$prop3('text-decoration');
var _rtfeldman$elm_css$Css$textDecorations3 = function (_p10) {
	return A2(
		_rtfeldman$elm_css$Css$prop3,
		'text-decoration',
		_rtfeldman$elm_css$Css$valuesOrNone(_p10));
};
var _rtfeldman$elm_css$Css$prop2 = F3(
	function (key, argA, argB) {
		return A2(
			_rtfeldman$elm_css$Css$property,
			key,
			A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: argA.value,
					_1: {
						ctor: '::',
						_0: argB.value,
						_1: {ctor: '[]'}
					}
				}));
	});
var _rtfeldman$elm_css$Css$textShadow2 = _rtfeldman$elm_css$Css$prop2('text-shadow');
var _rtfeldman$elm_css$Css$boxShadow2 = _rtfeldman$elm_css$Css$prop2('box-shadow');
var _rtfeldman$elm_css$Css$textIndent2 = _rtfeldman$elm_css$Css$prop2('text-indent');
var _rtfeldman$elm_css$Css$padding2 = _rtfeldman$elm_css$Css$prop2('padding');
var _rtfeldman$elm_css$Css$margin2 = _rtfeldman$elm_css$Css$prop2('margin');
var _rtfeldman$elm_css$Css$border2 = _rtfeldman$elm_css$Css$prop2('border');
var _rtfeldman$elm_css$Css$borderTop2 = _rtfeldman$elm_css$Css$prop2('border-top');
var _rtfeldman$elm_css$Css$borderBottom2 = _rtfeldman$elm_css$Css$prop2('border-bottom');
var _rtfeldman$elm_css$Css$borderLeft2 = _rtfeldman$elm_css$Css$prop2('border-left');
var _rtfeldman$elm_css$Css$borderRight2 = _rtfeldman$elm_css$Css$prop2('border-right');
var _rtfeldman$elm_css$Css$borderBlockStart2 = _rtfeldman$elm_css$Css$prop2('border-block-start');
var _rtfeldman$elm_css$Css$borderBlockEnd2 = _rtfeldman$elm_css$Css$prop2('border-block-end');
var _rtfeldman$elm_css$Css$borderInlineStart2 = _rtfeldman$elm_css$Css$prop2('border-block-start');
var _rtfeldman$elm_css$Css$borderInlineEnd2 = _rtfeldman$elm_css$Css$prop2('border-block-end');
var _rtfeldman$elm_css$Css$borderImageOutset2 = _rtfeldman$elm_css$Css$prop2('border-image-outset');
var _rtfeldman$elm_css$Css$borderImageWidth2 = _rtfeldman$elm_css$Css$prop2('border-image-width');
var _rtfeldman$elm_css$Css$borderTopWidth2 = _rtfeldman$elm_css$Css$prop2('border-top-width');
var _rtfeldman$elm_css$Css$borderBottomLeftRadius2 = _rtfeldman$elm_css$Css$prop2('border-bottom-left-radius');
var _rtfeldman$elm_css$Css$borderBottomRightRadius2 = _rtfeldman$elm_css$Css$prop2('border-bottom-right-radius');
var _rtfeldman$elm_css$Css$borderTopLeftRadius2 = _rtfeldman$elm_css$Css$prop2('border-top-left-radius');
var _rtfeldman$elm_css$Css$borderTopRightRadius2 = _rtfeldman$elm_css$Css$prop2('border-top-right-radius');
var _rtfeldman$elm_css$Css$borderRadius2 = _rtfeldman$elm_css$Css$prop2('border-radius');
var _rtfeldman$elm_css$Css$borderSpacing2 = _rtfeldman$elm_css$Css$prop2('border-spacing');
var _rtfeldman$elm_css$Css$backgroundRepeat2 = _rtfeldman$elm_css$Css$prop2('background-repeat');
var _rtfeldman$elm_css$Css$backgroundPosition2 = _rtfeldman$elm_css$Css$prop2('background-position');
var _rtfeldman$elm_css$Css$backgroundSize2 = _rtfeldman$elm_css$Css$prop2('background-size');
var _rtfeldman$elm_css$Css$fontVariant2 = _rtfeldman$elm_css$Css$prop2('font-variant');
var _rtfeldman$elm_css$Css$fontVariantNumeric2 = _rtfeldman$elm_css$Css$prop2('font-variant-numeric');
var _rtfeldman$elm_css$Css$textDecoration2 = _rtfeldman$elm_css$Css$prop2('text-decoration');
var _rtfeldman$elm_css$Css$textDecorations2 = function (_p11) {
	return A2(
		_rtfeldman$elm_css$Css$prop2,
		'text-decoration',
		_rtfeldman$elm_css$Css$valuesOrNone(_p11));
};
var _rtfeldman$elm_css$Css$prop1 = F2(
	function (key, arg) {
		return A2(_rtfeldman$elm_css$Css$property, key, arg.value);
	});
var _rtfeldman$elm_css$Css$textRendering = _rtfeldman$elm_css$Css$prop1('text-rendering');
var _rtfeldman$elm_css$Css$textOrientation = _rtfeldman$elm_css$Css$prop1('text-orientation');
var _rtfeldman$elm_css$Css$textOverflow = _rtfeldman$elm_css$Css$prop1('text-overflow');
var _rtfeldman$elm_css$Css$textShadow = _rtfeldman$elm_css$Css$prop1('text-shadow');
var _rtfeldman$elm_css$Css$boxShadow = _rtfeldman$elm_css$Css$prop1('box-shadow');
var _rtfeldman$elm_css$Css$textIndent = _rtfeldman$elm_css$Css$prop1('text-indent');
var _rtfeldman$elm_css$Css$textTransform = _rtfeldman$elm_css$Css$prop1('text-transform');
var _rtfeldman$elm_css$Css$display = _rtfeldman$elm_css$Css$prop1('display');
var _rtfeldman$elm_css$Css$opacity = _rtfeldman$elm_css$Css$prop1('opacity');
var _rtfeldman$elm_css$Css$width = _rtfeldman$elm_css$Css$prop1('width');
var _rtfeldman$elm_css$Css$maxWidth = _rtfeldman$elm_css$Css$prop1('max-width');
var _rtfeldman$elm_css$Css$minWidth = _rtfeldman$elm_css$Css$prop1('min-width');
var _rtfeldman$elm_css$Css$height = _rtfeldman$elm_css$Css$prop1('height');
var _rtfeldman$elm_css$Css$minHeight = _rtfeldman$elm_css$Css$prop1('min-height');
var _rtfeldman$elm_css$Css$maxHeight = _rtfeldman$elm_css$Css$prop1('max-height');
var _rtfeldman$elm_css$Css$padding = _rtfeldman$elm_css$Css$prop1('padding');
var _rtfeldman$elm_css$Css$paddingBlockStart = _rtfeldman$elm_css$Css$prop1('padding-block-start');
var _rtfeldman$elm_css$Css$paddingBlockEnd = _rtfeldman$elm_css$Css$prop1('padding-block-end');
var _rtfeldman$elm_css$Css$paddingInlineStart = _rtfeldman$elm_css$Css$prop1('padding-inline-start');
var _rtfeldman$elm_css$Css$paddingInlineEnd = _rtfeldman$elm_css$Css$prop1('padding-inline-end');
var _rtfeldman$elm_css$Css$paddingTop = _rtfeldman$elm_css$Css$prop1('padding-top');
var _rtfeldman$elm_css$Css$paddingBottom = _rtfeldman$elm_css$Css$prop1('padding-bottom');
var _rtfeldman$elm_css$Css$paddingRight = _rtfeldman$elm_css$Css$prop1('padding-right');
var _rtfeldman$elm_css$Css$paddingLeft = _rtfeldman$elm_css$Css$prop1('padding-left');
var _rtfeldman$elm_css$Css$margin = _rtfeldman$elm_css$Css$prop1('margin');
var _rtfeldman$elm_css$Css$marginTop = _rtfeldman$elm_css$Css$prop1('margin-top');
var _rtfeldman$elm_css$Css$marginBottom = _rtfeldman$elm_css$Css$prop1('margin-bottom');
var _rtfeldman$elm_css$Css$marginRight = _rtfeldman$elm_css$Css$prop1('margin-right');
var _rtfeldman$elm_css$Css$marginLeft = _rtfeldman$elm_css$Css$prop1('margin-left');
var _rtfeldman$elm_css$Css$marginBlockStart = _rtfeldman$elm_css$Css$prop1('margin-block-start');
var _rtfeldman$elm_css$Css$marginBlockEnd = _rtfeldman$elm_css$Css$prop1('margin-block-end');
var _rtfeldman$elm_css$Css$marginInlineStart = _rtfeldman$elm_css$Css$prop1('margin-inline-start');
var _rtfeldman$elm_css$Css$marginInlineEnd = _rtfeldman$elm_css$Css$prop1('margin-inline-end');
var _rtfeldman$elm_css$Css$top = _rtfeldman$elm_css$Css$prop1('top');
var _rtfeldman$elm_css$Css$bottom = _rtfeldman$elm_css$Css$prop1('bottom');
var _rtfeldman$elm_css$Css$left = _rtfeldman$elm_css$Css$prop1('left');
var _rtfeldman$elm_css$Css$right = _rtfeldman$elm_css$Css$prop1('right');
var _rtfeldman$elm_css$Css$border = _rtfeldman$elm_css$Css$prop1('border');
var _rtfeldman$elm_css$Css$borderTop = _rtfeldman$elm_css$Css$prop1('border-top');
var _rtfeldman$elm_css$Css$borderBottom = _rtfeldman$elm_css$Css$prop1('border-bottom');
var _rtfeldman$elm_css$Css$borderLeft = _rtfeldman$elm_css$Css$prop1('border-left');
var _rtfeldman$elm_css$Css$borderRight = _rtfeldman$elm_css$Css$prop1('border-right');
var _rtfeldman$elm_css$Css$borderBlockStart = _rtfeldman$elm_css$Css$prop1('border-block-start');
var _rtfeldman$elm_css$Css$borderBlockEnd = _rtfeldman$elm_css$Css$prop1('border-block-end');
var _rtfeldman$elm_css$Css$borderInlineStart = _rtfeldman$elm_css$Css$prop1('border-block-start');
var _rtfeldman$elm_css$Css$borderInlineEnd = _rtfeldman$elm_css$Css$prop1('border-block-end');
var _rtfeldman$elm_css$Css$borderImageOutset = _rtfeldman$elm_css$Css$prop1('border-image-outset');
var _rtfeldman$elm_css$Css$borderImageWidth = _rtfeldman$elm_css$Css$prop1('border-image-width');
var _rtfeldman$elm_css$Css$borderBlockEndStyle = _rtfeldman$elm_css$Css$prop1('border-block-end-style');
var _rtfeldman$elm_css$Css$borderBlockStartStyle = _rtfeldman$elm_css$Css$prop1('border-block-start-style');
var _rtfeldman$elm_css$Css$borderInlineEndStyle = _rtfeldman$elm_css$Css$prop1('border-inline-end-style');
var _rtfeldman$elm_css$Css$borderBottomStyle = _rtfeldman$elm_css$Css$prop1('border-bottom-style');
var _rtfeldman$elm_css$Css$borderInlineStartStyle = _rtfeldman$elm_css$Css$prop1('border-inline-start-style');
var _rtfeldman$elm_css$Css$borderLeftStyle = _rtfeldman$elm_css$Css$prop1('border-left-style');
var _rtfeldman$elm_css$Css$borderRightStyle = _rtfeldman$elm_css$Css$prop1('border-right-style');
var _rtfeldman$elm_css$Css$borderTopStyle = _rtfeldman$elm_css$Css$prop1('border-top-style');
var _rtfeldman$elm_css$Css$borderStyle = _rtfeldman$elm_css$Css$prop1('border-style');
var _rtfeldman$elm_css$Css$borderCollapse = _rtfeldman$elm_css$Css$prop1('border-collapse');
var _rtfeldman$elm_css$Css$borderBottomWidth = _rtfeldman$elm_css$Css$prop1('border-bottom-width');
var _rtfeldman$elm_css$Css$borderInlineEndWidth = _rtfeldman$elm_css$Css$prop1('border-inline-end-width');
var _rtfeldman$elm_css$Css$borderLeftWidth = _rtfeldman$elm_css$Css$prop1('border-left-width');
var _rtfeldman$elm_css$Css$borderRightWidth = _rtfeldman$elm_css$Css$prop1('border-right-width');
var _rtfeldman$elm_css$Css$borderTopWidth = _rtfeldman$elm_css$Css$prop1('border-top-width');
var _rtfeldman$elm_css$Css$borderBottomLeftRadius = _rtfeldman$elm_css$Css$prop1('border-bottom-left-radius');
var _rtfeldman$elm_css$Css$borderBottomRightRadius = _rtfeldman$elm_css$Css$prop1('border-bottom-right-radius');
var _rtfeldman$elm_css$Css$borderTopLeftRadius = _rtfeldman$elm_css$Css$prop1('border-top-left-radius');
var _rtfeldman$elm_css$Css$borderTopRightRadius = _rtfeldman$elm_css$Css$prop1('border-top-right-radius');
var _rtfeldman$elm_css$Css$borderRadius = _rtfeldman$elm_css$Css$prop1('border-radius');
var _rtfeldman$elm_css$Css$borderSpacing = _rtfeldman$elm_css$Css$prop1('border-spacing');
var _rtfeldman$elm_css$Css$outline = _rtfeldman$elm_css$Css$prop1('outline');
var _rtfeldman$elm_css$Css$outlineWidth = _rtfeldman$elm_css$Css$prop1('outline-width');
var _rtfeldman$elm_css$Css$outlineStyle = _rtfeldman$elm_css$Css$prop1('outline-style');
var _rtfeldman$elm_css$Css$outlineOffset = _rtfeldman$elm_css$Css$prop1('outline-offset');
var _rtfeldman$elm_css$Css$resize = _rtfeldman$elm_css$Css$prop1('resize');
var _rtfeldman$elm_css$Css$fill = _rtfeldman$elm_css$Css$prop1('fill');
var _rtfeldman$elm_css$Css$overflow = _rtfeldman$elm_css$Css$prop1('overflow');
var _rtfeldman$elm_css$Css$overflowX = _rtfeldman$elm_css$Css$prop1('overflow-x');
var _rtfeldman$elm_css$Css$overflowY = _rtfeldman$elm_css$Css$prop1('overflow-y');
var _rtfeldman$elm_css$Css$overflowWrap = _rtfeldman$elm_css$Css$prop1('overflow-wrap');
var _rtfeldman$elm_css$Css$whiteSpace = _rtfeldman$elm_css$Css$prop1('white-space');
var _rtfeldman$elm_css$Css$backgroundRepeat = _rtfeldman$elm_css$Css$prop1('background-repeat');
var _rtfeldman$elm_css$Css$backgroundAttachment = _rtfeldman$elm_css$Css$prop1('background-attachment');
var _rtfeldman$elm_css$Css$backgroundClip = _rtfeldman$elm_css$Css$prop1('background-clip');
var _rtfeldman$elm_css$Css$backgroundOrigin = _rtfeldman$elm_css$Css$prop1('background-origin');
var _rtfeldman$elm_css$Css$backgroundImage = _rtfeldman$elm_css$Css$prop1('background-image');
var _rtfeldman$elm_css$Css$backgroundSize = _rtfeldman$elm_css$Css$prop1('background-size');
var _rtfeldman$elm_css$Css$lineHeight = _rtfeldman$elm_css$Css$prop1('line-height');
var _rtfeldman$elm_css$Css$letterSpacing = _rtfeldman$elm_css$Css$prop1('letter-spacing');
var _rtfeldman$elm_css$Css$fontFamily = _rtfeldman$elm_css$Css$prop1('font-family');
var _rtfeldman$elm_css$Css$fontFamilies = function (_p12) {
	return A2(
		_rtfeldman$elm_css$Css$prop1,
		'font-family',
		_rtfeldman$elm_css$Css$stringsToValue(_p12));
};
var _rtfeldman$elm_css$Css$fontSize = _rtfeldman$elm_css$Css$prop1('font-size');
var _rtfeldman$elm_css$Css$fontStyle = _rtfeldman$elm_css$Css$prop1('font-style');
var _rtfeldman$elm_css$Css$fontVariant = _rtfeldman$elm_css$Css$prop1('font-variant');
var _rtfeldman$elm_css$Css$fontVariantLigatures = _rtfeldman$elm_css$Css$prop1('font-variant-ligatures');
var _rtfeldman$elm_css$Css$fontVariantCaps = _rtfeldman$elm_css$Css$prop1('font-variant-caps');
var _rtfeldman$elm_css$Css$fontVariantNumeric = _rtfeldman$elm_css$Css$prop1('font-variant-numeric');
var _rtfeldman$elm_css$Css$fontVariantNumerics = function (_p13) {
	return A2(
		_rtfeldman$elm_css$Css$prop1,
		'font-variant-numeric',
		_rtfeldman$elm_css$Css$valuesOrNone(_p13));
};
var _rtfeldman$elm_css$Css$cursor = _rtfeldman$elm_css$Css$prop1('cursor');
var _rtfeldman$elm_css$Css$textDecoration = _rtfeldman$elm_css$Css$prop1('text-decoration');
var _rtfeldman$elm_css$Css$textDecorations = function (_p14) {
	return A2(
		_rtfeldman$elm_css$Css$prop1,
		'text-decoration',
		_rtfeldman$elm_css$Css$valuesOrNone(_p14));
};
var _rtfeldman$elm_css$Css$textDecorationLine = _rtfeldman$elm_css$Css$prop1('text-decoration-line');
var _rtfeldman$elm_css$Css$textDecorationLines = function (_p15) {
	return A2(
		_rtfeldman$elm_css$Css$prop1,
		'text-decoration-line',
		_rtfeldman$elm_css$Css$valuesOrNone(_p15));
};
var _rtfeldman$elm_css$Css$textDecorationStyle = _rtfeldman$elm_css$Css$prop1('text-decoration-style');
var _rtfeldman$elm_css$Css$zIndex = _rtfeldman$elm_css$Css$prop1('z-index');
var _rtfeldman$elm_css$Css$position = _rtfeldman$elm_css$Css$prop1('position');
var _rtfeldman$elm_css$Css$textBottom = _rtfeldman$elm_css$Css$prop1('text-bottom');
var _rtfeldman$elm_css$Css$textTop = _rtfeldman$elm_css$Css$prop1('text-top');
var _rtfeldman$elm_css$Css$super = _rtfeldman$elm_css$Css$prop1('super');
var _rtfeldman$elm_css$Css$sub = _rtfeldman$elm_css$Css$prop1('sub');
var _rtfeldman$elm_css$Css$baseline = _rtfeldman$elm_css$Css$prop1('baseline');
var _rtfeldman$elm_css$Css$middle = _rtfeldman$elm_css$Css$prop1('middle');
var _rtfeldman$elm_css$Css$stretch = _rtfeldman$elm_css$Css$prop1('stretch');
var _rtfeldman$elm_css$Css$spaceBetween = _rtfeldman$elm_css$Css$prop1('space-between');
var _rtfeldman$elm_css$Css$spaceAround = _rtfeldman$elm_css$Css$prop1('space-around');
var _rtfeldman$elm_css$Css$flexEnd = _rtfeldman$elm_css$Css$prop1('flex-end');
var _rtfeldman$elm_css$Css$flexStart = _rtfeldman$elm_css$Css$prop1('flex-start');
var _rtfeldman$elm_css$Css$order = _rtfeldman$elm_css$Css$prop1('order');
var _rtfeldman$elm_css$Css$flexFlow2 = _rtfeldman$elm_css$Css$prop2('flex-flow');
var _rtfeldman$elm_css$Css$flexFlow1 = _rtfeldman$elm_css$Css$prop1('flex-flow');
var _rtfeldman$elm_css$Css$flexDirection = _rtfeldman$elm_css$Css$prop1('flex-direction');
var _rtfeldman$elm_css$Css$flexWrap = _rtfeldman$elm_css$Css$prop1('flex-wrap');
var _rtfeldman$elm_css$Css$flexShrink = _rtfeldman$elm_css$Css$prop1('flex-shrink');
var _rtfeldman$elm_css$Css$flexGrow = _rtfeldman$elm_css$Css$prop1('flex-grow');
var _rtfeldman$elm_css$Css$flexBasis = _rtfeldman$elm_css$Css$prop1('flex-basis');
var _rtfeldman$elm_css$Css$flex3 = _rtfeldman$elm_css$Css$prop3('flex');
var _rtfeldman$elm_css$Css$flex2 = _rtfeldman$elm_css$Css$prop2('flex');
var _rtfeldman$elm_css$Css$flex = _rtfeldman$elm_css$Css$prop1('flex');
var _rtfeldman$elm_css$Css$listStyle3 = _rtfeldman$elm_css$Css$prop3('list-style');
var _rtfeldman$elm_css$Css$listStyle2 = _rtfeldman$elm_css$Css$prop2('list-style');
var _rtfeldman$elm_css$Css$listStyle = _rtfeldman$elm_css$Css$prop1('list-style');
var _rtfeldman$elm_css$Css$listStyleType = _rtfeldman$elm_css$Css$prop1('list-style-type');
var _rtfeldman$elm_css$Css$listStylePosition = _rtfeldman$elm_css$Css$prop1('list-style-position');
var _rtfeldman$elm_css$Css$transformStyle = _rtfeldman$elm_css$Css$prop1('transform-style');
var _rtfeldman$elm_css$Css$boxSizing = _rtfeldman$elm_css$Css$prop1('box-sizing');
var _rtfeldman$elm_css$Css$transformBox = _rtfeldman$elm_css$Css$prop1('transform-box');
var _rtfeldman$elm_css$Css$transforms = function (_p16) {
	return A2(
		_rtfeldman$elm_css$Css$prop1,
		'transform',
		_rtfeldman$elm_css$Css$valuesOrNone(_p16));
};
var _rtfeldman$elm_css$Css$transform = function (only) {
	return _rtfeldman$elm_css$Css$transforms(
		{
			ctor: '::',
			_0: only,
			_1: {ctor: '[]'}
		});
};
var _rtfeldman$elm_css$Css$true = _rtfeldman$elm_css$Css$prop1('true');
var _rtfeldman$elm_css$Css$matchParent = _rtfeldman$elm_css$Css$prop1('match-parent');
var _rtfeldman$elm_css$Css$end = _rtfeldman$elm_css$Css$prop1('end');
var _rtfeldman$elm_css$Css$start = _rtfeldman$elm_css$Css$prop1('start');
var _rtfeldman$elm_css$Css$justifyAll = _rtfeldman$elm_css$Css$prop1('justify-all');
var _rtfeldman$elm_css$Css$textJustify = _rtfeldman$elm_css$Css$prop1('text-justify');
var _rtfeldman$elm_css$Css$center = _rtfeldman$elm_css$Css$prop1('center');
var _rtfeldman$elm_css$Css$withPrecedingHash = function (str) {
	return A2(_elm_lang$core$String$startsWith, '#', str) ? str : A2(
		_elm_lang$core$String$cons,
		_elm_lang$core$Native_Utils.chr('#'),
		str);
};
var _rtfeldman$elm_css$Css$luminosity = _rtfeldman$elm_css$Css$prop1('luminosity');
var _rtfeldman$elm_css$Css$saturation = _rtfeldman$elm_css$Css$prop1('saturation');
var _rtfeldman$elm_css$Css$hue = _rtfeldman$elm_css$Css$prop1('hue');
var _rtfeldman$elm_css$Css$exclusion = _rtfeldman$elm_css$Css$prop1('exclusion');
var _rtfeldman$elm_css$Css$difference = _rtfeldman$elm_css$Css$prop1('difference');
var _rtfeldman$elm_css$Css$softLight = _rtfeldman$elm_css$Css$prop1('soft-light');
var _rtfeldman$elm_css$Css$hardLight = _rtfeldman$elm_css$Css$prop1('hard-light');
var _rtfeldman$elm_css$Css$colorBurn = _rtfeldman$elm_css$Css$prop1('color-burn');
var _rtfeldman$elm_css$Css$colorDodge = _rtfeldman$elm_css$Css$prop1('color-dodge');
var _rtfeldman$elm_css$Css$lighten = _rtfeldman$elm_css$Css$prop1('lighten');
var _rtfeldman$elm_css$Css$darken = _rtfeldman$elm_css$Css$prop1('darken');
var _rtfeldman$elm_css$Css$overlay = _rtfeldman$elm_css$Css$prop1('overlay');
var _rtfeldman$elm_css$Css$screenBlendMode = _rtfeldman$elm_css$Css$prop1('screen');
var _rtfeldman$elm_css$Css$multiply = _rtfeldman$elm_css$Css$prop1('multiply');
var _rtfeldman$elm_css$Css$important = _rtfeldman$elm_css$Css_Preprocess$mapLastProperty(
	function (property) {
		return _elm_lang$core$Native_Utils.update(
			property,
			{important: true});
	});
var _rtfeldman$elm_css$Css$all = _rtfeldman$elm_css$Css$prop1('all');
var _rtfeldman$elm_css$Css$combineLengths = F3(
	function (operation, first, second) {
		var numericValue = A2(operation, first.numericValue, second.numericValue);
		var value = A2(
			_elm_lang$core$String$join,
			'',
			A2(
				_elm_lang$core$List$filter,
				function (_p17) {
					return !_elm_lang$core$String$isEmpty(_p17);
				},
				{
					ctor: '::',
					_0: _elm_lang$core$Basics$toString(numericValue),
					_1: {
						ctor: '::',
						_0: first.unitLabel,
						_1: {ctor: '[]'}
					}
				}));
		return _elm_lang$core$Native_Utils.update(
			first,
			{value: value, numericValue: numericValue});
	});
var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
_rtfeldman$elm_css$Css_ops['|*|'] = _rtfeldman$elm_css$Css$combineLengths(
	F2(
		function (x, y) {
			return x * y;
		}));
var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
_rtfeldman$elm_css$Css_ops['|/|'] = _rtfeldman$elm_css$Css$combineLengths(
	F2(
		function (x, y) {
			return x / y;
		}));
var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
_rtfeldman$elm_css$Css_ops['|-|'] = _rtfeldman$elm_css$Css$combineLengths(
	F2(
		function (x, y) {
			return x - y;
		}));
var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
_rtfeldman$elm_css$Css_ops['|+|'] = _rtfeldman$elm_css$Css$combineLengths(
	F2(
		function (x, y) {
			return x + y;
		}));
var _rtfeldman$elm_css$Css$getOverloadedProperty = F3(
	function (functionName, desiredKey, mixin) {
		getOverloadedProperty:
		while (true) {
			var _p18 = mixin;
			switch (_p18.ctor) {
				case 'AppendProperty':
					return A2(_rtfeldman$elm_css$Css$property, desiredKey, _p18._0.key);
				case 'ExtendSelector':
					return A3(
						_rtfeldman$elm_css$Css$propertyWithWarnings,
						{
							ctor: '::',
							_0: A2(
								_elm_lang$core$Basics_ops['++'],
								'Cannot apply ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									functionName,
									A2(
										_elm_lang$core$Basics_ops['++'],
										' with inapplicable mixin for selector ',
										_elm_lang$core$Basics$toString(_p18._0)))),
							_1: {ctor: '[]'}
						},
						desiredKey,
						'');
				case 'NestSnippet':
					return A3(
						_rtfeldman$elm_css$Css$propertyWithWarnings,
						{
							ctor: '::',
							_0: A2(
								_elm_lang$core$Basics_ops['++'],
								'Cannot apply ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									functionName,
									A2(
										_elm_lang$core$Basics_ops['++'],
										' with inapplicable mixin for combinator ',
										_elm_lang$core$Basics$toString(_p18._0)))),
							_1: {ctor: '[]'}
						},
						desiredKey,
						'');
				case 'WithPseudoElement':
					return A3(
						_rtfeldman$elm_css$Css$propertyWithWarnings,
						{
							ctor: '::',
							_0: A2(
								_elm_lang$core$Basics_ops['++'],
								'Cannot apply ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									functionName,
									A2(
										_elm_lang$core$Basics_ops['++'],
										' with inapplicable mixin for pseudo-element setter ',
										_elm_lang$core$Basics$toString(_p18._0)))),
							_1: {ctor: '[]'}
						},
						desiredKey,
						'');
				case 'WithMedia':
					return A3(
						_rtfeldman$elm_css$Css$propertyWithWarnings,
						{
							ctor: '::',
							_0: A2(
								_elm_lang$core$Basics_ops['++'],
								'Cannot apply ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									functionName,
									A2(
										_elm_lang$core$Basics_ops['++'],
										' with inapplicable mixin for media query ',
										_elm_lang$core$Basics$toString(_p18._0)))),
							_1: {ctor: '[]'}
						},
						desiredKey,
						'');
				default:
					if (_p18._0.ctor === '[]') {
						return A3(
							_rtfeldman$elm_css$Css$propertyWithWarnings,
							{
								ctor: '::',
								_0: A2(
									_elm_lang$core$Basics_ops['++'],
									'Cannot apply ',
									A2(_elm_lang$core$Basics_ops['++'], functionName, ' with empty mixin. ')),
								_1: {ctor: '[]'}
							},
							desiredKey,
							'');
					} else {
						if (_p18._0._1.ctor === '[]') {
							var _v11 = functionName,
								_v12 = desiredKey,
								_v13 = _p18._0._0;
							functionName = _v11;
							desiredKey = _v12;
							mixin = _v13;
							continue getOverloadedProperty;
						} else {
							var _v14 = functionName,
								_v15 = desiredKey,
								_v16 = _rtfeldman$elm_css$Css_Preprocess$ApplyMixins(_p18._0._1);
							functionName = _v14;
							desiredKey = _v15;
							mixin = _v16;
							continue getOverloadedProperty;
						}
					}
			}
		}
	});
var _rtfeldman$elm_css$Css$cssFunction = F2(
	function (funcName, args) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			funcName,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(_elm_lang$core$String$join, ', ', args),
					')')));
	});
var _rtfeldman$elm_css$Css$tv = _rtfeldman$elm_css$Css_Structure$MediaQuery('tv');
var _rtfeldman$elm_css$Css$projection = _rtfeldman$elm_css$Css_Structure$MediaQuery('projection');
var _rtfeldman$elm_css$Css$print = _rtfeldman$elm_css$Css_Structure$MediaQuery('print');
var _rtfeldman$elm_css$Css$screen = _rtfeldman$elm_css$Css_Structure$MediaQuery('screen');
var _rtfeldman$elm_css$Css$ExplicitLength = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return function (n) {
														return function (o) {
															return {value: a, numericValue: b, units: c, unitLabel: d, length: e, lengthOrAuto: f, lengthOrNumber: g, lengthOrNone: h, lengthOrMinMaxDimension: i, lengthOrNoneOrMinMaxDimension: j, textIndent: k, flexBasis: l, lengthOrNumberOrAutoOrNoneOrContent: m, fontSize: n, lengthOrAutoOrCoverOrContain: o};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _rtfeldman$elm_css$Css$NonMixable = {};
var _rtfeldman$elm_css$Css$BasicProperty = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return function (n) {
														return function (o) {
															return function (p) {
																return function (q) {
																	return function (r) {
																		return function (s) {
																			return function (t) {
																				return function (u) {
																					return function (v) {
																						return function (w) {
																							return function (x) {
																								return function (y) {
																									return function (z) {
																										return function (_1) {
																											return function (_2) {
																												return function (_3) {
																													return function (_4) {
																														return function (_5) {
																															return function (_6) {
																																return function (_7) {
																																	return function (_8) {
																																		return function (_9) {
																																			return function (_10) {
																																				return function (_11) {
																																					return function (_12) {
																																						return function (_13) {
																																							return function (_14) {
																																								return function (_15) {
																																									return function (_16) {
																																										return function (_17) {
																																											return function (_18) {
																																												return function (_19) {
																																													return function (_20) {
																																														return function (_21) {
																																															return function (_22) {
																																																return {value: a, all: b, alignItems: c, borderStyle: d, boxSizing: e, color: f, cursor: g, display: h, flexBasis: i, flexWrap: j, flexDirection: k, flexDirectionOrWrap: l, justifyContent: m, none: n, number: o, outline: p, overflow: q, textDecorationLine: r, textRendering: s, textIndent: t, textDecorationStyle: u, length: v, lengthOrAuto: w, lengthOrNone: x, lengthOrNumber: y, lengthOrMinMaxDimension: z, lengthOrNoneOrMinMaxDimension: _1, lengthOrNumberOrAutoOrNoneOrContent: _2, listStyleType: _3, listStylePosition: _4, listStyleTypeOrPositionOrImage: _5, fontFamily: _6, fontSize: _7, fontStyle: _8, fontWeight: _9, fontVariant: _10, units: _11, numericValue: _12, unitLabel: _13, warnings: _14, backgroundRepeat: _15, backgroundRepeatShorthand: _16, backgroundAttachment: _17, backgroundBlendMode: _18, backgroundOrigin: _19, backgroundImage: _20, lengthOrAutoOrCoverOrContain: _21, intOrAuto: _22};
																																															};
																																														};
																																													};
																																												};
																																											};
																																										};
																																									};
																																								};
																																							};
																																						};
																																					};
																																				};
																																			};
																																		};
																																	};
																																};
																															};
																														};
																													};
																												};
																											};
																										};
																									};
																								};
																							};
																						};
																					};
																				};
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _rtfeldman$elm_css$Css$Compatible = {ctor: 'Compatible'};
var _rtfeldman$elm_css$Css$transparent = {
	value: 'transparent',
	color: _rtfeldman$elm_css$Css$Compatible,
	warnings: {ctor: '[]'}
};
var _rtfeldman$elm_css$Css$colorValueForOverloadedProperty = _rtfeldman$elm_css$Css$transparent;
var _rtfeldman$elm_css$Css$backgroundBlendMode = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'backgroundBlendMode',
		'background-blend-mode',
		fn(_rtfeldman$elm_css$Css$colorValueForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$currentColor = {
	value: 'currentColor',
	color: _rtfeldman$elm_css$Css$Compatible,
	warnings: {ctor: '[]'}
};
var _rtfeldman$elm_css$Css$visible = {value: 'visible', overflow: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$scroll = {value: 'scroll', overflow: _rtfeldman$elm_css$Css$Compatible, backgroundAttachment: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$breakWord = {value: 'break-word', overflowWrap: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$both = {value: 'both', resize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$horizontal = {value: 'horizontal', resize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$vertical = {value: 'vertical', resize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$paddingBox = {value: 'padding-box', backgroundClip: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$url = function (urlValue) {
	return {
		value: A2(
			_elm_lang$core$Basics_ops['++'],
			'url(',
			A2(_elm_lang$core$Basics_ops['++'], urlValue, ')')),
		backgroundImage: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$cover = {value: 'cover', lengthOrAutoOrCoverOrContain: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$contain = {value: 'contain', lengthOrAutoOrCoverOrContain: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$hidden = {value: 'hidden', overflow: _rtfeldman$elm_css$Css$Compatible, borderStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$rgb = F3(
	function (red, green, blue) {
		var warnings = ((_elm_lang$core$Native_Utils.cmp(red, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(red, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(green, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(green, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(blue, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(blue, 255) > 0)))))) ? {
			ctor: '::',
			_0: A2(
				_elm_lang$core$Basics_ops['++'],
				'RGB color values must be between 0 and 255. rgb(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(red),
					A2(
						_elm_lang$core$Basics_ops['++'],
						', ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(green),
							A2(
								_elm_lang$core$Basics_ops['++'],
								', ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(blue),
									') is not valid.')))))),
			_1: {ctor: '[]'}
		} : {ctor: '[]'};
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'rgb',
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css$numberToString,
					{
						ctor: '::',
						_0: red,
						_1: {
							ctor: '::',
							_0: green,
							_1: {
								ctor: '::',
								_0: blue,
								_1: {ctor: '[]'}
							}
						}
					})),
			color: _rtfeldman$elm_css$Css$Compatible,
			warnings: warnings,
			red: red,
			green: green,
			blue: blue,
			alpha: 1
		};
	});
var _rtfeldman$elm_css$Css$rgba = F4(
	function (red, green, blue, alpha) {
		var warnings = ((_elm_lang$core$Native_Utils.cmp(red, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(red, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(green, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(green, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(blue, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(blue, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(alpha, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(alpha, 1) > 0)))))))) ? {
			ctor: '::',
			_0: A2(
				_elm_lang$core$Basics_ops['++'],
				'RGB color values must be between 0 and 255, and the alpha in RGBA must be between 0 and 1. rgba(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(red),
					A2(
						_elm_lang$core$Basics_ops['++'],
						', ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(green),
							A2(
								_elm_lang$core$Basics_ops['++'],
								', ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(blue),
									A2(
										_elm_lang$core$Basics_ops['++'],
										', ',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(alpha),
											') is not valid.')))))))),
			_1: {ctor: '[]'}
		} : {ctor: '[]'};
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'rgba',
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css$numberToString,
						{
							ctor: '::',
							_0: red,
							_1: {
								ctor: '::',
								_0: green,
								_1: {
									ctor: '::',
									_0: blue,
									_1: {ctor: '[]'}
								}
							}
						}),
					{
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$numberToString(alpha),
						_1: {ctor: '[]'}
					})),
			color: _rtfeldman$elm_css$Css$Compatible,
			warnings: warnings,
			red: red,
			green: green,
			blue: blue,
			alpha: alpha
		};
	});
var _rtfeldman$elm_css$Css$erroneousHex = function (str) {
	return {
		value: _rtfeldman$elm_css$Css$withPrecedingHash(str),
		color: _rtfeldman$elm_css$Css$Compatible,
		red: 0,
		green: 0,
		blue: 0,
		alpha: 1,
		warnings: _elm_lang$core$List$singleton(
			A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: 'Hex color strings must contain exactly 3, 4, 6, or 8 hexadecimal digits, optionally preceded by \"#\".',
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Basics$toString(str),
						_1: {
							ctor: '::',
							_0: 'is an invalid hex color string.',
							_1: {
								ctor: '::',
								_0: 'Please see: https://drafts.csswg.org/css-color/#hex-notation',
								_1: {ctor: '[]'}
							}
						}
					}
				}))
	};
};
var _rtfeldman$elm_css$Css$validHex = F5(
	function (str, _p22, _p21, _p20, _p19) {
		var _p23 = _p22;
		var _p24 = _p21;
		var _p25 = _p20;
		var _p26 = _p19;
		var toResult = function (_p27) {
			return _rtfeldman$hex$Hex$fromString(
				_elm_lang$core$String$toLower(
					_elm_lang$core$String$fromList(_p27)));
		};
		var results = {
			ctor: '_Tuple4',
			_0: toResult(
				{
					ctor: '::',
					_0: _p23._0,
					_1: {
						ctor: '::',
						_0: _p23._1,
						_1: {ctor: '[]'}
					}
				}),
			_1: toResult(
				{
					ctor: '::',
					_0: _p24._0,
					_1: {
						ctor: '::',
						_0: _p24._1,
						_1: {ctor: '[]'}
					}
				}),
			_2: toResult(
				{
					ctor: '::',
					_0: _p25._0,
					_1: {
						ctor: '::',
						_0: _p25._1,
						_1: {ctor: '[]'}
					}
				}),
			_3: toResult(
				{
					ctor: '::',
					_0: _p26._0,
					_1: {
						ctor: '::',
						_0: _p26._1,
						_1: {ctor: '[]'}
					}
				})
		};
		var _p28 = results;
		if (((((_p28.ctor === '_Tuple4') && (_p28._0.ctor === 'Ok')) && (_p28._1.ctor === 'Ok')) && (_p28._2.ctor === 'Ok')) && (_p28._3.ctor === 'Ok')) {
			return {
				value: _rtfeldman$elm_css$Css$withPrecedingHash(str),
				color: _rtfeldman$elm_css$Css$Compatible,
				red: _p28._0._0,
				green: _p28._1._0,
				blue: _p28._2._0,
				alpha: _elm_lang$core$Basics$toFloat(_p28._3._0) / 255,
				warnings: {ctor: '[]'}
			};
		} else {
			return _rtfeldman$elm_css$Css$erroneousHex(str);
		}
	});
var _rtfeldman$elm_css$Css$hex = function (str) {
	var withoutHash = A2(_elm_lang$core$String$startsWith, '#', str) ? A2(_elm_lang$core$String$dropLeft, 1, str) : str;
	var _p29 = _elm_lang$core$String$toList(withoutHash);
	_v22_4:
	do {
		if (((_p29.ctor === '::') && (_p29._1.ctor === '::')) && (_p29._1._1.ctor === '::')) {
			if (_p29._1._1._1.ctor === '[]') {
				var _p32 = _p29._0;
				var _p31 = _p29._1._0;
				var _p30 = _p29._1._1._0;
				return A5(
					_rtfeldman$elm_css$Css$validHex,
					str,
					{ctor: '_Tuple2', _0: _p32, _1: _p32},
					{ctor: '_Tuple2', _0: _p31, _1: _p31},
					{ctor: '_Tuple2', _0: _p30, _1: _p30},
					{
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.chr('f'),
						_1: _elm_lang$core$Native_Utils.chr('f')
					});
			} else {
				if (_p29._1._1._1._1.ctor === '[]') {
					var _p36 = _p29._0;
					var _p35 = _p29._1._0;
					var _p34 = _p29._1._1._0;
					var _p33 = _p29._1._1._1._0;
					return A5(
						_rtfeldman$elm_css$Css$validHex,
						str,
						{ctor: '_Tuple2', _0: _p36, _1: _p36},
						{ctor: '_Tuple2', _0: _p35, _1: _p35},
						{ctor: '_Tuple2', _0: _p34, _1: _p34},
						{ctor: '_Tuple2', _0: _p33, _1: _p33});
				} else {
					if (_p29._1._1._1._1._1.ctor === '::') {
						if (_p29._1._1._1._1._1._1.ctor === '[]') {
							return A5(
								_rtfeldman$elm_css$Css$validHex,
								str,
								{ctor: '_Tuple2', _0: _p29._0, _1: _p29._1._0},
								{ctor: '_Tuple2', _0: _p29._1._1._0, _1: _p29._1._1._1._0},
								{ctor: '_Tuple2', _0: _p29._1._1._1._1._0, _1: _p29._1._1._1._1._1._0},
								{
									ctor: '_Tuple2',
									_0: _elm_lang$core$Native_Utils.chr('f'),
									_1: _elm_lang$core$Native_Utils.chr('f')
								});
						} else {
							if ((_p29._1._1._1._1._1._1._1.ctor === '::') && (_p29._1._1._1._1._1._1._1._1.ctor === '[]')) {
								return A5(
									_rtfeldman$elm_css$Css$validHex,
									str,
									{ctor: '_Tuple2', _0: _p29._0, _1: _p29._1._0},
									{ctor: '_Tuple2', _0: _p29._1._1._0, _1: _p29._1._1._1._0},
									{ctor: '_Tuple2', _0: _p29._1._1._1._1._0, _1: _p29._1._1._1._1._1._0},
									{ctor: '_Tuple2', _0: _p29._1._1._1._1._1._1._0, _1: _p29._1._1._1._1._1._1._1._0});
							} else {
								break _v22_4;
							}
						}
					} else {
						break _v22_4;
					}
				}
			}
		} else {
			break _v22_4;
		}
	} while(false);
	return _rtfeldman$elm_css$Css$erroneousHex(str);
};
var _rtfeldman$elm_css$Css$hslaToRgba = F6(
	function (value, warnings, hue, saturation, lightness, hslAlpha) {
		var _p37 = _elm_lang$core$Color$toRgb(
			A4(_elm_lang$core$Color$hsla, hue, saturation, lightness, hslAlpha));
		var red = _p37.red;
		var green = _p37.green;
		var blue = _p37.blue;
		var alpha = _p37.alpha;
		return {value: value, color: _rtfeldman$elm_css$Css$Compatible, red: red, green: green, blue: blue, alpha: alpha, warnings: warnings};
	});
var _rtfeldman$elm_css$Css$hsl = F3(
	function (hue, saturation, lightness) {
		var valuesList = {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css$numberToString(hue),
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$numericalPercentageToString(saturation),
				_1: {
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$numericalPercentageToString(lightness),
					_1: {ctor: '[]'}
				}
			}
		};
		var value = A2(_rtfeldman$elm_css$Css$cssFunction, 'hsl', valuesList);
		var warnings = ((_elm_lang$core$Native_Utils.cmp(hue, 360) > 0) || ((_elm_lang$core$Native_Utils.cmp(hue, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 1) > 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(lightness, 1) > 0) || (_elm_lang$core$Native_Utils.cmp(lightness, 0) < 0)))))) ? {
			ctor: '::',
			_0: A2(
				_elm_lang$core$Basics_ops['++'],
				'HSL color values must have an H value between 0 and 360 (as in degrees) and S and L values between 0 and 1. ',
				A2(_elm_lang$core$Basics_ops['++'], value, ' is not valid.')),
			_1: {ctor: '[]'}
		} : {ctor: '[]'};
		return A6(_rtfeldman$elm_css$Css$hslaToRgba, value, warnings, hue, saturation, lightness, 1);
	});
var _rtfeldman$elm_css$Css$hsla = F4(
	function (hue, saturation, lightness, alpha) {
		var valuesList = {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css$numberToString(hue),
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$numericalPercentageToString(saturation),
				_1: {
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$numericalPercentageToString(lightness),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$numberToString(alpha),
						_1: {ctor: '[]'}
					}
				}
			}
		};
		var value = A2(_rtfeldman$elm_css$Css$cssFunction, 'hsla', valuesList);
		var warnings = ((_elm_lang$core$Native_Utils.cmp(hue, 360) > 0) || ((_elm_lang$core$Native_Utils.cmp(hue, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 1) > 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(lightness, 1) > 0) || ((_elm_lang$core$Native_Utils.cmp(lightness, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(alpha, 1) > 0) || (_elm_lang$core$Native_Utils.cmp(alpha, 0) < 0)))))))) ? {
			ctor: '::',
			_0: A2(
				_elm_lang$core$Basics_ops['++'],
				'HSLA color values must have an H value between 0 and 360 (as in degrees) and S, L, and A values between 0 and 1. ',
				A2(_elm_lang$core$Basics_ops['++'], value, ' is not valid.')),
			_1: {ctor: '[]'}
		} : {ctor: '[]'};
		return A6(_rtfeldman$elm_css$Css$hslaToRgba, value, warnings, hue, saturation, lightness, alpha);
	});
var _rtfeldman$elm_css$Css$optimizeSpeed = {value: 'optimizeSpeed', textRendering: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$optimizeLegibility = {value: 'optimizeLegibility', textRendering: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$geometricPrecision = {value: 'geometricPrecision', textRendering: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$hanging = {value: 'hanging', textIndent: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$eachLine = {value: 'each-line', textIndent: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$mixed = {value: 'mixed', textOrientation: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$upright = {value: 'upright', textOrientation: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$sideways = {value: 'sideways', textOrientation: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$capitalize = {value: 'capitalize', textTransform: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$uppercase = {value: 'uppercase', textTransform: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$lowercase = {value: 'lowercase', textTransform: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$fullWidth = {value: 'full-width', textTransform: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$ellipsis = {value: 'ellipsis', textOverflow: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$clip = {value: 'clip', textOverflow: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$wavy = {value: 'wavy', textDecorationStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$dotted = {value: 'dotted', borderStyle: _rtfeldman$elm_css$Css$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$dashed = {value: 'dashed', borderStyle: _rtfeldman$elm_css$Css$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$solid = {value: 'solid', borderStyle: _rtfeldman$elm_css$Css$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$double = {value: 'double', borderStyle: _rtfeldman$elm_css$Css$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$groove = {value: 'groove', borderStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$ridge = {value: 'ridge', borderStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$inset = {value: 'inset', borderStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$outset = {value: 'outset', borderStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$separate = {value: 'separate', borderCollapse: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$collapse = {value: 'collapse', borderCollapse: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$lengthConverter = F3(
	function (units, unitLabel, numericValue) {
		return {
			value: A2(
				_elm_lang$core$Basics_ops['++'],
				_rtfeldman$elm_css$Css$numberToString(numericValue),
				unitLabel),
			numericValue: numericValue,
			units: units,
			unitLabel: unitLabel,
			length: _rtfeldman$elm_css$Css$Compatible,
			lengthOrAuto: _rtfeldman$elm_css$Css$Compatible,
			lengthOrNumber: _rtfeldman$elm_css$Css$Compatible,
			lengthOrNone: _rtfeldman$elm_css$Css$Compatible,
			lengthOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible,
			lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible,
			textIndent: _rtfeldman$elm_css$Css$Compatible,
			flexBasis: _rtfeldman$elm_css$Css$Compatible,
			lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible,
			fontSize: _rtfeldman$elm_css$Css$Compatible,
			lengthOrAutoOrCoverOrContain: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$angleConverter = F2(
	function (suffix, num) {
		return {
			value: A2(
				_elm_lang$core$Basics_ops['++'],
				_rtfeldman$elm_css$Css$numberToString(num),
				suffix),
			angle: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$deg = _rtfeldman$elm_css$Css$angleConverter('deg');
var _rtfeldman$elm_css$Css$grad = _rtfeldman$elm_css$Css$angleConverter('grad');
var _rtfeldman$elm_css$Css$rad = _rtfeldman$elm_css$Css$angleConverter('rad');
var _rtfeldman$elm_css$Css$turn = _rtfeldman$elm_css$Css$angleConverter('turn');
var _rtfeldman$elm_css$Css$matrix = F6(
	function (a, b, c, d, tx, ty) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'matrix',
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css$numberToString,
					{
						ctor: '::',
						_0: a,
						_1: {
							ctor: '::',
							_0: b,
							_1: {
								ctor: '::',
								_0: c,
								_1: {
									ctor: '::',
									_0: d,
									_1: {
										ctor: '::',
										_0: tx,
										_1: {
											ctor: '::',
											_0: ty,
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					})),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$matrix3d = function (a1) {
	return function (a2) {
		return function (a3) {
			return function (a4) {
				return function (b1) {
					return function (b2) {
						return function (b3) {
							return function (b4) {
								return function (c1) {
									return function (c2) {
										return function (c3) {
											return function (c4) {
												return function (d1) {
													return function (d2) {
														return function (d3) {
															return function (d4) {
																return {
																	value: A2(
																		_rtfeldman$elm_css$Css$cssFunction,
																		'matrix3d',
																		A2(
																			_elm_lang$core$List$map,
																			_rtfeldman$elm_css$Css$numberToString,
																			{
																				ctor: '::',
																				_0: a1,
																				_1: {
																					ctor: '::',
																					_0: a2,
																					_1: {
																						ctor: '::',
																						_0: a3,
																						_1: {
																							ctor: '::',
																							_0: a4,
																							_1: {
																								ctor: '::',
																								_0: b1,
																								_1: {
																									ctor: '::',
																									_0: b2,
																									_1: {
																										ctor: '::',
																										_0: b3,
																										_1: {
																											ctor: '::',
																											_0: b4,
																											_1: {
																												ctor: '::',
																												_0: c1,
																												_1: {
																													ctor: '::',
																													_0: c2,
																													_1: {
																														ctor: '::',
																														_0: c3,
																														_1: {
																															ctor: '::',
																															_0: c4,
																															_1: {
																																ctor: '::',
																																_0: d1,
																																_1: {
																																	ctor: '::',
																																	_0: d2,
																																	_1: {
																																		ctor: '::',
																																		_0: d3,
																																		_1: {
																																			ctor: '::',
																																			_0: d4,
																																			_1: {ctor: '[]'}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			})),
																	transform: _rtfeldman$elm_css$Css$Compatible
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _rtfeldman$elm_css$Css$perspective = function (l) {
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'perspective',
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$numberToString(l),
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$rotate = function (_p38) {
	var _p39 = _p38;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'rotate',
			{
				ctor: '::',
				_0: _p39.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$rotateX = function (_p40) {
	var _p41 = _p40;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'rotateX',
			{
				ctor: '::',
				_0: _p41.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$rotateY = function (_p42) {
	var _p43 = _p42;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'rotateY',
			{
				ctor: '::',
				_0: _p43.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$rotateZ = function (_p44) {
	var _p45 = _p44;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'rotateZ',
			{
				ctor: '::',
				_0: _p45.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$rotate3d = F4(
	function (x, y, z, _p46) {
		var _p47 = _p46;
		var coordsAsStrings = A2(
			_elm_lang$core$List$map,
			_rtfeldman$elm_css$Css$numberToString,
			{
				ctor: '::',
				_0: x,
				_1: {
					ctor: '::',
					_0: y,
					_1: {
						ctor: '::',
						_0: z,
						_1: {ctor: '[]'}
					}
				}
			});
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'rotate3d',
				A2(
					_elm_lang$core$Basics_ops['++'],
					coordsAsStrings,
					{
						ctor: '::',
						_0: _p47.value,
						_1: {ctor: '[]'}
					})),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$scale = function (x) {
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'scale',
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$numberToString(x),
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$scale2 = F2(
	function (x, y) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'scale',
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css$numberToString,
					{
						ctor: '::',
						_0: x,
						_1: {
							ctor: '::',
							_0: y,
							_1: {ctor: '[]'}
						}
					})),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$scaleX = function (x) {
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'scaleX',
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$numberToString(x),
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$scaleY = function (y) {
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'scaleY',
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$numberToString(y),
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$scale3d = F3(
	function (x, y, z) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'scale3d',
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css$numberToString,
					{
						ctor: '::',
						_0: x,
						_1: {
							ctor: '::',
							_0: y,
							_1: {
								ctor: '::',
								_0: z,
								_1: {ctor: '[]'}
							}
						}
					})),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$skew = function (_p48) {
	var _p49 = _p48;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'skew',
			{
				ctor: '::',
				_0: _p49.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$skew2 = F2(
	function (ax, ay) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'skew',
				{
					ctor: '::',
					_0: ax.value,
					_1: {
						ctor: '::',
						_0: ay.value,
						_1: {ctor: '[]'}
					}
				}),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$skewX = function (_p50) {
	var _p51 = _p50;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'skewX',
			{
				ctor: '::',
				_0: _p51.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$skewY = function (_p52) {
	var _p53 = _p52;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'skewY',
			{
				ctor: '::',
				_0: _p53.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$translate = function (_p54) {
	var _p55 = _p54;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'translate',
			{
				ctor: '::',
				_0: _p55.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$translate2 = F2(
	function (tx, ty) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'translate',
				{
					ctor: '::',
					_0: tx.value,
					_1: {
						ctor: '::',
						_0: ty.value,
						_1: {ctor: '[]'}
					}
				}),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$translateX = function (_p56) {
	var _p57 = _p56;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'translateX',
			{
				ctor: '::',
				_0: _p57.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$translateY = function (_p58) {
	var _p59 = _p58;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'translateY',
			{
				ctor: '::',
				_0: _p59.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$translateZ = function (_p60) {
	var _p61 = _p60;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'translateZ',
			{
				ctor: '::',
				_0: _p61.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$translate3d = F3(
	function (tx, ty, tz) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'translate3d',
				{
					ctor: '::',
					_0: tx.value,
					_1: {
						ctor: '::',
						_0: ty.value,
						_1: {
							ctor: '::',
							_0: tz.value,
							_1: {ctor: '[]'}
						}
					}
				}),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$fillBox = {value: 'fill-box', transformBox: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$contentBox = {value: 'content-box', boxSizing: _rtfeldman$elm_css$Css$Compatible, backgroundClip: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$borderBox = {value: 'border-box', boxSizing: _rtfeldman$elm_css$Css$Compatible, backgroundClip: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$viewBox = {value: 'view-box', transformBox: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$preserve3d = {value: 'preserve-3d', transformStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$flat = {value: 'flat', transformStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$inside = {value: 'inside', listStylePosition: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$outside = {value: 'outside', listStylePosition: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$disc = {value: 'disc', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$circle = {value: 'circle', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$square = {value: 'square', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$decimal = {value: 'decimal', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$decimalLeadingZero = {value: 'decimal-leading-zero', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$lowerRoman = {value: 'lower-roman', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$upperRoman = {value: 'upper-roman', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$lowerGreek = {value: 'lower-greek', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$upperGreek = {value: 'upper-greek', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$lowerAlpha = {value: 'lower-alpha', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$upperAlpha = {value: 'upper-alpha', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$lowerLatin = {value: 'lower-latin', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$upperLatin = {value: 'upper-latin', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$arabicIndic = {value: 'arabic-indic', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$armenian = {value: 'armenian', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$bengali = {value: 'bengali', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$cjkEarthlyBranch = {value: 'cjk-earthly-branch', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$cjkHeavenlyStem = {value: 'cjk-heavenly-stem', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$devanagari = {value: 'devanagari', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$georgian = {value: 'georgian', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$gujarati = {value: 'gujarati', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$gurmukhi = {value: 'gurmukhi', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$kannada = {value: 'kannada', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$khmer = {value: 'khmer', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$lao = {value: 'lao', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$malayalam = {value: 'malayalam', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$myanmar = {value: 'myanmar', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$oriya = {value: 'oriya', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$telugu = {value: 'telugu', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$thai = {value: 'thai', listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$content = {value: 'content', flexBasis: _rtfeldman$elm_css$Css$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$wrap = {value: 'wrap', flexWrap: _rtfeldman$elm_css$Css$Compatible, flexDirectionOrWrap: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$wrapReverse = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$wrap,
	{value: 'wrap-reverse'});
var _rtfeldman$elm_css$Css$row = {value: 'row', flexDirection: _rtfeldman$elm_css$Css$Compatible, flexDirectionOrWrap: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$rowReverse = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$row,
	{value: 'row-reverse'});
var _rtfeldman$elm_css$Css$column = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$row,
	{value: 'column'});
var _rtfeldman$elm_css$Css$columnReverse = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$row,
	{value: 'column-reverse'});
var _rtfeldman$elm_css$Css$underline = {value: 'underline', textDecorationLine: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$overline = {value: 'overline', textDecorationLine: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$lineThrough = {value: 'line-through', textDecorationLine: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$repeatX = {value: 'repeat-x', backgroundRepeatShorthand: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$repeatY = {value: 'repeat-y', backgroundRepeatShorthand: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$repeat = {value: 'repeat', backgroundRepeat: _rtfeldman$elm_css$Css$Compatible, backgroundRepeatShorthand: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$space = {value: 'space', backgroundRepeat: _rtfeldman$elm_css$Css$Compatible, backgroundRepeatShorthand: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$round = {value: 'round', backgroundRepeat: _rtfeldman$elm_css$Css$Compatible, backgroundRepeatShorthand: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$noRepeat = {value: 'no-repeat', backgroundRepeat: _rtfeldman$elm_css$Css$Compatible, backgroundRepeatShorthand: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$local = {value: 'local', backgroundAttachment: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$block = {value: 'block', display: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$inlineBlock = {value: 'inline-block', display: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$inline = {value: 'inline', display: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$table = {value: 'table', display: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$inlineTable = {value: 'inline-table', display: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$tableRow = {value: 'table-row', display: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$tableCell = {value: 'table-cell', display: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$tableColumn = {value: 'table-column', display: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$tableCaption = {value: 'table-caption', display: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$tableRowGroup = {value: 'table-row-group', display: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$tableColumnGroup = {value: 'table-column-group', display: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$tableHeaderGroup = {value: 'table-header-group', display: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$tableFooterGroup = {value: 'table-footer-group', display: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$listItem = {value: 'list-item', display: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$inlineListItem = {value: 'inline-list-item', display: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$none = {value: 'none', cursor: _rtfeldman$elm_css$Css$Compatible, none: _rtfeldman$elm_css$Css$Compatible, lengthOrNone: _rtfeldman$elm_css$Css$Compatible, lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible, textDecorationLine: _rtfeldman$elm_css$Css$Compatible, listStyleType: _rtfeldman$elm_css$Css$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible, display: _rtfeldman$elm_css$Css$Compatible, outline: _rtfeldman$elm_css$Css$Compatible, resize: _rtfeldman$elm_css$Css$Compatible, transform: _rtfeldman$elm_css$Css$Compatible, borderStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$auto = {value: 'auto', cursor: _rtfeldman$elm_css$Css$Compatible, flexBasis: _rtfeldman$elm_css$Css$Compatible, overflow: _rtfeldman$elm_css$Css$Compatible, textRendering: _rtfeldman$elm_css$Css$Compatible, lengthOrAuto: _rtfeldman$elm_css$Css$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible, alignItemsOrAuto: _rtfeldman$elm_css$Css$Compatible, lengthOrAutoOrCoverOrContain: _rtfeldman$elm_css$Css$Compatible, justifyContentOrAuto: _rtfeldman$elm_css$Css$Compatible, intOrAuto: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$noWrap = {value: 'nowrap', whiteSpace: _rtfeldman$elm_css$Css$Compatible, flexWrap: _rtfeldman$elm_css$Css$Compatible, flexDirectionOrWrap: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$fillAvailable = {value: 'fill-available', minMaxDimension: _rtfeldman$elm_css$Css$Compatible, lengthOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible, lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$maxContent = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$fillAvailable,
	{value: 'max-content'});
var _rtfeldman$elm_css$Css$minContent = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$fillAvailable,
	{value: 'min-content'});
var _rtfeldman$elm_css$Css$fitContent = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$fillAvailable,
	{value: 'fit-content'});
var _rtfeldman$elm_css$Css$static = {value: 'static', position: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$fixed = {value: 'fixed', position: _rtfeldman$elm_css$Css$Compatible, backgroundAttachment: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$sticky = {value: 'sticky', position: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$relative = {value: 'relative', position: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$absolute = {value: 'absolute', position: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$serif = {value: 'serif', fontFamily: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$sansSerif = {value: 'sans-serif', fontFamily: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$monospace = {value: 'monospace', fontFamily: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$cursive = {value: 'cursive', fontFamily: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$fantasy = {value: 'fantasy', fontFamily: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$xxSmall = {value: 'xx-small', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$xSmall = {value: 'x-small', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$small = {value: 'small', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$medium = {value: 'medium', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$large = {value: 'large', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$xLarge = {value: 'x-large', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$xxLarge = {value: 'xx-large', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$smaller = {value: 'smaller', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$larger = {value: 'larger', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$normal = {
	value: 'normal',
	warnings: {ctor: '[]'},
	fontStyle: _rtfeldman$elm_css$Css$Compatible,
	fontWeight: _rtfeldman$elm_css$Css$Compatible,
	featureTagValue: _rtfeldman$elm_css$Css$Compatible,
	overflowWrap: _rtfeldman$elm_css$Css$Compatible
};
var _rtfeldman$elm_css$Css$italic = {value: 'italic', fontStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$oblique = {value: 'oblique', fontStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$bold = {value: 'bold', fontWeight: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$lighter = {value: 'lighter', fontWeight: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$bolder = {value: 'bolder', fontWeight: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$smallCaps = {value: 'small-caps', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$allSmallCaps = {value: 'all-small-caps', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$petiteCaps = {value: 'petite-caps', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$allPetiteCaps = {value: 'all-petite-caps', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$unicase = {value: 'unicase', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$titlingCaps = {value: 'titling-caps', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$commonLigatures = {value: 'common-ligatures', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$noCommonLigatures = {value: 'no-common-ligatures', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$discretionaryLigatures = {value: 'discretionary-ligatures', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$noDiscretionaryLigatures = {value: 'no-discretionary-ligatures', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$historicalLigatures = {value: 'historical-ligatures', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$noHistoricalLigatures = {value: 'no-historical-ligatures', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$contextual = {value: 'context', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$noContextual = {value: 'no-contextual', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$liningNums = {value: 'lining-nums', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$oldstyleNums = {value: 'oldstyle-nums', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$proportionalNums = {value: 'proportional-nums', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$tabularNums = {value: 'tabular-nums', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$diagonalFractions = {value: 'diagonal-fractions', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$stackedFractions = {value: 'stacked-fractions', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$ordinal = {value: 'ordinal', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$slashedZero = {value: 'slashed-zero', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$featureTag2 = F2(
	function (tag, value) {
		var potentialWarnings = {
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: !_elm_lang$core$Native_Utils.eq(
					_elm_lang$core$String$length(tag),
					4),
				_1: A2(
					_elm_lang$core$Basics_ops['++'],
					'Feature tags must be exactly 4 characters long. ',
					A2(_elm_lang$core$Basics_ops['++'], tag, ' is invalid.'))
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.cmp(value, 0) < 0,
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						'Feature values cannot be negative. ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(value),
							' is invalid.'))
				},
				_1: {ctor: '[]'}
			}
		};
		var warnings = A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$second,
			A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$first, potentialWarnings));
		return {
			value: A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(tag),
				A2(
					_elm_lang$core$Basics_ops['++'],
					' ',
					_elm_lang$core$Basics$toString(value))),
			featureTagValue: _rtfeldman$elm_css$Css$Compatible,
			warnings: warnings
		};
	});
var _rtfeldman$elm_css$Css$featureTag = function (tag) {
	return A2(_rtfeldman$elm_css$Css$featureTag2, tag, 1);
};
var _rtfeldman$elm_css$Css$default = {value: 'default', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$crosshair = {value: 'crosshair', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$contextMenu = {value: 'context-menu', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$help = {value: 'help', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$pointer = {value: 'pointer', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$progress = {value: 'progress', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$wait = {value: 'wait', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$cell = {value: 'cell', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$text = {value: 'text', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$verticalText = {value: 'vertical-text', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$cursorAlias = {value: 'alias', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$copy = {value: 'copy', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$move = {value: 'move', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$noDrop = {value: 'no-drop', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$notAllowed = {value: 'not-allowed', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$eResize = {value: 'e-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$nResize = {value: 'n-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$neResize = {value: 'ne-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$nwResize = {value: 'nw-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$sResize = {value: 's-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$seResize = {value: 'se-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$swResize = {value: 'sw-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$wResize = {value: 'w-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$ewResize = {value: 'ew-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$nsResize = {value: 'ns-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$neswResize = {value: 'nesw-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$nwseResize = {value: 'nwse-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$colResize = {value: 'col-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$rowResize = {value: 'row-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$allScroll = {value: 'all-scroll', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$zoomIn = {value: 'zoom-in', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$zoomOut = {value: 'zoom-out', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$grab = {value: 'grab', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$grabbing = {value: 'grabbing', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$PseudoClass = F2(
	function (a, b) {
		return {ctor: 'PseudoClass', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css$PseudoElement = F2(
	function (a, b) {
		return {ctor: 'PseudoElement', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css$PercentageUnits = {ctor: 'PercentageUnits'};
var _rtfeldman$elm_css$Css$pct = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$PercentageUnits, '%');
var _rtfeldman$elm_css$Css$EmUnits = {ctor: 'EmUnits'};
var _rtfeldman$elm_css$Css$em = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$EmUnits, 'em');
var _rtfeldman$elm_css$Css$ExUnits = {ctor: 'ExUnits'};
var _rtfeldman$elm_css$Css$ex = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$ExUnits, 'ex');
var _rtfeldman$elm_css$Css$ChUnits = {ctor: 'ChUnits'};
var _rtfeldman$elm_css$Css$ch = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$ChUnits, 'ch');
var _rtfeldman$elm_css$Css$RemUnits = {ctor: 'RemUnits'};
var _rtfeldman$elm_css$Css$rem = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$RemUnits, 'rem');
var _rtfeldman$elm_css$Css$VhUnits = {ctor: 'VhUnits'};
var _rtfeldman$elm_css$Css$vh = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$VhUnits, 'vh');
var _rtfeldman$elm_css$Css$VwUnits = {ctor: 'VwUnits'};
var _rtfeldman$elm_css$Css$vw = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$VwUnits, 'vw');
var _rtfeldman$elm_css$Css$VMinUnits = {ctor: 'VMinUnits'};
var _rtfeldman$elm_css$Css$vmin = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$VMinUnits, 'vmin');
var _rtfeldman$elm_css$Css$VMaxUnits = {ctor: 'VMaxUnits'};
var _rtfeldman$elm_css$Css$vmax = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$VMaxUnits, 'vmax');
var _rtfeldman$elm_css$Css$PxUnits = {ctor: 'PxUnits'};
var _rtfeldman$elm_css$Css$px = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$PxUnits, 'px');
var _rtfeldman$elm_css$Css$MMUnits = {ctor: 'MMUnits'};
var _rtfeldman$elm_css$Css$mm = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$MMUnits, 'mm');
var _rtfeldman$elm_css$Css$CMUnits = {ctor: 'CMUnits'};
var _rtfeldman$elm_css$Css$cm = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$CMUnits, 'cm');
var _rtfeldman$elm_css$Css$InchUnits = {ctor: 'InchUnits'};
var _rtfeldman$elm_css$Css$inches = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$InchUnits, 'in');
var _rtfeldman$elm_css$Css$PtUnits = {ctor: 'PtUnits'};
var _rtfeldman$elm_css$Css$pt = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$PtUnits, 'pt');
var _rtfeldman$elm_css$Css$PcUnits = {ctor: 'PcUnits'};
var _rtfeldman$elm_css$Css$pc = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$PcUnits, 'pc');
var _rtfeldman$elm_css$Css$UnitlessInteger = {ctor: 'UnitlessInteger'};
var _rtfeldman$elm_css$Css$zero = {value: '0', length: _rtfeldman$elm_css$Css$Compatible, lengthOrNumber: _rtfeldman$elm_css$Css$Compatible, lengthOrNone: _rtfeldman$elm_css$Css$Compatible, lengthOrAuto: _rtfeldman$elm_css$Css$Compatible, lengthOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible, lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible, number: _rtfeldman$elm_css$Css$Compatible, outline: _rtfeldman$elm_css$Css$Compatible, units: _rtfeldman$elm_css$Css$UnitlessInteger, unitLabel: '', numericValue: 0, lengthOrAutoOrCoverOrContain: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$int = function (val) {
	return {
		value: _rtfeldman$elm_css$Css$numberToString(val),
		lengthOrNumber: _rtfeldman$elm_css$Css$Compatible,
		number: _rtfeldman$elm_css$Css$Compatible,
		fontWeight: _rtfeldman$elm_css$Css$Compatible,
		lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible,
		intOrAuto: _rtfeldman$elm_css$Css$Compatible,
		numericValue: _elm_lang$core$Basics$toFloat(val),
		unitLabel: '',
		units: _rtfeldman$elm_css$Css$UnitlessInteger
	};
};
var _rtfeldman$elm_css$Css$UnitlessFloat = {ctor: 'UnitlessFloat'};
var _rtfeldman$elm_css$Css$num = function (val) {
	return {
		value: _rtfeldman$elm_css$Css$numberToString(val),
		lengthOrNumber: _rtfeldman$elm_css$Css$Compatible,
		number: _rtfeldman$elm_css$Css$Compatible,
		lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible,
		numericValue: val,
		unitLabel: '',
		units: _rtfeldman$elm_css$Css$UnitlessFloat
	};
};
var _rtfeldman$elm_css$Css$IncompatibleUnits = {ctor: 'IncompatibleUnits'};
var _rtfeldman$elm_css$Css$initial = {
	value: 'initial',
	overflow: _rtfeldman$elm_css$Css$Compatible,
	none: _rtfeldman$elm_css$Css$Compatible,
	number: _rtfeldman$elm_css$Css$Compatible,
	textDecorationLine: _rtfeldman$elm_css$Css$Compatible,
	textRendering: _rtfeldman$elm_css$Css$Compatible,
	textIndent: _rtfeldman$elm_css$Css$Compatible,
	textDecorationStyle: _rtfeldman$elm_css$Css$Compatible,
	borderStyle: _rtfeldman$elm_css$Css$Compatible,
	boxSizing: _rtfeldman$elm_css$Css$Compatible,
	color: _rtfeldman$elm_css$Css$Compatible,
	cursor: _rtfeldman$elm_css$Css$Compatible,
	display: _rtfeldman$elm_css$Css$Compatible,
	all: _rtfeldman$elm_css$Css$Compatible,
	alignItems: _rtfeldman$elm_css$Css$Compatible,
	justifyContent: _rtfeldman$elm_css$Css$Compatible,
	length: _rtfeldman$elm_css$Css$Compatible,
	lengthOrAuto: _rtfeldman$elm_css$Css$Compatible,
	lengthOrNone: _rtfeldman$elm_css$Css$Compatible,
	lengthOrNumber: _rtfeldman$elm_css$Css$Compatible,
	lengthOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible,
	lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible,
	listStyleType: _rtfeldman$elm_css$Css$Compatible,
	listStylePosition: _rtfeldman$elm_css$Css$Compatible,
	listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css$Compatible,
	flexBasis: _rtfeldman$elm_css$Css$Compatible,
	flexWrap: _rtfeldman$elm_css$Css$Compatible,
	flexDirection: _rtfeldman$elm_css$Css$Compatible,
	flexDirectionOrWrap: _rtfeldman$elm_css$Css$Compatible,
	lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible,
	fontFamily: _rtfeldman$elm_css$Css$Compatible,
	fontSize: _rtfeldman$elm_css$Css$Compatible,
	fontStyle: _rtfeldman$elm_css$Css$Compatible,
	fontWeight: _rtfeldman$elm_css$Css$Compatible,
	fontVariant: _rtfeldman$elm_css$Css$Compatible,
	outline: _rtfeldman$elm_css$Css$Compatible,
	units: _rtfeldman$elm_css$Css$IncompatibleUnits,
	numericValue: 0,
	unitLabel: '',
	warnings: {ctor: '[]'},
	backgroundRepeat: _rtfeldman$elm_css$Css$Compatible,
	backgroundRepeatShorthand: _rtfeldman$elm_css$Css$Compatible,
	backgroundAttachment: _rtfeldman$elm_css$Css$Compatible,
	backgroundBlendMode: _rtfeldman$elm_css$Css$Compatible,
	backgroundOrigin: _rtfeldman$elm_css$Css$Compatible,
	backgroundImage: _rtfeldman$elm_css$Css$Compatible,
	lengthOrAutoOrCoverOrContain: _rtfeldman$elm_css$Css$Compatible,
	intOrAuto: _rtfeldman$elm_css$Css$Compatible
};
var _rtfeldman$elm_css$Css$unset = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$initial,
	{value: 'unset'});
var _rtfeldman$elm_css$Css$inherit = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$initial,
	{value: 'inherit'});
var _rtfeldman$elm_css$Css$lengthForOverloadedProperty = A3(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$IncompatibleUnits, '', 0);
var _rtfeldman$elm_css$Css$alignItems = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'alignItems',
		'align-items',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$alignSelf = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'alignSelf',
		'align-self',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$justifyContent = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'justifyContent',
		'justify-content',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$float = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'float',
		'float',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$textAlignLast = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'textAlignLast',
		'text-align-last',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$textAlign = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'textAlign',
		'text-align',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$verticalAlign = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'verticalAlign',
		'vertical-align',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$backgroundPosition = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'backgroundPosition',
		'background-position',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$Rtl = {ctor: 'Rtl'};
var _rtfeldman$elm_css$Css$Ltr = {ctor: 'Ltr'};
var _rtfeldman$elm_css$Css$IntentionallyUnsupportedPleaseSeeDocs = {ctor: 'IntentionallyUnsupportedPleaseSeeDocs'};
var _rtfeldman$elm_css$Css$thin = _rtfeldman$elm_css$Css$IntentionallyUnsupportedPleaseSeeDocs;
var _rtfeldman$elm_css$Css$thick = _rtfeldman$elm_css$Css$IntentionallyUnsupportedPleaseSeeDocs;
var _rtfeldman$elm_css$Css$blink = _rtfeldman$elm_css$Css$IntentionallyUnsupportedPleaseSeeDocs;

var _rtfeldman$elm_css$Css_Elements$typeSelector = F2(
	function (selectorStr, mixins) {
		var sequence = A2(
			_rtfeldman$elm_css$Css_Structure$TypeSelectorSequence,
			_rtfeldman$elm_css$Css_Structure$TypeSelector(selectorStr),
			{ctor: '[]'});
		var selector = A3(
			_rtfeldman$elm_css$Css_Structure$Selector,
			sequence,
			{ctor: '[]'},
			_elm_lang$core$Maybe$Nothing);
		return _rtfeldman$elm_css$Css_Preprocess$Snippet(
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css_Preprocess$StyleBlockDeclaration(
					A3(
						_rtfeldman$elm_css$Css_Preprocess$StyleBlock,
						selector,
						{ctor: '[]'},
						mixins)),
				_1: {ctor: '[]'}
			});
	});
var _rtfeldman$elm_css$Css_Elements$html = _rtfeldman$elm_css$Css_Elements$typeSelector('html');
var _rtfeldman$elm_css$Css_Elements$body = _rtfeldman$elm_css$Css_Elements$typeSelector('body');
var _rtfeldman$elm_css$Css_Elements$article = _rtfeldman$elm_css$Css_Elements$typeSelector('article');
var _rtfeldman$elm_css$Css_Elements$header = _rtfeldman$elm_css$Css_Elements$typeSelector('header');
var _rtfeldman$elm_css$Css_Elements$footer = _rtfeldman$elm_css$Css_Elements$typeSelector('footer');
var _rtfeldman$elm_css$Css_Elements$h1 = _rtfeldman$elm_css$Css_Elements$typeSelector('h1');
var _rtfeldman$elm_css$Css_Elements$h2 = _rtfeldman$elm_css$Css_Elements$typeSelector('h2');
var _rtfeldman$elm_css$Css_Elements$h3 = _rtfeldman$elm_css$Css_Elements$typeSelector('h3');
var _rtfeldman$elm_css$Css_Elements$h4 = _rtfeldman$elm_css$Css_Elements$typeSelector('h4');
var _rtfeldman$elm_css$Css_Elements$h5 = _rtfeldman$elm_css$Css_Elements$typeSelector('h5');
var _rtfeldman$elm_css$Css_Elements$h6 = _rtfeldman$elm_css$Css_Elements$typeSelector('h6');
var _rtfeldman$elm_css$Css_Elements$nav = _rtfeldman$elm_css$Css_Elements$typeSelector('nav');
var _rtfeldman$elm_css$Css_Elements$section = _rtfeldman$elm_css$Css_Elements$typeSelector('section');
var _rtfeldman$elm_css$Css_Elements$div = _rtfeldman$elm_css$Css_Elements$typeSelector('div');
var _rtfeldman$elm_css$Css_Elements$hr = _rtfeldman$elm_css$Css_Elements$typeSelector('hr');
var _rtfeldman$elm_css$Css_Elements$li = _rtfeldman$elm_css$Css_Elements$typeSelector('li');
var _rtfeldman$elm_css$Css_Elements$main_ = _rtfeldman$elm_css$Css_Elements$typeSelector('main');
var _rtfeldman$elm_css$Css_Elements$ol = _rtfeldman$elm_css$Css_Elements$typeSelector('ol');
var _rtfeldman$elm_css$Css_Elements$p = _rtfeldman$elm_css$Css_Elements$typeSelector('p');
var _rtfeldman$elm_css$Css_Elements$ul = _rtfeldman$elm_css$Css_Elements$typeSelector('ul');
var _rtfeldman$elm_css$Css_Elements$pre = _rtfeldman$elm_css$Css_Elements$typeSelector('pre');
var _rtfeldman$elm_css$Css_Elements$a = _rtfeldman$elm_css$Css_Elements$typeSelector('a');
var _rtfeldman$elm_css$Css_Elements$code = _rtfeldman$elm_css$Css_Elements$typeSelector('code');
var _rtfeldman$elm_css$Css_Elements$small = _rtfeldman$elm_css$Css_Elements$typeSelector('small');
var _rtfeldman$elm_css$Css_Elements$span = _rtfeldman$elm_css$Css_Elements$typeSelector('span');
var _rtfeldman$elm_css$Css_Elements$strong = _rtfeldman$elm_css$Css_Elements$typeSelector('strong');
var _rtfeldman$elm_css$Css_Elements$i = _rtfeldman$elm_css$Css_Elements$typeSelector('i');
var _rtfeldman$elm_css$Css_Elements$em = _rtfeldman$elm_css$Css_Elements$typeSelector('em');
var _rtfeldman$elm_css$Css_Elements$img = _rtfeldman$elm_css$Css_Elements$typeSelector('img');
var _rtfeldman$elm_css$Css_Elements$audio = _rtfeldman$elm_css$Css_Elements$typeSelector('audio');
var _rtfeldman$elm_css$Css_Elements$video = _rtfeldman$elm_css$Css_Elements$typeSelector('video');
var _rtfeldman$elm_css$Css_Elements$canvas = _rtfeldman$elm_css$Css_Elements$typeSelector('canvas');
var _rtfeldman$elm_css$Css_Elements$caption = _rtfeldman$elm_css$Css_Elements$typeSelector('caption');
var _rtfeldman$elm_css$Css_Elements$col = _rtfeldman$elm_css$Css_Elements$typeSelector('col');
var _rtfeldman$elm_css$Css_Elements$colgroup = _rtfeldman$elm_css$Css_Elements$typeSelector('colgroup');
var _rtfeldman$elm_css$Css_Elements$table = _rtfeldman$elm_css$Css_Elements$typeSelector('table');
var _rtfeldman$elm_css$Css_Elements$tbody = _rtfeldman$elm_css$Css_Elements$typeSelector('tbody');
var _rtfeldman$elm_css$Css_Elements$td = _rtfeldman$elm_css$Css_Elements$typeSelector('td');
var _rtfeldman$elm_css$Css_Elements$tfoot = _rtfeldman$elm_css$Css_Elements$typeSelector('tfoot');
var _rtfeldman$elm_css$Css_Elements$th = _rtfeldman$elm_css$Css_Elements$typeSelector('th');
var _rtfeldman$elm_css$Css_Elements$thead = _rtfeldman$elm_css$Css_Elements$typeSelector('thead');
var _rtfeldman$elm_css$Css_Elements$tr = _rtfeldman$elm_css$Css_Elements$typeSelector('tr');
var _rtfeldman$elm_css$Css_Elements$button = _rtfeldman$elm_css$Css_Elements$typeSelector('button');
var _rtfeldman$elm_css$Css_Elements$fieldset = _rtfeldman$elm_css$Css_Elements$typeSelector('fieldset');
var _rtfeldman$elm_css$Css_Elements$form = _rtfeldman$elm_css$Css_Elements$typeSelector('form');
var _rtfeldman$elm_css$Css_Elements$input = _rtfeldman$elm_css$Css_Elements$typeSelector('input');
var _rtfeldman$elm_css$Css_Elements$label = _rtfeldman$elm_css$Css_Elements$typeSelector('label');
var _rtfeldman$elm_css$Css_Elements$legend = _rtfeldman$elm_css$Css_Elements$typeSelector('legend');
var _rtfeldman$elm_css$Css_Elements$optgroup = _rtfeldman$elm_css$Css_Elements$typeSelector('optgroup');
var _rtfeldman$elm_css$Css_Elements$option = _rtfeldman$elm_css$Css_Elements$typeSelector('option');
var _rtfeldman$elm_css$Css_Elements$progress = _rtfeldman$elm_css$Css_Elements$typeSelector('progress');
var _rtfeldman$elm_css$Css_Elements$select = _rtfeldman$elm_css$Css_Elements$typeSelector('select');
var _rtfeldman$elm_css$Css_Elements$textarea = _rtfeldman$elm_css$Css_Elements$typeSelector('textarea');
var _rtfeldman$elm_css$Css_Elements$blockquote = _rtfeldman$elm_css$Css_Elements$typeSelector('blockquote');
var _rtfeldman$elm_css$Css_Elements$svg = _rtfeldman$elm_css$Css_Elements$typeSelector('svg');
var _rtfeldman$elm_css$Css_Elements$path = _rtfeldman$elm_css$Css_Elements$typeSelector('path');
var _rtfeldman$elm_css$Css_Elements$rect = _rtfeldman$elm_css$Css_Elements$typeSelector('rect');
var _rtfeldman$elm_css$Css_Elements$circle = _rtfeldman$elm_css$Css_Elements$typeSelector('circle');
var _rtfeldman$elm_css$Css_Elements$ellipse = _rtfeldman$elm_css$Css_Elements$typeSelector('ellipse');
var _rtfeldman$elm_css$Css_Elements$line = _rtfeldman$elm_css$Css_Elements$typeSelector('line');
var _rtfeldman$elm_css$Css_Elements$polyline = _rtfeldman$elm_css$Css_Elements$typeSelector('polyline');
var _rtfeldman$elm_css$Css_Elements$polygon = _rtfeldman$elm_css$Css_Elements$typeSelector('polygon');

var _rtfeldman$elm_css$Css_Namespace$applyNamespaceToProperty = F2(
	function (name, property) {
		var _p0 = property.key;
		if (_p0 === 'animation-name') {
			return _elm_lang$core$Native_Utils.update(
				property,
				{
					value: A2(_elm_lang$core$Basics_ops['++'], name, property.value)
				});
		} else {
			return property;
		}
	});
var _rtfeldman$elm_css$Css_Namespace$applyNamespaceToRepeatable = F2(
	function (name, selector) {
		var _p1 = selector;
		switch (_p1.ctor) {
			case 'ClassSelector':
				return _rtfeldman$elm_css$Css_Structure$ClassSelector(
					A2(_elm_lang$core$Basics_ops['++'], name, _p1._0));
			case 'IdSelector':
				return _rtfeldman$elm_css$Css_Structure$IdSelector(_p1._0);
			default:
				return _rtfeldman$elm_css$Css_Structure$PseudoClassSelector(_p1._0);
		}
	});
var _rtfeldman$elm_css$Css_Namespace$applyNamespaceToSequence = F2(
	function (name, sequence) {
		var _p2 = sequence;
		switch (_p2.ctor) {
			case 'TypeSelectorSequence':
				return A2(
					_rtfeldman$elm_css$Css_Structure$TypeSelectorSequence,
					_p2._0,
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Namespace$applyNamespaceToRepeatable(name),
						_p2._1));
			case 'UniversalSelectorSequence':
				return _rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence(
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Namespace$applyNamespaceToRepeatable(name),
						_p2._0));
			default:
				return A2(
					_rtfeldman$elm_css$Css_Structure$CustomSelector,
					_p2._0,
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Namespace$applyNamespaceToRepeatable(name),
						_p2._1));
		}
	});
var _rtfeldman$elm_css$Css_Namespace$applyNamespaceToSelector = F2(
	function (name, _p3) {
		var _p4 = _p3;
		var apply = _rtfeldman$elm_css$Css_Namespace$applyNamespaceToSequence(name);
		return A3(
			_rtfeldman$elm_css$Css_Structure$Selector,
			apply(_p4._0),
			A2(
				_elm_lang$core$List$map,
				function (_p5) {
					var _p6 = _p5;
					return {
						ctor: '_Tuple2',
						_0: _p6._0,
						_1: apply(_p6._1)
					};
				},
				_p4._1),
			_p4._2);
	});
var _rtfeldman$elm_css$Css_Namespace$applyNamespaceToMixin = F2(
	function (name, mixin) {
		var _p7 = mixin;
		switch (_p7.ctor) {
			case 'AppendProperty':
				return _rtfeldman$elm_css$Css_Preprocess$AppendProperty(
					A2(_rtfeldman$elm_css$Css_Namespace$applyNamespaceToProperty, name, _p7._0));
			case 'ExtendSelector':
				return A2(
					_rtfeldman$elm_css$Css_Preprocess$ExtendSelector,
					A2(_rtfeldman$elm_css$Css_Namespace$applyNamespaceToRepeatable, name, _p7._0),
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Namespace$applyNamespaceToMixin(name),
						_p7._1));
			case 'NestSnippet':
				return A2(
					_rtfeldman$elm_css$Css_Preprocess$NestSnippet,
					_p7._0,
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Namespace$applyNamespaceToSnippet(name),
						_p7._1));
			case 'WithPseudoElement':
				return A2(
					_rtfeldman$elm_css$Css_Preprocess$WithPseudoElement,
					_p7._0,
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Namespace$applyNamespaceToMixin(name),
						_p7._1));
			case 'WithMedia':
				return A2(
					_rtfeldman$elm_css$Css_Preprocess$WithMedia,
					_p7._0,
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Namespace$applyNamespaceToMixin(name),
						_p7._1));
			default:
				return _rtfeldman$elm_css$Css_Preprocess$ApplyMixins(
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Namespace$applyNamespaceToMixin(name),
						_p7._0));
		}
	});
var _rtfeldman$elm_css$Css_Namespace$applyNamespaceToSnippet = F2(
	function (name, _p8) {
		var _p9 = _p8;
		return _rtfeldman$elm_css$Css_Preprocess$Snippet(
			A2(
				_elm_lang$core$List$map,
				_rtfeldman$elm_css$Css_Namespace$applyNamespaceToDeclaration(name),
				_p9._0));
	});
var _rtfeldman$elm_css$Css_Namespace$applyNamespaceToDeclaration = F2(
	function (name, declaration) {
		var _p10 = declaration;
		switch (_p10.ctor) {
			case 'StyleBlockDeclaration':
				return _rtfeldman$elm_css$Css_Preprocess$StyleBlockDeclaration(
					A2(_rtfeldman$elm_css$Css_Namespace$applyNamespaceToStyleBlock, name, _p10._0));
			case 'MediaRule':
				return A2(
					_rtfeldman$elm_css$Css_Preprocess$MediaRule,
					_p10._0,
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Namespace$applyNamespaceToStyleBlock(name),
						_p10._1));
			case 'SupportsRule':
				return A2(
					_rtfeldman$elm_css$Css_Preprocess$SupportsRule,
					_p10._0,
					function (declarations) {
						return {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css_Preprocess$Snippet(declarations),
							_1: {ctor: '[]'}
						};
					}(
						A2(
							_elm_lang$core$List$map,
							_rtfeldman$elm_css$Css_Namespace$applyNamespaceToDeclaration(name),
							A2(_elm_lang$core$List$concatMap, _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet, _p10._1))));
			case 'DocumentRule':
				return A5(
					_rtfeldman$elm_css$Css_Preprocess$DocumentRule,
					_p10._0,
					_p10._1,
					_p10._2,
					_p10._3,
					A2(_rtfeldman$elm_css$Css_Namespace$applyNamespaceToStyleBlock, name, _p10._4));
			case 'PageRule':
				return declaration;
			case 'FontFace':
				return declaration;
			case 'Keyframes':
				return A2(
					_rtfeldman$elm_css$Css_Preprocess$Keyframes,
					A2(_elm_lang$core$Basics_ops['++'], name, _p10._0),
					_p10._1);
			case 'Viewport':
				return declaration;
			case 'CounterStyle':
				return declaration;
			default:
				return declaration;
		}
	});
var _rtfeldman$elm_css$Css_Namespace$applyNamespaceToStyleBlock = F2(
	function (name, _p11) {
		var _p12 = _p11;
		return A3(
			_rtfeldman$elm_css$Css_Preprocess$StyleBlock,
			A2(_rtfeldman$elm_css$Css_Namespace$applyNamespaceToSelector, name, _p12._0),
			A2(
				_elm_lang$core$List$map,
				_rtfeldman$elm_css$Css_Namespace$applyNamespaceToSelector(name),
				_p12._1),
			A2(
				_elm_lang$core$List$map,
				_rtfeldman$elm_css$Css_Namespace$applyNamespaceToMixin(name),
				_p12._2));
	});
var _rtfeldman$elm_css$Css_Namespace$namespace = F2(
	function (rawIdentifier, snippets) {
		return A2(
			_elm_lang$core$List$map,
			_rtfeldman$elm_css$Css_Namespace$applyNamespaceToSnippet(
				_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(rawIdentifier)),
			snippets);
	});

var _rtfeldman$elm_css_helpers$Html_CssHelpers$stylesheetLink = function (url) {
	return A3(
		_elm_lang$html$Html$node,
		'link',
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html_Attributes$property,
				'rel',
				_elm_lang$core$Json_Encode$string('stylesheet')),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html_Attributes$property,
					'type',
					_elm_lang$core$Json_Encode$string('text/css')),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html_Attributes$property,
						'href',
						_elm_lang$core$Json_Encode$string(url)),
					_1: {ctor: '[]'}
				}
			}
		},
		{ctor: '[]'});
};
var _rtfeldman$elm_css_helpers$Html_CssHelpers$style = function (text) {
	return A3(
		_elm_lang$html$Html$node,
		'style',
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html_Attributes$property,
				'textContent',
				_elm_lang$core$Json_Encode$string(text)),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html_Attributes$property,
					'type',
					_elm_lang$core$Json_Encode$string('text/css')),
				_1: {ctor: '[]'}
			}
		},
		{ctor: '[]'});
};
var _rtfeldman$elm_css_helpers$Html_CssHelpers$namespacedClass = F2(
	function (name, list) {
		return _elm_lang$html$Html_Attributes$class(
			A2(
				_elm_lang$core$String$join,
				' ',
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css_util$Css_Helpers$identifierToString(name),
					list)));
	});
var _rtfeldman$elm_css_helpers$Html_CssHelpers$class = _rtfeldman$elm_css_helpers$Html_CssHelpers$namespacedClass('');
var _rtfeldman$elm_css_helpers$Html_CssHelpers$classList = function (list) {
	return _rtfeldman$elm_css_helpers$Html_CssHelpers$class(
		A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$first,
			A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list)));
};
var _rtfeldman$elm_css_helpers$Html_CssHelpers$namespacedClassList = F2(
	function (name, list) {
		return A2(
			_rtfeldman$elm_css_helpers$Html_CssHelpers$namespacedClass,
			name,
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list)));
	});
var _rtfeldman$elm_css_helpers$Html_CssHelpers$helpers = {
	$class: _rtfeldman$elm_css_helpers$Html_CssHelpers$class,
	classList: _rtfeldman$elm_css_helpers$Html_CssHelpers$classList,
	id: function (_p0) {
		return _elm_lang$html$Html_Attributes$id(
			_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(_p0));
	}
};
var _rtfeldman$elm_css_helpers$Html_CssHelpers$withNamespace = function (name) {
	return {
		$class: _rtfeldman$elm_css_helpers$Html_CssHelpers$namespacedClass(name),
		classList: _rtfeldman$elm_css_helpers$Html_CssHelpers$namespacedClassList(name),
		id: function (_p1) {
			return _elm_lang$html$Html_Attributes$id(
				_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(_p1));
		},
		name: name
	};
};
var _rtfeldman$elm_css_helpers$Html_CssHelpers$withClass = F3(
	function (className, makeElem, attrs) {
		return makeElem(
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class(className),
				_1: attrs
			});
	});
var _rtfeldman$elm_css_helpers$Html_CssHelpers$Helpers = F3(
	function (a, b, c) {
		return {$class: a, classList: b, id: c};
	});
var _rtfeldman$elm_css_helpers$Html_CssHelpers$Namespace = F4(
	function (a, b, c, d) {
		return {$class: a, classList: b, id: c, name: d};
	});

var _kirchner$elm_pat$Styles_Colors$green = '#859900';
var _kirchner$elm_pat$Styles_Colors$cyan = '#2aa198';
var _kirchner$elm_pat$Styles_Colors$blue = '#268bd2';
var _kirchner$elm_pat$Styles_Colors$violet = '#6c71c4';
var _kirchner$elm_pat$Styles_Colors$magenta = '#d33682';
var _kirchner$elm_pat$Styles_Colors$red = '#dc322f';
var _kirchner$elm_pat$Styles_Colors$orange = '#cb4b16';
var _kirchner$elm_pat$Styles_Colors$yellow = '#b58900';
var _kirchner$elm_pat$Styles_Colors$base3 = '#fdf6e3';
var _kirchner$elm_pat$Styles_Colors$base2 = '#eee8d5';
var _kirchner$elm_pat$Styles_Colors$base1 = '#93a1a1';
var _kirchner$elm_pat$Styles_Colors$base0 = '#839496';
var _kirchner$elm_pat$Styles_Colors$base00 = '#657b83';
var _kirchner$elm_pat$Styles_Colors$base01 = '#586e75';
var _kirchner$elm_pat$Styles_Colors$base02 = '#073642';
var _kirchner$elm_pat$Styles_Colors$base03 = '#002b36';

var _kirchner$elm_pat$Styles_Common$rem = _rtfeldman$elm_css$Css$rem;
var _kirchner$elm_pat$Styles_Common$_p0 = _rtfeldman$elm_css_helpers$Html_CssHelpers$withNamespace('common__');
var _kirchner$elm_pat$Styles_Common$id = _kirchner$elm_pat$Styles_Common$_p0.id;
var _kirchner$elm_pat$Styles_Common$class = _kirchner$elm_pat$Styles_Common$_p0.$class;
var _kirchner$elm_pat$Styles_Common$classList = _kirchner$elm_pat$Styles_Common$_p0.classList;
var _kirchner$elm_pat$Styles_Common$IconSmall = {ctor: 'IconSmall'};
var _kirchner$elm_pat$Styles_Common$IconButtonSmall = {ctor: 'IconButtonSmall'};
var _kirchner$elm_pat$Styles_Common$IconBig = {ctor: 'IconBig'};
var _kirchner$elm_pat$Styles_Common$IconButtonBig = {ctor: 'IconButtonBig'};
var _kirchner$elm_pat$Styles_Common$css = function () {
	var $class = _rtfeldman$elm_css$Css$class;
	return function (_p1) {
		return _rtfeldman$elm_css$Css$stylesheet(
			A2(_rtfeldman$elm_css$Css_Namespace$namespace, 'common__', _p1));
	}(
		{
			ctor: '::',
			_0: A2(
				$class,
				_kirchner$elm_pat$Styles_Common$IconButtonBig,
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$width(
						_kirchner$elm_pat$Styles_Common$rem(3)),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$height(
							_kirchner$elm_pat$Styles_Common$rem(3)),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$borderRadius(
								_rtfeldman$elm_css$Css$px(4)),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$color(
									_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base0)),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$backgroundColor(_rtfeldman$elm_css$Css$transparent),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$cursor(_rtfeldman$elm_css$Css$pointer),
										_1: {
											ctor: '::',
											_0: _rtfeldman$elm_css$Css$hover(
												{
													ctor: '::',
													_0: _rtfeldman$elm_css$Css$backgroundColor(
														_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base3)),
													_1: {ctor: '[]'}
												}),
											_1: {
												ctor: '::',
												_0: _rtfeldman$elm_css$Css$displayFlex,
												_1: {
													ctor: '::',
													_0: _rtfeldman$elm_css$Css$justifyContent(_rtfeldman$elm_css$Css$center),
													_1: {
														ctor: '::',
														_0: _rtfeldman$elm_css$Css$alignItems(_rtfeldman$elm_css$Css$center),
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					$class,
					_kirchner$elm_pat$Styles_Common$IconBig,
					{
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$important(
							_rtfeldman$elm_css$Css$fontSize(
								_kirchner$elm_pat$Styles_Common$rem(2.5))),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$important(
								_rtfeldman$elm_css$Css$lineHeight(
									_kirchner$elm_pat$Styles_Common$rem(2.5))),
							_1: {ctor: '[]'}
						}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						$class,
						_kirchner$elm_pat$Styles_Common$IconButtonSmall,
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$width(
								_kirchner$elm_pat$Styles_Common$rem(1)),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$height(
									_kirchner$elm_pat$Styles_Common$rem(1)),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$borderRadius(
										_rtfeldman$elm_css$Css$px(4)),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$color(
											_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base0)),
										_1: {
											ctor: '::',
											_0: _rtfeldman$elm_css$Css$backgroundColor(_rtfeldman$elm_css$Css$transparent),
											_1: {
												ctor: '::',
												_0: _rtfeldman$elm_css$Css$cursor(_rtfeldman$elm_css$Css$pointer),
												_1: {
													ctor: '::',
													_0: _rtfeldman$elm_css$Css$hover(
														{
															ctor: '::',
															_0: _rtfeldman$elm_css$Css$backgroundColor(
																_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base3)),
															_1: {ctor: '[]'}
														}),
													_1: {
														ctor: '::',
														_0: _rtfeldman$elm_css$Css$displayFlex,
														_1: {
															ctor: '::',
															_0: _rtfeldman$elm_css$Css$justifyContent(_rtfeldman$elm_css$Css$center),
															_1: {
																ctor: '::',
																_0: _rtfeldman$elm_css$Css$alignItems(_rtfeldman$elm_css$Css$center),
																_1: {ctor: '[]'}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							$class,
							_kirchner$elm_pat$Styles_Common$IconSmall,
							{
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$important(
									_rtfeldman$elm_css$Css$fontSize(
										_kirchner$elm_pat$Styles_Common$rem(1))),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$important(
										_rtfeldman$elm_css$Css$lineHeight(
											_kirchner$elm_pat$Styles_Common$rem(1))),
									_1: {ctor: '[]'}
								}
							}),
						_1: {ctor: '[]'}
					}
				}
			}
		});
}();

var _kirchner$elm_pat$Styles_FileBrowser$rem = _rtfeldman$elm_css$Css$rem;
var _kirchner$elm_pat$Styles_FileBrowser$_p0 = _rtfeldman$elm_css_helpers$Html_CssHelpers$withNamespace('file-browser__');
var _kirchner$elm_pat$Styles_FileBrowser$id = _kirchner$elm_pat$Styles_FileBrowser$_p0.id;
var _kirchner$elm_pat$Styles_FileBrowser$class = _kirchner$elm_pat$Styles_FileBrowser$_p0.$class;
var _kirchner$elm_pat$Styles_FileBrowser$classList = _kirchner$elm_pat$Styles_FileBrowser$_p0.classList;
var _kirchner$elm_pat$Styles_FileBrowser$FileBrowserFileLink = {ctor: 'FileBrowserFileLink'};
var _kirchner$elm_pat$Styles_FileBrowser$FileBrowserFileLinkWrapper = {ctor: 'FileBrowserFileLinkWrapper'};
var _kirchner$elm_pat$Styles_FileBrowser$FileBrowser = {ctor: 'FileBrowser'};
var _kirchner$elm_pat$Styles_FileBrowser$css = function () {
	var $class = _rtfeldman$elm_css$Css$class;
	return function (_p1) {
		return _rtfeldman$elm_css$Css$stylesheet(
			A2(_rtfeldman$elm_css$Css_Namespace$namespace, 'file-browser__', _p1));
	}(
		{
			ctor: '::',
			_0: A2(
				$class,
				_kirchner$elm_pat$Styles_FileBrowser$FileBrowser,
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$relative),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					$class,
					_kirchner$elm_pat$Styles_FileBrowser$FileBrowserFileLink,
					{
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$relative),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$backgroundColor(
								_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base3)),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$color(
									_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base1)),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$cursor(_rtfeldman$elm_css$Css$pointer),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$padding(
											_kirchner$elm_pat$Styles_FileBrowser$rem(0.2)),
										_1: {
											ctor: '::',
											_0: _rtfeldman$elm_css$Css$margin(
												_kirchner$elm_pat$Styles_FileBrowser$rem(5.0e-2)),
											_1: {
												ctor: '::',
												_0: _rtfeldman$elm_css$Css$hover(
													{
														ctor: '::',
														_0: _rtfeldman$elm_css$Css$backgroundColor(
															_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base2)),
														_1: {
															ctor: '::',
															_0: _rtfeldman$elm_css$Css$color(
																_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base1)),
															_1: {ctor: '[]'}
														}
													}),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						$class,
						_kirchner$elm_pat$Styles_FileBrowser$FileBrowserFileLinkWrapper,
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$displayFlex,
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$flexFlow1(_rtfeldman$elm_css$Css$column),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$alignItems(_rtfeldman$elm_css$Css$stretch),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$width(
											_kirchner$elm_pat$Styles_FileBrowser$rem(16)),
										_1: {ctor: '[]'}
									}
								}
							}
						}),
					_1: {ctor: '[]'}
				}
			}
		});
}();

var _kirchner$elm_pat$Views_Common$iconSmall = F2(
	function (name, callback) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _kirchner$elm_pat$Styles_Common$class(
					{
						ctor: '::',
						_0: _kirchner$elm_pat$Styles_Common$IconButtonSmall,
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$i,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('material-icons'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onClick(callback),
							_1: {
								ctor: '::',
								_0: _kirchner$elm_pat$Styles_Common$class(
									{
										ctor: '::',
										_0: _kirchner$elm_pat$Styles_Common$IconSmall,
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}
						}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(name),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			});
	});
var _kirchner$elm_pat$Views_Common$iconBig = F2(
	function (name, callback) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _kirchner$elm_pat$Styles_Common$class(
					{
						ctor: '::',
						_0: _kirchner$elm_pat$Styles_Common$IconButtonBig,
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$i,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('material-icons'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onClick(callback),
							_1: {
								ctor: '::',
								_0: _kirchner$elm_pat$Styles_Common$class(
									{
										ctor: '::',
										_0: _kirchner$elm_pat$Styles_Common$IconBig,
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}
						}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(name),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			});
	});

var _kirchner$elm_pat$FileBrowser$github = function (fn) {
	return A2(_elm_lang$core$Basics_ops['++'], 'https://raw.githubusercontent.com/kirchner/elm-pat/master/demo_patterns/', fn);
};
var _kirchner$elm_pat$FileBrowser$update = F2(
	function (msg, model) {
		return model;
	});
var _kirchner$elm_pat$FileBrowser$defaultModel = {};
var _kirchner$elm_pat$FileBrowser$FileBrowser = {};
var _kirchner$elm_pat$FileBrowser$Callbacks = F3(
	function (a, b, c) {
		return {clearSession: a, lift: b, loadRemoteFile: c};
	});
var _kirchner$elm_pat$FileBrowser$NoOp = {ctor: 'NoOp'};
var _kirchner$elm_pat$FileBrowser$view = F2(
	function (callbacks, data) {
		var onClick = function (url) {
			return A2(
				_elm_lang$core$Maybe$withDefault,
				callbacks.lift(_kirchner$elm_pat$FileBrowser$NoOp),
				A2(
					_elm_lang$core$Maybe$map,
					function (loadRemoteFile) {
						return loadRemoteFile(url);
					},
					callbacks.loadRemoteFile));
		};
		var fileLink = F2(
			function (url, label) {
				return A2(
					_elm_lang$html$Html$a,
					{
						ctor: '::',
						_0: _kirchner$elm_pat$Styles_FileBrowser$class(
							{
								ctor: '::',
								_0: _kirchner$elm_pat$Styles_FileBrowser$FileBrowserFileLink,
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onClick(
								onClick(url)),
							_1: {ctor: '[]'}
						}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(label),
						_1: {ctor: '[]'}
					});
			});
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _kirchner$elm_pat$Styles_FileBrowser$class(
					{
						ctor: '::',
						_0: _kirchner$elm_pat$Styles_FileBrowser$FileBrowser,
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			},
			_elm_lang$core$List$concat(
				{
					ctor: '::',
					_0: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _kirchner$elm_pat$Styles_FileBrowser$class(
									{
										ctor: '::',
										_0: _kirchner$elm_pat$Styles_FileBrowser$FileBrowserFileLinkWrapper,
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: A2(
									fileLink,
									_kirchner$elm_pat$FileBrowser$github('demo-demo.json'),
									'demo-demo'),
								_1: {
									ctor: '::',
									_0: A2(
										fileLink,
										_kirchner$elm_pat$FileBrowser$github('basic_bodice.json'),
										'basic bodice'),
									_1: {ctor: '[]'}
								}
							}),
						_1: {ctor: '[]'}
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '::',
							_0: A2(
								_kirchner$elm_pat$Views_Common$iconBig,
								'close',
								A2(
									_elm_lang$core$Maybe$withDefault,
									callbacks.lift(_kirchner$elm_pat$FileBrowser$NoOp),
									callbacks.clearSession)),
							_1: {ctor: '[]'}
						},
						_1: {ctor: '[]'}
					}
				}));
	});

var _ohanhi$keyboard_extra$Keyboard_Extra$boolToInt = function (bool) {
	return bool ? 1 : 0;
};
var _ohanhi$keyboard_extra$Keyboard_Extra$remove = F2(
	function (code, list) {
		return A2(
			_elm_lang$core$List$filter,
			F2(
				function (x, y) {
					return !_elm_lang$core$Native_Utils.eq(x, y);
				})(code),
			list);
	});
var _ohanhi$keyboard_extra$Keyboard_Extra$insert = F2(
	function (code, list) {
		return A2(
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			code,
			A2(_ohanhi$keyboard_extra$Keyboard_Extra$remove, code, list));
	});
var _ohanhi$keyboard_extra$Keyboard_Extra$update = F2(
	function (msg, state) {
		var _p0 = msg;
		if (_p0.ctor === 'Down') {
			return A2(_ohanhi$keyboard_extra$Keyboard_Extra$insert, _p0._0, state);
		} else {
			return A2(_ohanhi$keyboard_extra$Keyboard_Extra$remove, _p0._0, state);
		}
	});
var _ohanhi$keyboard_extra$Keyboard_Extra$Arrows = F2(
	function (a, b) {
		return {x: a, y: b};
	});
var _ohanhi$keyboard_extra$Keyboard_Extra$Up = function (a) {
	return {ctor: 'Up', _0: a};
};
var _ohanhi$keyboard_extra$Keyboard_Extra$Down = function (a) {
	return {ctor: 'Down', _0: a};
};
var _ohanhi$keyboard_extra$Keyboard_Extra$KeyUp = function (a) {
	return {ctor: 'KeyUp', _0: a};
};
var _ohanhi$keyboard_extra$Keyboard_Extra$KeyDown = function (a) {
	return {ctor: 'KeyDown', _0: a};
};
var _ohanhi$keyboard_extra$Keyboard_Extra$updateWithKeyChange = F2(
	function (msg, state) {
		var _p1 = msg;
		if (_p1.ctor === 'Down') {
			var _p2 = _p1._0;
			var nextState = A2(_ohanhi$keyboard_extra$Keyboard_Extra$insert, _p2, state);
			var change = (!_elm_lang$core$Native_Utils.eq(
				_elm_lang$core$List$length(nextState),
				_elm_lang$core$List$length(state))) ? _elm_lang$core$Maybe$Just(
				_ohanhi$keyboard_extra$Keyboard_Extra$KeyDown(_p2)) : _elm_lang$core$Maybe$Nothing;
			return {ctor: '_Tuple2', _0: nextState, _1: change};
		} else {
			var _p3 = _p1._0;
			var nextState = A2(_ohanhi$keyboard_extra$Keyboard_Extra$remove, _p3, state);
			var change = (!_elm_lang$core$Native_Utils.eq(
				_elm_lang$core$List$length(nextState),
				_elm_lang$core$List$length(state))) ? _elm_lang$core$Maybe$Just(
				_ohanhi$keyboard_extra$Keyboard_Extra$KeyUp(_p3)) : _elm_lang$core$Maybe$Nothing;
			return {ctor: '_Tuple2', _0: nextState, _1: change};
		}
	});
var _ohanhi$keyboard_extra$Keyboard_Extra$NoDirection = {ctor: 'NoDirection'};
var _ohanhi$keyboard_extra$Keyboard_Extra$NorthWest = {ctor: 'NorthWest'};
var _ohanhi$keyboard_extra$Keyboard_Extra$West = {ctor: 'West'};
var _ohanhi$keyboard_extra$Keyboard_Extra$SouthWest = {ctor: 'SouthWest'};
var _ohanhi$keyboard_extra$Keyboard_Extra$South = {ctor: 'South'};
var _ohanhi$keyboard_extra$Keyboard_Extra$SouthEast = {ctor: 'SouthEast'};
var _ohanhi$keyboard_extra$Keyboard_Extra$East = {ctor: 'East'};
var _ohanhi$keyboard_extra$Keyboard_Extra$NorthEast = {ctor: 'NorthEast'};
var _ohanhi$keyboard_extra$Keyboard_Extra$North = {ctor: 'North'};
var _ohanhi$keyboard_extra$Keyboard_Extra$arrowsToDir = function (_p4) {
	var _p5 = _p4;
	var _p6 = {ctor: '_Tuple2', _0: _p5.x, _1: _p5.y};
	_v3_8:
	do {
		if (_p6.ctor === '_Tuple2') {
			switch (_p6._0) {
				case 1:
					switch (_p6._1) {
						case 1:
							return _ohanhi$keyboard_extra$Keyboard_Extra$NorthEast;
						case 0:
							return _ohanhi$keyboard_extra$Keyboard_Extra$East;
						case -1:
							return _ohanhi$keyboard_extra$Keyboard_Extra$SouthEast;
						default:
							break _v3_8;
					}
				case 0:
					switch (_p6._1) {
						case 1:
							return _ohanhi$keyboard_extra$Keyboard_Extra$North;
						case -1:
							return _ohanhi$keyboard_extra$Keyboard_Extra$South;
						default:
							break _v3_8;
					}
				case -1:
					switch (_p6._1) {
						case -1:
							return _ohanhi$keyboard_extra$Keyboard_Extra$SouthWest;
						case 0:
							return _ohanhi$keyboard_extra$Keyboard_Extra$West;
						case 1:
							return _ohanhi$keyboard_extra$Keyboard_Extra$NorthWest;
						default:
							break _v3_8;
					}
				default:
					break _v3_8;
			}
		} else {
			break _v3_8;
		}
	} while(false);
	return _ohanhi$keyboard_extra$Keyboard_Extra$NoDirection;
};
var _ohanhi$keyboard_extra$Keyboard_Extra$Other = {ctor: 'Other'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Altgr = {ctor: 'Altgr'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Meta = {ctor: 'Meta'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Quote = {ctor: 'Quote'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CloseBracket = {ctor: 'CloseBracket'};
var _ohanhi$keyboard_extra$Keyboard_Extra$BackSlash = {ctor: 'BackSlash'};
var _ohanhi$keyboard_extra$Keyboard_Extra$OpenBracket = {ctor: 'OpenBracket'};
var _ohanhi$keyboard_extra$Keyboard_Extra$BackQuote = {ctor: 'BackQuote'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Slash = {ctor: 'Slash'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Period = {ctor: 'Period'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Minus = {ctor: 'Minus'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Comma = {ctor: 'Comma'};
var _ohanhi$keyboard_extra$Keyboard_Extra$VolumeUp = {ctor: 'VolumeUp'};
var _ohanhi$keyboard_extra$Keyboard_Extra$VolumeDown = {ctor: 'VolumeDown'};
var _ohanhi$keyboard_extra$Keyboard_Extra$VolumeMute = {ctor: 'VolumeMute'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Tilde = {ctor: 'Tilde'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CloseCurlyBracket = {ctor: 'CloseCurlyBracket'};
var _ohanhi$keyboard_extra$Keyboard_Extra$OpenCurlyBracket = {ctor: 'OpenCurlyBracket'};
var _ohanhi$keyboard_extra$Keyboard_Extra$HyphenMinus = {ctor: 'HyphenMinus'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Pipe = {ctor: 'Pipe'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Plus = {ctor: 'Plus'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Asterisk = {ctor: 'Asterisk'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CloseParen = {ctor: 'CloseParen'};
var _ohanhi$keyboard_extra$Keyboard_Extra$OpenParen = {ctor: 'OpenParen'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Underscore = {ctor: 'Underscore'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Ampersand = {ctor: 'Ampersand'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Percent = {ctor: 'Percent'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Dollar = {ctor: 'Dollar'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Hash = {ctor: 'Hash'};
var _ohanhi$keyboard_extra$Keyboard_Extra$DoubleQuote = {ctor: 'DoubleQuote'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Exclamation = {ctor: 'Exclamation'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Circumflex = {ctor: 'Circumflex'};
var _ohanhi$keyboard_extra$Keyboard_Extra$ScrollLock = {ctor: 'ScrollLock'};
var _ohanhi$keyboard_extra$Keyboard_Extra$NumLock = {ctor: 'NumLock'};
var _ohanhi$keyboard_extra$Keyboard_Extra$F24 = {ctor: 'F24'};
var _ohanhi$keyboard_extra$Keyboard_Extra$F23 = {ctor: 'F23'};
var _ohanhi$keyboard_extra$Keyboard_Extra$F22 = {ctor: 'F22'};
var _ohanhi$keyboard_extra$Keyboard_Extra$F21 = {ctor: 'F21'};
var _ohanhi$keyboard_extra$Keyboard_Extra$F20 = {ctor: 'F20'};
var _ohanhi$keyboard_extra$Keyboard_Extra$F19 = {ctor: 'F19'};
var _ohanhi$keyboard_extra$Keyboard_Extra$F18 = {ctor: 'F18'};
var _ohanhi$keyboard_extra$Keyboard_Extra$F17 = {ctor: 'F17'};
var _ohanhi$keyboard_extra$Keyboard_Extra$F16 = {ctor: 'F16'};
var _ohanhi$keyboard_extra$Keyboard_Extra$F15 = {ctor: 'F15'};
var _ohanhi$keyboard_extra$Keyboard_Extra$F14 = {ctor: 'F14'};
var _ohanhi$keyboard_extra$Keyboard_Extra$F13 = {ctor: 'F13'};
var _ohanhi$keyboard_extra$Keyboard_Extra$F12 = {ctor: 'F12'};
var _ohanhi$keyboard_extra$Keyboard_Extra$F11 = {ctor: 'F11'};
var _ohanhi$keyboard_extra$Keyboard_Extra$F10 = {ctor: 'F10'};
var _ohanhi$keyboard_extra$Keyboard_Extra$F9 = {ctor: 'F9'};
var _ohanhi$keyboard_extra$Keyboard_Extra$F8 = {ctor: 'F8'};
var _ohanhi$keyboard_extra$Keyboard_Extra$F7 = {ctor: 'F7'};
var _ohanhi$keyboard_extra$Keyboard_Extra$F6 = {ctor: 'F6'};
var _ohanhi$keyboard_extra$Keyboard_Extra$F5 = {ctor: 'F5'};
var _ohanhi$keyboard_extra$Keyboard_Extra$F4 = {ctor: 'F4'};
var _ohanhi$keyboard_extra$Keyboard_Extra$F3 = {ctor: 'F3'};
var _ohanhi$keyboard_extra$Keyboard_Extra$F2 = {ctor: 'F2'};
var _ohanhi$keyboard_extra$Keyboard_Extra$F1 = {ctor: 'F1'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Divide = {ctor: 'Divide'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Decimal = {ctor: 'Decimal'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Subtract = {ctor: 'Subtract'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Separator = {ctor: 'Separator'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Add = {ctor: 'Add'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Multiply = {ctor: 'Multiply'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Numpad9 = {ctor: 'Numpad9'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Numpad8 = {ctor: 'Numpad8'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Numpad7 = {ctor: 'Numpad7'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Numpad6 = {ctor: 'Numpad6'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Numpad5 = {ctor: 'Numpad5'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Numpad4 = {ctor: 'Numpad4'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Numpad3 = {ctor: 'Numpad3'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Numpad2 = {ctor: 'Numpad2'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Numpad1 = {ctor: 'Numpad1'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Numpad0 = {ctor: 'Numpad0'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Sleep = {ctor: 'Sleep'};
var _ohanhi$keyboard_extra$Keyboard_Extra$ContextMenu = {ctor: 'ContextMenu'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Super = {ctor: 'Super'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CharZ = {ctor: 'CharZ'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CharY = {ctor: 'CharY'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CharX = {ctor: 'CharX'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CharW = {ctor: 'CharW'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CharV = {ctor: 'CharV'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CharU = {ctor: 'CharU'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CharT = {ctor: 'CharT'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CharS = {ctor: 'CharS'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CharR = {ctor: 'CharR'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CharQ = {ctor: 'CharQ'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CharP = {ctor: 'CharP'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CharO = {ctor: 'CharO'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CharN = {ctor: 'CharN'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CharM = {ctor: 'CharM'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CharL = {ctor: 'CharL'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CharK = {ctor: 'CharK'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CharJ = {ctor: 'CharJ'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CharI = {ctor: 'CharI'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CharH = {ctor: 'CharH'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CharG = {ctor: 'CharG'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CharF = {ctor: 'CharF'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CharE = {ctor: 'CharE'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CharD = {ctor: 'CharD'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CharC = {ctor: 'CharC'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CharB = {ctor: 'CharB'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CharA = {ctor: 'CharA'};
var _ohanhi$keyboard_extra$Keyboard_Extra$wasd = function (keys) {
	var toInt = function (key) {
		return _ohanhi$keyboard_extra$Keyboard_Extra$boolToInt(
			A2(_elm_lang$core$List$member, key, keys));
	};
	var x = toInt(_ohanhi$keyboard_extra$Keyboard_Extra$CharD) - toInt(_ohanhi$keyboard_extra$Keyboard_Extra$CharA);
	var y = toInt(_ohanhi$keyboard_extra$Keyboard_Extra$CharW) - toInt(_ohanhi$keyboard_extra$Keyboard_Extra$CharS);
	return {x: x, y: y};
};
var _ohanhi$keyboard_extra$Keyboard_Extra$wasdDirection = function (_p7) {
	return _ohanhi$keyboard_extra$Keyboard_Extra$arrowsToDir(
		_ohanhi$keyboard_extra$Keyboard_Extra$wasd(_p7));
};
var _ohanhi$keyboard_extra$Keyboard_Extra$At = {ctor: 'At'};
var _ohanhi$keyboard_extra$Keyboard_Extra$QuestionMark = {ctor: 'QuestionMark'};
var _ohanhi$keyboard_extra$Keyboard_Extra$GreaterThan = {ctor: 'GreaterThan'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Equals = {ctor: 'Equals'};
var _ohanhi$keyboard_extra$Keyboard_Extra$LessThan = {ctor: 'LessThan'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Semicolon = {ctor: 'Semicolon'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Colon = {ctor: 'Colon'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Number9 = {ctor: 'Number9'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Number8 = {ctor: 'Number8'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Number7 = {ctor: 'Number7'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Number6 = {ctor: 'Number6'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Number5 = {ctor: 'Number5'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Number4 = {ctor: 'Number4'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Number3 = {ctor: 'Number3'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Number2 = {ctor: 'Number2'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Number1 = {ctor: 'Number1'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Number0 = {ctor: 'Number0'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Delete = {ctor: 'Delete'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Insert = {ctor: 'Insert'};
var _ohanhi$keyboard_extra$Keyboard_Extra$PrintScreen = {ctor: 'PrintScreen'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Execute = {ctor: 'Execute'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Print = {ctor: 'Print'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Select = {ctor: 'Select'};
var _ohanhi$keyboard_extra$Keyboard_Extra$ArrowDown = {ctor: 'ArrowDown'};
var _ohanhi$keyboard_extra$Keyboard_Extra$ArrowRight = {ctor: 'ArrowRight'};
var _ohanhi$keyboard_extra$Keyboard_Extra$ArrowUp = {ctor: 'ArrowUp'};
var _ohanhi$keyboard_extra$Keyboard_Extra$ArrowLeft = {ctor: 'ArrowLeft'};
var _ohanhi$keyboard_extra$Keyboard_Extra$arrows = function (keys) {
	var toInt = function (key) {
		return _ohanhi$keyboard_extra$Keyboard_Extra$boolToInt(
			A2(_elm_lang$core$List$member, key, keys));
	};
	var x = toInt(_ohanhi$keyboard_extra$Keyboard_Extra$ArrowRight) - toInt(_ohanhi$keyboard_extra$Keyboard_Extra$ArrowLeft);
	var y = toInt(_ohanhi$keyboard_extra$Keyboard_Extra$ArrowUp) - toInt(_ohanhi$keyboard_extra$Keyboard_Extra$ArrowDown);
	return {x: x, y: y};
};
var _ohanhi$keyboard_extra$Keyboard_Extra$arrowsDirection = function (_p8) {
	return _ohanhi$keyboard_extra$Keyboard_Extra$arrowsToDir(
		_ohanhi$keyboard_extra$Keyboard_Extra$arrows(_p8));
};
var _ohanhi$keyboard_extra$Keyboard_Extra$Home = {ctor: 'Home'};
var _ohanhi$keyboard_extra$Keyboard_Extra$End = {ctor: 'End'};
var _ohanhi$keyboard_extra$Keyboard_Extra$PageDown = {ctor: 'PageDown'};
var _ohanhi$keyboard_extra$Keyboard_Extra$PageUp = {ctor: 'PageUp'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Space = {ctor: 'Space'};
var _ohanhi$keyboard_extra$Keyboard_Extra$ModeChange = {ctor: 'ModeChange'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Accept = {ctor: 'Accept'};
var _ohanhi$keyboard_extra$Keyboard_Extra$NonConvert = {ctor: 'NonConvert'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Convert = {ctor: 'Convert'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Escape = {ctor: 'Escape'};
var _ohanhi$keyboard_extra$Keyboard_Extra$CapsLock = {ctor: 'CapsLock'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Pause = {ctor: 'Pause'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Alt = {ctor: 'Alt'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Control = {ctor: 'Control'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Shift = {ctor: 'Shift'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Enter = {ctor: 'Enter'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Clear = {ctor: 'Clear'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Tab = {ctor: 'Tab'};
var _ohanhi$keyboard_extra$Keyboard_Extra$BackSpace = {ctor: 'BackSpace'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Help = {ctor: 'Help'};
var _ohanhi$keyboard_extra$Keyboard_Extra$Cancel = {ctor: 'Cancel'};
var _ohanhi$keyboard_extra$Keyboard_Extra$codeBook = {
	ctor: '::',
	_0: {ctor: '_Tuple2', _0: 3, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Cancel},
	_1: {
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 6, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Help},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 8, _1: _ohanhi$keyboard_extra$Keyboard_Extra$BackSpace},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 9, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Tab},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 12, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Clear},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 13, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Enter},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 16, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Shift},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 17, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Control},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 18, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Alt},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 19, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Pause},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 20, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CapsLock},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 27, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Escape},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 28, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Convert},
													_1: {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: 29, _1: _ohanhi$keyboard_extra$Keyboard_Extra$NonConvert},
														_1: {
															ctor: '::',
															_0: {ctor: '_Tuple2', _0: 30, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Accept},
															_1: {
																ctor: '::',
																_0: {ctor: '_Tuple2', _0: 31, _1: _ohanhi$keyboard_extra$Keyboard_Extra$ModeChange},
																_1: {
																	ctor: '::',
																	_0: {ctor: '_Tuple2', _0: 32, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Space},
																	_1: {
																		ctor: '::',
																		_0: {ctor: '_Tuple2', _0: 33, _1: _ohanhi$keyboard_extra$Keyboard_Extra$PageUp},
																		_1: {
																			ctor: '::',
																			_0: {ctor: '_Tuple2', _0: 34, _1: _ohanhi$keyboard_extra$Keyboard_Extra$PageDown},
																			_1: {
																				ctor: '::',
																				_0: {ctor: '_Tuple2', _0: 35, _1: _ohanhi$keyboard_extra$Keyboard_Extra$End},
																				_1: {
																					ctor: '::',
																					_0: {ctor: '_Tuple2', _0: 36, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Home},
																					_1: {
																						ctor: '::',
																						_0: {ctor: '_Tuple2', _0: 37, _1: _ohanhi$keyboard_extra$Keyboard_Extra$ArrowLeft},
																						_1: {
																							ctor: '::',
																							_0: {ctor: '_Tuple2', _0: 38, _1: _ohanhi$keyboard_extra$Keyboard_Extra$ArrowUp},
																							_1: {
																								ctor: '::',
																								_0: {ctor: '_Tuple2', _0: 39, _1: _ohanhi$keyboard_extra$Keyboard_Extra$ArrowRight},
																								_1: {
																									ctor: '::',
																									_0: {ctor: '_Tuple2', _0: 40, _1: _ohanhi$keyboard_extra$Keyboard_Extra$ArrowDown},
																									_1: {
																										ctor: '::',
																										_0: {ctor: '_Tuple2', _0: 41, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Select},
																										_1: {
																											ctor: '::',
																											_0: {ctor: '_Tuple2', _0: 42, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Print},
																											_1: {
																												ctor: '::',
																												_0: {ctor: '_Tuple2', _0: 43, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Execute},
																												_1: {
																													ctor: '::',
																													_0: {ctor: '_Tuple2', _0: 44, _1: _ohanhi$keyboard_extra$Keyboard_Extra$PrintScreen},
																													_1: {
																														ctor: '::',
																														_0: {ctor: '_Tuple2', _0: 45, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Insert},
																														_1: {
																															ctor: '::',
																															_0: {ctor: '_Tuple2', _0: 46, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Delete},
																															_1: {
																																ctor: '::',
																																_0: {ctor: '_Tuple2', _0: 48, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Number0},
																																_1: {
																																	ctor: '::',
																																	_0: {ctor: '_Tuple2', _0: 49, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Number1},
																																	_1: {
																																		ctor: '::',
																																		_0: {ctor: '_Tuple2', _0: 50, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Number2},
																																		_1: {
																																			ctor: '::',
																																			_0: {ctor: '_Tuple2', _0: 51, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Number3},
																																			_1: {
																																				ctor: '::',
																																				_0: {ctor: '_Tuple2', _0: 52, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Number4},
																																				_1: {
																																					ctor: '::',
																																					_0: {ctor: '_Tuple2', _0: 53, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Number5},
																																					_1: {
																																						ctor: '::',
																																						_0: {ctor: '_Tuple2', _0: 54, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Number6},
																																						_1: {
																																							ctor: '::',
																																							_0: {ctor: '_Tuple2', _0: 55, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Number7},
																																							_1: {
																																								ctor: '::',
																																								_0: {ctor: '_Tuple2', _0: 56, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Number8},
																																								_1: {
																																									ctor: '::',
																																									_0: {ctor: '_Tuple2', _0: 57, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Number9},
																																									_1: {
																																										ctor: '::',
																																										_0: {ctor: '_Tuple2', _0: 58, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Colon},
																																										_1: {
																																											ctor: '::',
																																											_0: {ctor: '_Tuple2', _0: 59, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Semicolon},
																																											_1: {
																																												ctor: '::',
																																												_0: {ctor: '_Tuple2', _0: 60, _1: _ohanhi$keyboard_extra$Keyboard_Extra$LessThan},
																																												_1: {
																																													ctor: '::',
																																													_0: {ctor: '_Tuple2', _0: 61, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Equals},
																																													_1: {
																																														ctor: '::',
																																														_0: {ctor: '_Tuple2', _0: 62, _1: _ohanhi$keyboard_extra$Keyboard_Extra$GreaterThan},
																																														_1: {
																																															ctor: '::',
																																															_0: {ctor: '_Tuple2', _0: 63, _1: _ohanhi$keyboard_extra$Keyboard_Extra$QuestionMark},
																																															_1: {
																																																ctor: '::',
																																																_0: {ctor: '_Tuple2', _0: 64, _1: _ohanhi$keyboard_extra$Keyboard_Extra$At},
																																																_1: {
																																																	ctor: '::',
																																																	_0: {ctor: '_Tuple2', _0: 65, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CharA},
																																																	_1: {
																																																		ctor: '::',
																																																		_0: {ctor: '_Tuple2', _0: 66, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CharB},
																																																		_1: {
																																																			ctor: '::',
																																																			_0: {ctor: '_Tuple2', _0: 67, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CharC},
																																																			_1: {
																																																				ctor: '::',
																																																				_0: {ctor: '_Tuple2', _0: 68, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CharD},
																																																				_1: {
																																																					ctor: '::',
																																																					_0: {ctor: '_Tuple2', _0: 69, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CharE},
																																																					_1: {
																																																						ctor: '::',
																																																						_0: {ctor: '_Tuple2', _0: 70, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CharF},
																																																						_1: {
																																																							ctor: '::',
																																																							_0: {ctor: '_Tuple2', _0: 71, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CharG},
																																																							_1: {
																																																								ctor: '::',
																																																								_0: {ctor: '_Tuple2', _0: 72, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CharH},
																																																								_1: {
																																																									ctor: '::',
																																																									_0: {ctor: '_Tuple2', _0: 73, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CharI},
																																																									_1: {
																																																										ctor: '::',
																																																										_0: {ctor: '_Tuple2', _0: 74, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CharJ},
																																																										_1: {
																																																											ctor: '::',
																																																											_0: {ctor: '_Tuple2', _0: 75, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CharK},
																																																											_1: {
																																																												ctor: '::',
																																																												_0: {ctor: '_Tuple2', _0: 76, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CharL},
																																																												_1: {
																																																													ctor: '::',
																																																													_0: {ctor: '_Tuple2', _0: 77, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CharM},
																																																													_1: {
																																																														ctor: '::',
																																																														_0: {ctor: '_Tuple2', _0: 78, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CharN},
																																																														_1: {
																																																															ctor: '::',
																																																															_0: {ctor: '_Tuple2', _0: 79, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CharO},
																																																															_1: {
																																																																ctor: '::',
																																																																_0: {ctor: '_Tuple2', _0: 80, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CharP},
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: {ctor: '_Tuple2', _0: 81, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CharQ},
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: {ctor: '_Tuple2', _0: 82, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CharR},
																																																																		_1: {
																																																																			ctor: '::',
																																																																			_0: {ctor: '_Tuple2', _0: 83, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CharS},
																																																																			_1: {
																																																																				ctor: '::',
																																																																				_0: {ctor: '_Tuple2', _0: 84, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CharT},
																																																																				_1: {
																																																																					ctor: '::',
																																																																					_0: {ctor: '_Tuple2', _0: 85, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CharU},
																																																																					_1: {
																																																																						ctor: '::',
																																																																						_0: {ctor: '_Tuple2', _0: 86, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CharV},
																																																																						_1: {
																																																																							ctor: '::',
																																																																							_0: {ctor: '_Tuple2', _0: 87, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CharW},
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: {ctor: '_Tuple2', _0: 88, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CharX},
																																																																								_1: {
																																																																									ctor: '::',
																																																																									_0: {ctor: '_Tuple2', _0: 89, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CharY},
																																																																									_1: {
																																																																										ctor: '::',
																																																																										_0: {ctor: '_Tuple2', _0: 90, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CharZ},
																																																																										_1: {
																																																																											ctor: '::',
																																																																											_0: {ctor: '_Tuple2', _0: 91, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Super},
																																																																											_1: {
																																																																												ctor: '::',
																																																																												_0: {ctor: '_Tuple2', _0: 93, _1: _ohanhi$keyboard_extra$Keyboard_Extra$ContextMenu},
																																																																												_1: {
																																																																													ctor: '::',
																																																																													_0: {ctor: '_Tuple2', _0: 95, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Sleep},
																																																																													_1: {
																																																																														ctor: '::',
																																																																														_0: {ctor: '_Tuple2', _0: 96, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Numpad0},
																																																																														_1: {
																																																																															ctor: '::',
																																																																															_0: {ctor: '_Tuple2', _0: 97, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Numpad1},
																																																																															_1: {
																																																																																ctor: '::',
																																																																																_0: {ctor: '_Tuple2', _0: 98, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Numpad2},
																																																																																_1: {
																																																																																	ctor: '::',
																																																																																	_0: {ctor: '_Tuple2', _0: 99, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Numpad3},
																																																																																	_1: {
																																																																																		ctor: '::',
																																																																																		_0: {ctor: '_Tuple2', _0: 100, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Numpad4},
																																																																																		_1: {
																																																																																			ctor: '::',
																																																																																			_0: {ctor: '_Tuple2', _0: 101, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Numpad5},
																																																																																			_1: {
																																																																																				ctor: '::',
																																																																																				_0: {ctor: '_Tuple2', _0: 102, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Numpad6},
																																																																																				_1: {
																																																																																					ctor: '::',
																																																																																					_0: {ctor: '_Tuple2', _0: 103, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Numpad7},
																																																																																					_1: {
																																																																																						ctor: '::',
																																																																																						_0: {ctor: '_Tuple2', _0: 104, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Numpad8},
																																																																																						_1: {
																																																																																							ctor: '::',
																																																																																							_0: {ctor: '_Tuple2', _0: 105, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Numpad9},
																																																																																							_1: {
																																																																																								ctor: '::',
																																																																																								_0: {ctor: '_Tuple2', _0: 106, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Multiply},
																																																																																								_1: {
																																																																																									ctor: '::',
																																																																																									_0: {ctor: '_Tuple2', _0: 107, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Add},
																																																																																									_1: {
																																																																																										ctor: '::',
																																																																																										_0: {ctor: '_Tuple2', _0: 108, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Separator},
																																																																																										_1: {
																																																																																											ctor: '::',
																																																																																											_0: {ctor: '_Tuple2', _0: 109, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Subtract},
																																																																																											_1: {
																																																																																												ctor: '::',
																																																																																												_0: {ctor: '_Tuple2', _0: 110, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Decimal},
																																																																																												_1: {
																																																																																													ctor: '::',
																																																																																													_0: {ctor: '_Tuple2', _0: 111, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Divide},
																																																																																													_1: {
																																																																																														ctor: '::',
																																																																																														_0: {ctor: '_Tuple2', _0: 112, _1: _ohanhi$keyboard_extra$Keyboard_Extra$F1},
																																																																																														_1: {
																																																																																															ctor: '::',
																																																																																															_0: {ctor: '_Tuple2', _0: 113, _1: _ohanhi$keyboard_extra$Keyboard_Extra$F2},
																																																																																															_1: {
																																																																																																ctor: '::',
																																																																																																_0: {ctor: '_Tuple2', _0: 114, _1: _ohanhi$keyboard_extra$Keyboard_Extra$F3},
																																																																																																_1: {
																																																																																																	ctor: '::',
																																																																																																	_0: {ctor: '_Tuple2', _0: 115, _1: _ohanhi$keyboard_extra$Keyboard_Extra$F4},
																																																																																																	_1: {
																																																																																																		ctor: '::',
																																																																																																		_0: {ctor: '_Tuple2', _0: 116, _1: _ohanhi$keyboard_extra$Keyboard_Extra$F5},
																																																																																																		_1: {
																																																																																																			ctor: '::',
																																																																																																			_0: {ctor: '_Tuple2', _0: 117, _1: _ohanhi$keyboard_extra$Keyboard_Extra$F6},
																																																																																																			_1: {
																																																																																																				ctor: '::',
																																																																																																				_0: {ctor: '_Tuple2', _0: 118, _1: _ohanhi$keyboard_extra$Keyboard_Extra$F7},
																																																																																																				_1: {
																																																																																																					ctor: '::',
																																																																																																					_0: {ctor: '_Tuple2', _0: 119, _1: _ohanhi$keyboard_extra$Keyboard_Extra$F8},
																																																																																																					_1: {
																																																																																																						ctor: '::',
																																																																																																						_0: {ctor: '_Tuple2', _0: 120, _1: _ohanhi$keyboard_extra$Keyboard_Extra$F9},
																																																																																																						_1: {
																																																																																																							ctor: '::',
																																																																																																							_0: {ctor: '_Tuple2', _0: 121, _1: _ohanhi$keyboard_extra$Keyboard_Extra$F10},
																																																																																																							_1: {
																																																																																																								ctor: '::',
																																																																																																								_0: {ctor: '_Tuple2', _0: 122, _1: _ohanhi$keyboard_extra$Keyboard_Extra$F11},
																																																																																																								_1: {
																																																																																																									ctor: '::',
																																																																																																									_0: {ctor: '_Tuple2', _0: 123, _1: _ohanhi$keyboard_extra$Keyboard_Extra$F12},
																																																																																																									_1: {
																																																																																																										ctor: '::',
																																																																																																										_0: {ctor: '_Tuple2', _0: 124, _1: _ohanhi$keyboard_extra$Keyboard_Extra$F13},
																																																																																																										_1: {
																																																																																																											ctor: '::',
																																																																																																											_0: {ctor: '_Tuple2', _0: 125, _1: _ohanhi$keyboard_extra$Keyboard_Extra$F14},
																																																																																																											_1: {
																																																																																																												ctor: '::',
																																																																																																												_0: {ctor: '_Tuple2', _0: 126, _1: _ohanhi$keyboard_extra$Keyboard_Extra$F15},
																																																																																																												_1: {
																																																																																																													ctor: '::',
																																																																																																													_0: {ctor: '_Tuple2', _0: 127, _1: _ohanhi$keyboard_extra$Keyboard_Extra$F16},
																																																																																																													_1: {
																																																																																																														ctor: '::',
																																																																																																														_0: {ctor: '_Tuple2', _0: 128, _1: _ohanhi$keyboard_extra$Keyboard_Extra$F17},
																																																																																																														_1: {
																																																																																																															ctor: '::',
																																																																																																															_0: {ctor: '_Tuple2', _0: 129, _1: _ohanhi$keyboard_extra$Keyboard_Extra$F18},
																																																																																																															_1: {
																																																																																																																ctor: '::',
																																																																																																																_0: {ctor: '_Tuple2', _0: 130, _1: _ohanhi$keyboard_extra$Keyboard_Extra$F19},
																																																																																																																_1: {
																																																																																																																	ctor: '::',
																																																																																																																	_0: {ctor: '_Tuple2', _0: 131, _1: _ohanhi$keyboard_extra$Keyboard_Extra$F20},
																																																																																																																	_1: {
																																																																																																																		ctor: '::',
																																																																																																																		_0: {ctor: '_Tuple2', _0: 132, _1: _ohanhi$keyboard_extra$Keyboard_Extra$F21},
																																																																																																																		_1: {
																																																																																																																			ctor: '::',
																																																																																																																			_0: {ctor: '_Tuple2', _0: 133, _1: _ohanhi$keyboard_extra$Keyboard_Extra$F22},
																																																																																																																			_1: {
																																																																																																																				ctor: '::',
																																																																																																																				_0: {ctor: '_Tuple2', _0: 134, _1: _ohanhi$keyboard_extra$Keyboard_Extra$F23},
																																																																																																																				_1: {
																																																																																																																					ctor: '::',
																																																																																																																					_0: {ctor: '_Tuple2', _0: 135, _1: _ohanhi$keyboard_extra$Keyboard_Extra$F24},
																																																																																																																					_1: {
																																																																																																																						ctor: '::',
																																																																																																																						_0: {ctor: '_Tuple2', _0: 144, _1: _ohanhi$keyboard_extra$Keyboard_Extra$NumLock},
																																																																																																																						_1: {
																																																																																																																							ctor: '::',
																																																																																																																							_0: {ctor: '_Tuple2', _0: 145, _1: _ohanhi$keyboard_extra$Keyboard_Extra$ScrollLock},
																																																																																																																							_1: {
																																																																																																																								ctor: '::',
																																																																																																																								_0: {ctor: '_Tuple2', _0: 160, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Circumflex},
																																																																																																																								_1: {
																																																																																																																									ctor: '::',
																																																																																																																									_0: {ctor: '_Tuple2', _0: 161, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Exclamation},
																																																																																																																									_1: {
																																																																																																																										ctor: '::',
																																																																																																																										_0: {ctor: '_Tuple2', _0: 162, _1: _ohanhi$keyboard_extra$Keyboard_Extra$DoubleQuote},
																																																																																																																										_1: {
																																																																																																																											ctor: '::',
																																																																																																																											_0: {ctor: '_Tuple2', _0: 163, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Hash},
																																																																																																																											_1: {
																																																																																																																												ctor: '::',
																																																																																																																												_0: {ctor: '_Tuple2', _0: 164, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Dollar},
																																																																																																																												_1: {
																																																																																																																													ctor: '::',
																																																																																																																													_0: {ctor: '_Tuple2', _0: 165, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Percent},
																																																																																																																													_1: {
																																																																																																																														ctor: '::',
																																																																																																																														_0: {ctor: '_Tuple2', _0: 166, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Ampersand},
																																																																																																																														_1: {
																																																																																																																															ctor: '::',
																																																																																																																															_0: {ctor: '_Tuple2', _0: 167, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Underscore},
																																																																																																																															_1: {
																																																																																																																																ctor: '::',
																																																																																																																																_0: {ctor: '_Tuple2', _0: 168, _1: _ohanhi$keyboard_extra$Keyboard_Extra$OpenParen},
																																																																																																																																_1: {
																																																																																																																																	ctor: '::',
																																																																																																																																	_0: {ctor: '_Tuple2', _0: 169, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CloseParen},
																																																																																																																																	_1: {
																																																																																																																																		ctor: '::',
																																																																																																																																		_0: {ctor: '_Tuple2', _0: 170, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Asterisk},
																																																																																																																																		_1: {
																																																																																																																																			ctor: '::',
																																																																																																																																			_0: {ctor: '_Tuple2', _0: 171, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Plus},
																																																																																																																																			_1: {
																																																																																																																																				ctor: '::',
																																																																																																																																				_0: {ctor: '_Tuple2', _0: 172, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Pipe},
																																																																																																																																				_1: {
																																																																																																																																					ctor: '::',
																																																																																																																																					_0: {ctor: '_Tuple2', _0: 173, _1: _ohanhi$keyboard_extra$Keyboard_Extra$HyphenMinus},
																																																																																																																																					_1: {
																																																																																																																																						ctor: '::',
																																																																																																																																						_0: {ctor: '_Tuple2', _0: 174, _1: _ohanhi$keyboard_extra$Keyboard_Extra$OpenCurlyBracket},
																																																																																																																																						_1: {
																																																																																																																																							ctor: '::',
																																																																																																																																							_0: {ctor: '_Tuple2', _0: 175, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CloseCurlyBracket},
																																																																																																																																							_1: {
																																																																																																																																								ctor: '::',
																																																																																																																																								_0: {ctor: '_Tuple2', _0: 176, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Tilde},
																																																																																																																																								_1: {
																																																																																																																																									ctor: '::',
																																																																																																																																									_0: {ctor: '_Tuple2', _0: 181, _1: _ohanhi$keyboard_extra$Keyboard_Extra$VolumeMute},
																																																																																																																																									_1: {
																																																																																																																																										ctor: '::',
																																																																																																																																										_0: {ctor: '_Tuple2', _0: 182, _1: _ohanhi$keyboard_extra$Keyboard_Extra$VolumeDown},
																																																																																																																																										_1: {
																																																																																																																																											ctor: '::',
																																																																																																																																											_0: {ctor: '_Tuple2', _0: 183, _1: _ohanhi$keyboard_extra$Keyboard_Extra$VolumeUp},
																																																																																																																																											_1: {
																																																																																																																																												ctor: '::',
																																																																																																																																												_0: {ctor: '_Tuple2', _0: 186, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Semicolon},
																																																																																																																																												_1: {
																																																																																																																																													ctor: '::',
																																																																																																																																													_0: {ctor: '_Tuple2', _0: 187, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Equals},
																																																																																																																																													_1: {
																																																																																																																																														ctor: '::',
																																																																																																																																														_0: {ctor: '_Tuple2', _0: 188, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Comma},
																																																																																																																																														_1: {
																																																																																																																																															ctor: '::',
																																																																																																																																															_0: {ctor: '_Tuple2', _0: 189, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Minus},
																																																																																																																																															_1: {
																																																																																																																																																ctor: '::',
																																																																																																																																																_0: {ctor: '_Tuple2', _0: 190, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Period},
																																																																																																																																																_1: {
																																																																																																																																																	ctor: '::',
																																																																																																																																																	_0: {ctor: '_Tuple2', _0: 191, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Slash},
																																																																																																																																																	_1: {
																																																																																																																																																		ctor: '::',
																																																																																																																																																		_0: {ctor: '_Tuple2', _0: 192, _1: _ohanhi$keyboard_extra$Keyboard_Extra$BackQuote},
																																																																																																																																																		_1: {
																																																																																																																																																			ctor: '::',
																																																																																																																																																			_0: {ctor: '_Tuple2', _0: 219, _1: _ohanhi$keyboard_extra$Keyboard_Extra$OpenBracket},
																																																																																																																																																			_1: {
																																																																																																																																																				ctor: '::',
																																																																																																																																																				_0: {ctor: '_Tuple2', _0: 220, _1: _ohanhi$keyboard_extra$Keyboard_Extra$BackSlash},
																																																																																																																																																				_1: {
																																																																																																																																																					ctor: '::',
																																																																																																																																																					_0: {ctor: '_Tuple2', _0: 221, _1: _ohanhi$keyboard_extra$Keyboard_Extra$CloseBracket},
																																																																																																																																																					_1: {
																																																																																																																																																						ctor: '::',
																																																																																																																																																						_0: {ctor: '_Tuple2', _0: 222, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Quote},
																																																																																																																																																						_1: {
																																																																																																																																																							ctor: '::',
																																																																																																																																																							_0: {ctor: '_Tuple2', _0: 224, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Meta},
																																																																																																																																																							_1: {
																																																																																																																																																								ctor: '::',
																																																																																																																																																								_0: {ctor: '_Tuple2', _0: 225, _1: _ohanhi$keyboard_extra$Keyboard_Extra$Altgr},
																																																																																																																																																								_1: {ctor: '[]'}
																																																																																																																																																							}
																																																																																																																																																						}
																																																																																																																																																					}
																																																																																																																																																				}
																																																																																																																																																			}
																																																																																																																																																		}
																																																																																																																																																	}
																																																																																																																																																}
																																																																																																																																															}
																																																																																																																																														}
																																																																																																																																													}
																																																																																																																																												}
																																																																																																																																											}
																																																																																																																																										}
																																																																																																																																									}
																																																																																																																																								}
																																																																																																																																							}
																																																																																																																																						}
																																																																																																																																					}
																																																																																																																																				}
																																																																																																																																			}
																																																																																																																																		}
																																																																																																																																	}
																																																																																																																																}
																																																																																																																															}
																																																																																																																														}
																																																																																																																													}
																																																																																																																												}
																																																																																																																											}
																																																																																																																										}
																																																																																																																									}
																																																																																																																								}
																																																																																																																							}
																																																																																																																						}
																																																																																																																					}
																																																																																																																				}
																																																																																																																			}
																																																																																																																		}
																																																																																																																	}
																																																																																																																}
																																																																																																															}
																																																																																																														}
																																																																																																													}
																																																																																																												}
																																																																																																											}
																																																																																																										}
																																																																																																									}
																																																																																																								}
																																																																																																							}
																																																																																																						}
																																																																																																					}
																																																																																																				}
																																																																																																			}
																																																																																																		}
																																																																																																	}
																																																																																																}
																																																																																															}
																																																																																														}
																																																																																													}
																																																																																												}
																																																																																											}
																																																																																										}
																																																																																									}
																																																																																								}
																																																																																							}
																																																																																						}
																																																																																					}
																																																																																				}
																																																																																			}
																																																																																		}
																																																																																	}
																																																																																}
																																																																															}
																																																																														}
																																																																													}
																																																																												}
																																																																											}
																																																																										}
																																																																									}
																																																																								}
																																																																							}
																																																																						}
																																																																					}
																																																																				}
																																																																			}
																																																																		}
																																																																	}
																																																																}
																																																															}
																																																														}
																																																													}
																																																												}
																																																											}
																																																										}
																																																									}
																																																								}
																																																							}
																																																						}
																																																					}
																																																				}
																																																			}
																																																		}
																																																	}
																																																}
																																															}
																																														}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
};
var _ohanhi$keyboard_extra$Keyboard_Extra$toCode = function (key) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		0,
		_elm_lang$core$List$head(
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(
					_elm_lang$core$List$filter,
					function (_p9) {
						return A2(
							F2(
								function (x, y) {
									return _elm_lang$core$Native_Utils.eq(x, y);
								}),
							key,
							_elm_lang$core$Tuple$second(_p9));
					},
					_ohanhi$keyboard_extra$Keyboard_Extra$codeBook))));
};
var _ohanhi$keyboard_extra$Keyboard_Extra$codeDict = _elm_lang$core$Dict$fromList(_ohanhi$keyboard_extra$Keyboard_Extra$codeBook);
var _ohanhi$keyboard_extra$Keyboard_Extra$fromCode = function (code) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		_ohanhi$keyboard_extra$Keyboard_Extra$Other,
		A2(_elm_lang$core$Dict$get, code, _ohanhi$keyboard_extra$Keyboard_Extra$codeDict));
};
var _ohanhi$keyboard_extra$Keyboard_Extra$downs = function (toMsg) {
	return _elm_lang$keyboard$Keyboard$downs(
		function (_p10) {
			return toMsg(
				_ohanhi$keyboard_extra$Keyboard_Extra$fromCode(_p10));
		});
};
var _ohanhi$keyboard_extra$Keyboard_Extra$ups = function (toMsg) {
	return _elm_lang$keyboard$Keyboard$ups(
		function (_p11) {
			return toMsg(
				_ohanhi$keyboard_extra$Keyboard_Extra$fromCode(_p11));
		});
};
var _ohanhi$keyboard_extra$Keyboard_Extra$subscriptions = _elm_lang$core$Platform_Sub$batch(
	{
		ctor: '::',
		_0: _elm_lang$keyboard$Keyboard$downs(
			function (_p12) {
				return _ohanhi$keyboard_extra$Keyboard_Extra$Down(
					_ohanhi$keyboard_extra$Keyboard_Extra$fromCode(_p12));
			}),
		_1: {
			ctor: '::',
			_0: _elm_lang$keyboard$Keyboard$ups(
				function (_p13) {
					return _ohanhi$keyboard_extra$Keyboard_Extra$Up(
						_ohanhi$keyboard_extra$Keyboard_Extra$fromCode(_p13));
				}),
			_1: {ctor: '[]'}
		}
	});
var _ohanhi$keyboard_extra$Keyboard_Extra$targetKey = A2(
	_elm_lang$core$Json_Decode$map,
	_ohanhi$keyboard_extra$Keyboard_Extra$fromCode,
	A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int));

var _kirchner$elm_pat$Store$encodeId = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$core$Json_Encode$int(_p1._0);
};
var _kirchner$elm_pat$Store$encode = F2(
	function (encodeElement, _p2) {
		var _p3 = _p2;
		var _p6 = _p3._0;
		var encodeDict = function (dict) {
			return _elm_lang$core$Json_Encode$list(
				A2(
					_elm_lang$core$List$map,
					function (_p4) {
						var _p5 = _p4;
						return _elm_lang$core$Json_Encode$object(
							{
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'k',
									_1: _elm_lang$core$Json_Encode$int(_p5._0)
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'v',
										_1: encodeElement(_p5._1)
									},
									_1: {ctor: '[]'}
								}
							});
					},
					_elm_lang$core$Dict$toList(dict)));
		};
		return _elm_lang$core$Json_Encode$object(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'data',
					_1: encodeDict(_p6.data)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'nextId',
						_1: _elm_lang$core$Json_Encode$int(_p6.nextId)
					},
					_1: {ctor: '[]'}
				}
			});
	});
var _kirchner$elm_pat$Store$toInt = function (_p7) {
	var _p8 = _p7;
	return _p8._0;
};
var _kirchner$elm_pat$Store$intKeys = function (_p9) {
	var _p10 = _p9;
	return _elm_lang$core$Dict$keys(_p10._0.data);
};
var _kirchner$elm_pat$Store$values = function (_p11) {
	var _p12 = _p11;
	return _elm_lang$core$Dict$values(_p12._0.data);
};
var _kirchner$elm_pat$Store$get = F2(
	function (_p14, _p13) {
		var _p15 = _p14;
		var _p16 = _p13;
		return A2(_elm_lang$core$Dict$get, _p15._0, _p16._0.data);
	});
var _kirchner$elm_pat$Store$Store = function (a) {
	return {ctor: 'Store', _0: a};
};
var _kirchner$elm_pat$Store$empty = _kirchner$elm_pat$Store$Store(
	{data: _elm_lang$core$Dict$empty, nextId: 0});
var _kirchner$elm_pat$Store$update = F3(
	function (_p18, f, _p17) {
		var _p19 = _p18;
		var _p20 = _p17;
		var _p21 = _p20._0;
		return _kirchner$elm_pat$Store$Store(
			_elm_lang$core$Native_Utils.update(
				_p21,
				{
					data: A3(_elm_lang$core$Dict$update, _p19._0, f, _p21.data)
				}));
	});
var _kirchner$elm_pat$Store$remove = F2(
	function (_p23, _p22) {
		var _p24 = _p23;
		var _p25 = _p22;
		var _p26 = _p25._0;
		return _kirchner$elm_pat$Store$Store(
			_elm_lang$core$Native_Utils.update(
				_p26,
				{
					data: A2(_elm_lang$core$Dict$remove, _p24._0, _p26.data)
				}));
	});
var _kirchner$elm_pat$Store$decode = function (decodeElement) {
	var decodeDict = A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$list(
			A3(
				_elm_lang$core$Json_Decode$map2,
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				A2(
					_elm_lang$core$Json_Decode$at,
					{
						ctor: '::',
						_0: 'k',
						_1: {ctor: '[]'}
					},
					_elm_lang$core$Json_Decode$int),
				A2(
					_elm_lang$core$Json_Decode$at,
					{
						ctor: '::',
						_0: 'v',
						_1: {ctor: '[]'}
					},
					decodeElement))));
	return A3(
		_elm_lang$core$Json_Decode$map2,
		F2(
			function (data, nextId) {
				return _kirchner$elm_pat$Store$Store(
					{data: data, nextId: nextId});
			}),
		A2(
			_elm_lang$core$Json_Decode$at,
			{
				ctor: '::',
				_0: 'data',
				_1: {ctor: '[]'}
			},
			decodeDict),
		A2(
			_elm_lang$core$Json_Decode$at,
			{
				ctor: '::',
				_0: 'nextId',
				_1: {ctor: '[]'}
			},
			_elm_lang$core$Json_Decode$int));
};
var _kirchner$elm_pat$Store$Id = function (a) {
	return {ctor: 'Id', _0: a};
};
var _kirchner$elm_pat$Store$idUnsafe = _kirchner$elm_pat$Store$Id;
var _kirchner$elm_pat$Store$insert = F2(
	function (element, _p27) {
		var _p28 = _p27;
		var _p29 = _p28._0;
		return {
			ctor: '_Tuple2',
			_0: _kirchner$elm_pat$Store$Id(_p29.nextId),
			_1: _kirchner$elm_pat$Store$Store(
				_elm_lang$core$Native_Utils.update(
					_p29,
					{
						data: A3(_elm_lang$core$Dict$insert, _p29.nextId, element, _p29.data),
						nextId: 1 + _p29.nextId
					}))
		};
	});
var _kirchner$elm_pat$Store$keys = function (_p30) {
	var _p31 = _p30;
	return A2(
		_elm_lang$core$List$map,
		_kirchner$elm_pat$Store$Id,
		_elm_lang$core$Dict$keys(_p31._0.data));
};
var _kirchner$elm_pat$Store$fromInt = function (id) {
	return _kirchner$elm_pat$Store$Id(id);
};
var _kirchner$elm_pat$Store$toList = function (_p32) {
	var _p33 = _p32;
	return A2(
		_elm_lang$core$List$map,
		function (_p34) {
			var _p35 = _p34;
			return {
				ctor: '_Tuple2',
				_0: _kirchner$elm_pat$Store$Id(_p35._0),
				_1: _p35._1
			};
		},
		_elm_lang$core$Dict$toList(_p33._0.data));
};
var _kirchner$elm_pat$Store$decodeId = A2(_elm_lang$core$Json_Decode$map, _kirchner$elm_pat$Store$Id, _elm_lang$core$Json_Decode$int);

var _kirchner$elm_pat$Point$encode = function (_p0) {
	var _p1 = _p0;
	var _p3 = _p1._0;
	var encodeName = _elm_lang$core$Json_Encode$string(_p3.name);
	var def = F7(
		function (tag, e0, e1, id, id0, id1, ratio) {
			return _elm_lang$core$Json_Encode$object(
				{
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'tag',
						_1: _elm_lang$core$Json_Encode$string(tag)
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'e0',
							_1: _kirchner$elm_pat$Expr$encode(e0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'e1',
								_1: _kirchner$elm_pat$Expr$encode(e1)
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'id',
									_1: _kirchner$elm_pat$Store$encodeId(id)
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'id0',
										_1: _kirchner$elm_pat$Store$encodeId(id0)
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'id1',
											_1: _kirchner$elm_pat$Store$encodeId(id1)
										},
										_1: {
											ctor: '::',
											_0: {
												ctor: '_Tuple2',
												_0: 'ratio',
												_1: _elm_lang$core$Json_Encode$float(ratio)
											},
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				});
		});
	var encodeData = function () {
		var _p2 = _p3.data;
		switch (_p2.ctor) {
			case 'Absolute':
				return A7(
					def,
					'absolute',
					_p2._0,
					_p2._1,
					_kirchner$elm_pat$Store$idUnsafe(0),
					_kirchner$elm_pat$Store$idUnsafe(0),
					_kirchner$elm_pat$Store$idUnsafe(0),
					0.0);
			case 'Relative':
				return A7(
					def,
					'relative',
					_p2._1,
					_p2._2,
					_p2._0,
					_kirchner$elm_pat$Store$idUnsafe(0),
					_kirchner$elm_pat$Store$idUnsafe(0),
					0.0);
			case 'Distance':
				return A7(
					def,
					'distance',
					_p2._1,
					_p2._2,
					_p2._0,
					_kirchner$elm_pat$Store$idUnsafe(0),
					_kirchner$elm_pat$Store$idUnsafe(0),
					0.0);
			default:
				return A7(
					def,
					'between',
					_kirchner$elm_pat$Expr$Number(0.0),
					_kirchner$elm_pat$Expr$Number(0.0),
					_kirchner$elm_pat$Store$idUnsafe(0),
					_p2._0,
					_p2._1,
					_p2._2);
		}
	}();
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'name', _1: encodeName},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'data', _1: encodeData},
				_1: {ctor: '[]'}
			}
		});
};
var _kirchner$elm_pat$Point$position = F3(
	function (store, variables, _p4) {
		var _p5 = _p4;
		var lookUp = function (id) {
			return A2(
				_elm_lang$core$Maybe$andThen,
				A2(_kirchner$elm_pat$Point$position, store, variables),
				A2(_kirchner$elm_pat$Store$get, id, store));
		};
		var _p6 = _p5._0.data;
		switch (_p6.ctor) {
			case 'Absolute':
				return A3(
					_elm_lang$core$Maybe$map2,
					_elm_community$linear_algebra$Math_Vector2$vec2,
					A2(_kirchner$elm_pat$Expr$compute, variables, _p6._0),
					A2(_kirchner$elm_pat$Expr$compute, variables, _p6._1));
			case 'Relative':
				return A4(
					_elm_lang$core$Maybe$map3,
					F3(
						function (v, p, q) {
							return A2(
								_elm_community$linear_algebra$Math_Vector2$add,
								A2(_elm_community$linear_algebra$Math_Vector2$vec2, p, q),
								v);
						}),
					lookUp(_p6._0),
					A2(_kirchner$elm_pat$Expr$compute, variables, _p6._1),
					A2(_kirchner$elm_pat$Expr$compute, variables, _p6._2));
			case 'Distance':
				var coords = F3(
					function (anchorPosition, distance, angle) {
						return A2(
							_elm_community$linear_algebra$Math_Vector2$add,
							anchorPosition,
							A2(
								_elm_community$linear_algebra$Math_Vector2$scale,
								distance,
								A2(
									_elm_community$linear_algebra$Math_Vector2$vec2,
									_elm_lang$core$Basics$cos(angle),
									_elm_lang$core$Basics$sin(angle))));
					});
				return A4(
					_elm_lang$core$Maybe$map3,
					coords,
					lookUp(_p6._0),
					A2(_kirchner$elm_pat$Expr$compute, variables, _p6._1),
					A2(_kirchner$elm_pat$Expr$compute, variables, _p6._2));
			default:
				return A3(
					_elm_lang$core$Maybe$map2,
					F2(
						function (v, w) {
							return A2(
								_elm_community$linear_algebra$Math_Vector2$add,
								w,
								A2(
									_elm_community$linear_algebra$Math_Vector2$scale,
									_p6._2,
									A2(_elm_community$linear_algebra$Math_Vector2$sub, w, v)));
						}),
					lookUp(_p6._0),
					lookUp(_p6._1));
		}
	});
var _kirchner$elm_pat$Point$positionById = F3(
	function (store, variables, id) {
		return A2(
			_elm_lang$core$Maybe$andThen,
			A2(_kirchner$elm_pat$Point$position, store, variables),
			A2(_kirchner$elm_pat$Store$get, id, store));
	});
var _kirchner$elm_pat$Point$dispatch = F2(
	function (handlers, _p7) {
		var _p8 = _p7;
		var _p10 = _p8;
		var _p9 = _p8._0.data;
		switch (_p9.ctor) {
			case 'Absolute':
				return A3(handlers.withAbsolute, _p10, _p9._0, _p9._1);
			case 'Relative':
				return A4(handlers.withRelative, _p10, _p9._0, _p9._1, _p9._2);
			case 'Distance':
				return A4(handlers.withDistance, _p10, _p9._0, _p9._1, _p9._2);
			default:
				return A4(handlers.withBetween, _p10, _p9._0, _p9._1, _p9._2);
		}
	});
var _kirchner$elm_pat$Point$name = function (_p11) {
	var _p12 = _p11;
	return _p12._0.name;
};
var _kirchner$elm_pat$Point$Handlers = F4(
	function (a, b, c, d) {
		return {withAbsolute: a, withRelative: b, withDistance: c, withBetween: d};
	});
var _kirchner$elm_pat$Point$Point = function (a) {
	return {ctor: 'Point', _0: a};
};
var _kirchner$elm_pat$Point$setName = F2(
	function (name, _p13) {
		var _p14 = _p13;
		return _kirchner$elm_pat$Point$Point(
			_elm_lang$core$Native_Utils.update(
				_p14._0,
				{name: name}));
	});
var _kirchner$elm_pat$Point$Between = F3(
	function (a, b, c) {
		return {ctor: 'Between', _0: a, _1: b, _2: c};
	});
var _kirchner$elm_pat$Point$between = F3(
	function (first, last, ratio) {
		return _kirchner$elm_pat$Point$Point(
			{
				name: '',
				data: A3(_kirchner$elm_pat$Point$Between, first, last, ratio)
			});
	});
var _kirchner$elm_pat$Point$Distance = F3(
	function (a, b, c) {
		return {ctor: 'Distance', _0: a, _1: b, _2: c};
	});
var _kirchner$elm_pat$Point$distance = F3(
	function (id, angle, distance) {
		return _kirchner$elm_pat$Point$Point(
			{
				name: '',
				data: A3(_kirchner$elm_pat$Point$Distance, id, angle, distance)
			});
	});
var _kirchner$elm_pat$Point$Relative = F3(
	function (a, b, c) {
		return {ctor: 'Relative', _0: a, _1: b, _2: c};
	});
var _kirchner$elm_pat$Point$relative = F3(
	function (id, x, y) {
		return _kirchner$elm_pat$Point$Point(
			{
				name: '',
				data: A3(_kirchner$elm_pat$Point$Relative, id, x, y)
			});
	});
var _kirchner$elm_pat$Point$Absolute = F2(
	function (a, b) {
		return {ctor: 'Absolute', _0: a, _1: b};
	});
var _kirchner$elm_pat$Point$absolute = F2(
	function (x, y) {
		return _kirchner$elm_pat$Point$Point(
			{
				name: '',
				data: A2(_kirchner$elm_pat$Point$Absolute, x, y)
			});
	});
var _kirchner$elm_pat$Point$decode = function () {
	var nameDecoder = _elm_lang$core$Json_Decode$string;
	var dataDecoder = A2(
		_elm_lang$core$Json_Decode$andThen,
		function (tag) {
			var _p15 = tag;
			switch (_p15) {
				case 'absolute':
					return A3(
						_elm_lang$core$Json_Decode$map2,
						_kirchner$elm_pat$Point$Absolute,
						A2(
							_elm_lang$core$Json_Decode$at,
							{
								ctor: '::',
								_0: 'e0',
								_1: {ctor: '[]'}
							},
							_kirchner$elm_pat$Expr$decode),
						A2(
							_elm_lang$core$Json_Decode$at,
							{
								ctor: '::',
								_0: 'e1',
								_1: {ctor: '[]'}
							},
							_kirchner$elm_pat$Expr$decode));
				case 'relative':
					return A4(
						_elm_lang$core$Json_Decode$map3,
						_kirchner$elm_pat$Point$Relative,
						A2(
							_elm_lang$core$Json_Decode$at,
							{
								ctor: '::',
								_0: 'id',
								_1: {ctor: '[]'}
							},
							_kirchner$elm_pat$Store$decodeId),
						A2(
							_elm_lang$core$Json_Decode$at,
							{
								ctor: '::',
								_0: 'e0',
								_1: {ctor: '[]'}
							},
							_kirchner$elm_pat$Expr$decode),
						A2(
							_elm_lang$core$Json_Decode$at,
							{
								ctor: '::',
								_0: 'e1',
								_1: {ctor: '[]'}
							},
							_kirchner$elm_pat$Expr$decode));
				case 'distance':
					return A4(
						_elm_lang$core$Json_Decode$map3,
						_kirchner$elm_pat$Point$Distance,
						A2(
							_elm_lang$core$Json_Decode$at,
							{
								ctor: '::',
								_0: 'id',
								_1: {ctor: '[]'}
							},
							_kirchner$elm_pat$Store$decodeId),
						A2(
							_elm_lang$core$Json_Decode$at,
							{
								ctor: '::',
								_0: 'e0',
								_1: {ctor: '[]'}
							},
							_kirchner$elm_pat$Expr$decode),
						A2(
							_elm_lang$core$Json_Decode$at,
							{
								ctor: '::',
								_0: 'e1',
								_1: {ctor: '[]'}
							},
							_kirchner$elm_pat$Expr$decode));
				case 'between':
					return A4(
						_elm_lang$core$Json_Decode$map3,
						_kirchner$elm_pat$Point$Between,
						A2(
							_elm_lang$core$Json_Decode$at,
							{
								ctor: '::',
								_0: 'id0',
								_1: {ctor: '[]'}
							},
							_kirchner$elm_pat$Store$decodeId),
						A2(
							_elm_lang$core$Json_Decode$at,
							{
								ctor: '::',
								_0: 'id1',
								_1: {ctor: '[]'}
							},
							_kirchner$elm_pat$Store$decodeId),
						A2(
							_elm_lang$core$Json_Decode$at,
							{
								ctor: '::',
								_0: 'ratio',
								_1: {ctor: '[]'}
							},
							_elm_lang$core$Json_Decode$float));
				default:
					return _elm_lang$core$Json_Decode$fail('decodePoint: mailformed input');
			}
		},
		A2(
			_elm_lang$core$Json_Decode$at,
			{
				ctor: '::',
				_0: 'tag',
				_1: {ctor: '[]'}
			},
			_elm_lang$core$Json_Decode$string));
	return A3(
		_elm_lang$core$Json_Decode$map2,
		F2(
			function (name, data) {
				return _kirchner$elm_pat$Point$Point(
					{name: name, data: data});
			}),
		A2(
			_elm_lang$core$Json_Decode$at,
			{
				ctor: '::',
				_0: 'name',
				_1: {ctor: '[]'}
			},
			nameDecoder),
		A2(
			_elm_lang$core$Json_Decode$at,
			{
				ctor: '::',
				_0: 'data',
				_1: {ctor: '[]'}
			},
			dataDecoder));
}();

var _kirchner$elm_pat$Piece$insertBefore = F5(
	function (store, variables, $new, reference, piece) {
		return _elm_lang$core$Native_Utils.crash(
			'Piece',
			{
				start: {line: 90, column: 5},
				end: {line: 90, column: 16}
			})('implement insertBefore');
	});
var _kirchner$elm_pat$Piece$nextHelper = F3(
	function (firstId, id, points) {
		nextHelper:
		while (true) {
			var _p0 = points;
			if (_p0.ctor === '::') {
				if (_p0._1.ctor === '::') {
					var _p1 = _p0._1._0;
					if (_elm_lang$core$Native_Utils.eq(id, _p0._0)) {
						return _elm_lang$core$Maybe$Just(_p1);
					} else {
						var _v1 = firstId,
							_v2 = id,
							_v3 = {ctor: '::', _0: _p1, _1: _p0._1._1};
						firstId = _v1;
						id = _v2;
						points = _v3;
						continue nextHelper;
					}
				} else {
					return _elm_lang$core$Native_Utils.eq(id, _p0._0) ? _elm_lang$core$Maybe$Just(firstId) : _elm_lang$core$Maybe$Nothing;
				}
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		}
	});
var _kirchner$elm_pat$Piece$next = F2(
	function (id, _p2) {
		var _p3 = _p2;
		return A3(_kirchner$elm_pat$Piece$nextHelper, id, id, _p3._0.points);
	});
var _kirchner$elm_pat$Piece$toList = function (_p4) {
	var _p5 = _p4;
	return _p5._0.points;
};
var _kirchner$elm_pat$Piece$encode = function (piece) {
	return _elm_lang$core$Json_Encode$list(
		A2(
			_elm_lang$core$List$map,
			_kirchner$elm_pat$Store$encodeId,
			_kirchner$elm_pat$Piece$toList(piece)));
};
var _kirchner$elm_pat$Piece$Piece = function (a) {
	return {ctor: 'Piece', _0: a};
};
var _kirchner$elm_pat$Piece$fromList = F3(
	function (store, variables, points) {
		var pointCount = _elm_lang$core$List$length(points);
		var positions = A2(
			_elm_lang$core$List$filterMap,
			A2(_kirchner$elm_pat$Point$positionById, store, variables),
			points);
		return (_elm_lang$core$Native_Utils.eq(pointCount, 0) || (_elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$List$length(positions),
			pointCount) < 0)) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
			_kirchner$elm_pat$Piece$Piece(
				{points: points}));
	});
var _kirchner$elm_pat$Piece$insertAfter = F5(
	function (store, variables, $new, reference, _p6) {
		var _p7 = _p6;
		var insert = F2(
			function (id, list) {
				return _elm_lang$core$Native_Utils.eq(id, reference) ? {
					ctor: '::',
					_0: $new,
					_1: {ctor: '::', _0: id, _1: list}
				} : {ctor: '::', _0: id, _1: list};
			});
		var newPoints = A3(
			_elm_lang$core$List$foldl,
			insert,
			{ctor: '[]'},
			_p7._0.points);
		return _kirchner$elm_pat$Piece$Piece(
			{points: newPoints});
	});
var _kirchner$elm_pat$Piece$decode = A2(
	_elm_lang$core$Json_Decode$map,
	function (points) {
		return _kirchner$elm_pat$Piece$Piece(
			{points: points});
	},
	_elm_lang$core$Json_Decode$list(_kirchner$elm_pat$Store$decodeId));

var _kirchner$elm_pat$Svg_Extra$label = function (options) {
	return _elm_lang$svg$Svg$text_(
		{
			ctor: '::',
			_0: _elm_lang$svg$Svg_Attributes$fontSize('14px'),
			_1: {
				ctor: '::',
				_0: _elm_lang$svg$Svg_Attributes$color(_kirchner$elm_pat$Styles_Colors$base0),
				_1: options
			}
		});
};
var _kirchner$elm_pat$Svg_Extra$defaultArcConfig = {radius: 65, label: true};
var _kirchner$elm_pat$Svg_Extra$translate2 = F2(
	function (x, y) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'translate(',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(x),
				A2(
					_elm_lang$core$Basics_ops['++'],
					',',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(y),
						')'))));
	});
var _kirchner$elm_pat$Svg_Extra$translate = function (u) {
	return A2(
		_kirchner$elm_pat$Svg_Extra$translate2,
		_elm_community$linear_algebra$Math_Vector2$getX(u),
		_elm_community$linear_algebra$Math_Vector2$getY(u));
};
var _kirchner$elm_pat$Svg_Extra$drawAngleArc = F3(
	function (config, anchorPosition, pointPosition) {
		var format = _cuducos$elm_format_number$FormatNumber$format(
			{decimals: 2, thousandSeparator: ' ', decimalSeparator: '.'});
		var v = A2(_elm_community$linear_algebra$Math_Vector2$sub, pointPosition, anchorPosition);
		var radians = 0 - A2(
			_elm_lang$core$Basics$atan2,
			_elm_community$linear_algebra$Math_Vector2$getY(v),
			_elm_community$linear_algebra$Math_Vector2$getX(v));
		var a = A2(
			_elm_community$linear_algebra$Math_Vector2$scale,
			config.radius,
			A2(
				_elm_community$linear_algebra$Math_Vector2$vec2,
				_elm_lang$core$Basics$cos(radians),
				0 - _elm_lang$core$Basics$sin(radians)));
		var _p0 = {
			ctor: '_Tuple2',
			_0: _elm_community$linear_algebra$Math_Vector2$getX(a),
			_1: _elm_community$linear_algebra$Math_Vector2$getY(a)
		};
		var x = _p0._0;
		var y = _p0._1;
		return A2(
			_elm_lang$svg$Svg$g,
			{
				ctor: '::',
				_0: _elm_lang$svg$Svg_Attributes$transform(
					_kirchner$elm_pat$Svg_Extra$translate(anchorPosition)),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$svg$Svg$path,
					{
						ctor: '::',
						_0: _elm_lang$svg$Svg_Attributes$d(
							A2(
								_elm_lang$core$String$join,
								' ',
								{
									ctor: '::',
									_0: 'M0,0',
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$core$Basics_ops['++'],
											'h',
											_elm_lang$core$Basics$toString(config.radius)),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$core$Basics_ops['++'],
												'A',
												A2(
													_elm_lang$core$Basics_ops['++'],
													_elm_lang$core$Basics$toString(config.radius),
													A2(
														_elm_lang$core$Basics_ops['++'],
														',',
														_elm_lang$core$Basics$toString(config.radius)))),
											_1: {
												ctor: '::',
												_0: (_elm_lang$core$Native_Utils.cmp(radians, 0) < 0) ? '0 0,1' : '0 0,0',
												_1: {
													ctor: '::',
													_0: A2(
														_elm_lang$core$Basics_ops['++'],
														_elm_lang$core$Basics$toString(x),
														A2(
															_elm_lang$core$Basics_ops['++'],
															',',
															_elm_lang$core$Basics$toString(y))),
													_1: {
														ctor: '::',
														_0: 'z',
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}
								})),
						_1: {
							ctor: '::',
							_0: _elm_lang$svg$Svg_Attributes$stroke(_kirchner$elm_pat$Styles_Colors$base0),
							_1: {
								ctor: '::',
								_0: _elm_lang$svg$Svg_Attributes$fill('transparent'),
								_1: {ctor: '[]'}
							}
						}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: A2(
						_kirchner$elm_pat$Svg_Extra$label,
						{
							ctor: '::',
							_0: _elm_lang$svg$Svg_Attributes$transform(
								_kirchner$elm_pat$Svg_Extra$translate(
									A2(_elm_community$linear_algebra$Math_Vector2$vec2, 10, -10))),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$svg$Svg$text(
								format((180 * radians) / _elm_lang$core$Basics$pi)),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _kirchner$elm_pat$Svg_Extra$drawVerticalLine = function (x) {
	return A2(
		_elm_lang$svg$Svg$line,
		{
			ctor: '::',
			_0: _elm_lang$svg$Svg_Attributes$x1(
				_elm_lang$core$Basics$toString(x)),
			_1: {
				ctor: '::',
				_0: _elm_lang$svg$Svg_Attributes$y1('-1000'),
				_1: {
					ctor: '::',
					_0: _elm_lang$svg$Svg_Attributes$x2(
						_elm_lang$core$Basics$toString(x)),
					_1: {
						ctor: '::',
						_0: _elm_lang$svg$Svg_Attributes$y2('1000'),
						_1: {
							ctor: '::',
							_0: _elm_lang$svg$Svg_Attributes$strokeWidth('1'),
							_1: {
								ctor: '::',
								_0: _elm_lang$svg$Svg_Attributes$stroke(_kirchner$elm_pat$Styles_Colors$base1),
								_1: {
									ctor: '::',
									_0: _elm_lang$svg$Svg_Attributes$strokeDasharray('5, 5'),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			}
		},
		{ctor: '[]'});
};
var _kirchner$elm_pat$Svg_Extra$drawHorizontalLine = function (y) {
	return A2(
		_elm_lang$svg$Svg$line,
		{
			ctor: '::',
			_0: _elm_lang$svg$Svg_Attributes$x1('-1000'),
			_1: {
				ctor: '::',
				_0: _elm_lang$svg$Svg_Attributes$y1(
					_elm_lang$core$Basics$toString(y)),
				_1: {
					ctor: '::',
					_0: _elm_lang$svg$Svg_Attributes$x2('1000'),
					_1: {
						ctor: '::',
						_0: _elm_lang$svg$Svg_Attributes$y2(
							_elm_lang$core$Basics$toString(y)),
						_1: {
							ctor: '::',
							_0: _elm_lang$svg$Svg_Attributes$strokeWidth('1'),
							_1: {
								ctor: '::',
								_0: _elm_lang$svg$Svg_Attributes$stroke(_kirchner$elm_pat$Styles_Colors$base1),
								_1: {
									ctor: '::',
									_0: _elm_lang$svg$Svg_Attributes$strokeDasharray('5, 5'),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			}
		},
		{ctor: '[]'});
};
var _kirchner$elm_pat$Svg_Extra$drawLineSegmentWith = F3(
	function (callback, v, w) {
		var line = A3(_elm_lang$core$Basics$flip, _elm_community$linear_algebra$Math_Vector2$sub, v, w);
		var length = _elm_community$linear_algebra$Math_Vector2$length(line);
		var angle = (A2(
			_elm_lang$core$Basics$atan2,
			_elm_community$linear_algebra$Math_Vector2$getY(line),
			_elm_community$linear_algebra$Math_Vector2$getX(line)) * 180) / _elm_lang$core$Basics$pi;
		return A2(
			_elm_lang$svg$Svg$g,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$svg$Svg$line,
					{
						ctor: '::',
						_0: _elm_lang$svg$Svg_Attributes$x1(
							_elm_lang$core$Basics$toString(
								_elm_community$linear_algebra$Math_Vector2$getX(v))),
						_1: {
							ctor: '::',
							_0: _elm_lang$svg$Svg_Attributes$y1(
								_elm_lang$core$Basics$toString(
									_elm_community$linear_algebra$Math_Vector2$getY(v))),
							_1: {
								ctor: '::',
								_0: _elm_lang$svg$Svg_Attributes$x2(
									_elm_lang$core$Basics$toString(
										_elm_community$linear_algebra$Math_Vector2$getX(w))),
								_1: {
									ctor: '::',
									_0: _elm_lang$svg$Svg_Attributes$y2(
										_elm_lang$core$Basics$toString(
											_elm_community$linear_algebra$Math_Vector2$getY(w))),
									_1: {
										ctor: '::',
										_0: _elm_lang$svg$Svg_Attributes$strokeWidth('1'),
										_1: {
											ctor: '::',
											_0: _elm_lang$svg$Svg_Attributes$stroke(_kirchner$elm_pat$Styles_Colors$blue),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$svg$Svg$rect,
						{
							ctor: '::',
							_0: _elm_lang$svg$Svg_Attributes$x(
								_elm_lang$core$Basics$toString(
									_elm_community$linear_algebra$Math_Vector2$getX(v) - 5)),
							_1: {
								ctor: '::',
								_0: _elm_lang$svg$Svg_Attributes$y(
									_elm_lang$core$Basics$toString(
										_elm_community$linear_algebra$Math_Vector2$getY(v) - 5)),
								_1: {
									ctor: '::',
									_0: _elm_lang$svg$Svg_Attributes$width(
										_elm_lang$core$Basics$toString(length + 10)),
									_1: {
										ctor: '::',
										_0: _elm_lang$svg$Svg_Attributes$height('10'),
										_1: {
											ctor: '::',
											_0: _elm_lang$svg$Svg_Attributes$strokeWidth('0'),
											_1: {
												ctor: '::',
												_0: _elm_lang$svg$Svg_Attributes$fill('transparent'),
												_1: {
													ctor: '::',
													_0: _elm_lang$svg$Svg_Events$onClick(callback),
													_1: {
														ctor: '::',
														_0: A2(
															_elm_lang$virtual_dom$VirtualDom$attribute,
															'transform-origin',
															A2(
																_elm_lang$core$Basics_ops['++'],
																_elm_lang$core$Basics$toString(
																	_elm_community$linear_algebra$Math_Vector2$getX(v)),
																A2(
																	_elm_lang$core$Basics_ops['++'],
																	'px ',
																	A2(
																		_elm_lang$core$Basics_ops['++'],
																		_elm_lang$core$Basics$toString(
																			_elm_community$linear_algebra$Math_Vector2$getY(v)),
																		'px')))),
														_1: {
															ctor: '::',
															_0: _elm_lang$svg$Svg_Attributes$transform(
																A2(
																	_elm_lang$core$Basics_ops['++'],
																	'rotate(',
																	A2(
																		_elm_lang$core$Basics_ops['++'],
																		_elm_lang$core$Basics$toString(angle),
																		')'))),
															_1: {ctor: '[]'}
														}
													}
												}
											}
										}
									}
								}
							}
						},
						{ctor: '[]'}),
					_1: {ctor: '[]'}
				}
			});
	});
var _kirchner$elm_pat$Svg_Extra$drawLineSegment = F2(
	function (v, w) {
		return A2(
			_elm_lang$svg$Svg$line,
			{
				ctor: '::',
				_0: _elm_lang$svg$Svg_Attributes$x1(
					_elm_lang$core$Basics$toString(
						_elm_community$linear_algebra$Math_Vector2$getX(v))),
				_1: {
					ctor: '::',
					_0: _elm_lang$svg$Svg_Attributes$y1(
						_elm_lang$core$Basics$toString(
							_elm_community$linear_algebra$Math_Vector2$getY(v))),
					_1: {
						ctor: '::',
						_0: _elm_lang$svg$Svg_Attributes$x2(
							_elm_lang$core$Basics$toString(
								_elm_community$linear_algebra$Math_Vector2$getX(w))),
						_1: {
							ctor: '::',
							_0: _elm_lang$svg$Svg_Attributes$y2(
								_elm_lang$core$Basics$toString(
									_elm_community$linear_algebra$Math_Vector2$getY(w))),
							_1: {
								ctor: '::',
								_0: _elm_lang$svg$Svg_Attributes$strokeWidth('1'),
								_1: {
									ctor: '::',
									_0: _elm_lang$svg$Svg_Attributes$stroke(_kirchner$elm_pat$Styles_Colors$blue),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			},
			{ctor: '[]'});
	});
var _kirchner$elm_pat$Svg_Extra$drawArrow = F2(
	function (v, w) {
		return A2(
			_elm_lang$svg$Svg$line,
			{
				ctor: '::',
				_0: _elm_lang$svg$Svg_Attributes$x1(
					_elm_lang$core$Basics$toString(
						_elm_community$linear_algebra$Math_Vector2$getX(v))),
				_1: {
					ctor: '::',
					_0: _elm_lang$svg$Svg_Attributes$y1(
						_elm_lang$core$Basics$toString(
							_elm_community$linear_algebra$Math_Vector2$getY(v))),
					_1: {
						ctor: '::',
						_0: _elm_lang$svg$Svg_Attributes$x2(
							_elm_lang$core$Basics$toString(
								_elm_community$linear_algebra$Math_Vector2$getX(w))),
						_1: {
							ctor: '::',
							_0: _elm_lang$svg$Svg_Attributes$y2(
								_elm_lang$core$Basics$toString(
									_elm_community$linear_algebra$Math_Vector2$getY(w))),
							_1: {
								ctor: '::',
								_0: _elm_lang$svg$Svg_Attributes$strokeWidth('1'),
								_1: {
									ctor: '::',
									_0: _elm_lang$svg$Svg_Attributes$stroke(_kirchner$elm_pat$Styles_Colors$base1),
									_1: {
										ctor: '::',
										_0: _elm_lang$svg$Svg_Attributes$strokeDasharray('5, 5'),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}
			},
			{ctor: '[]'});
	});
var _kirchner$elm_pat$Svg_Extra$drawRectArrow = F2(
	function (v, w) {
		return A2(
			_elm_lang$svg$Svg$g,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_kirchner$elm_pat$Svg_Extra$drawArrow,
					v,
					A2(
						_elm_community$linear_algebra$Math_Vector2$vec2,
						_elm_community$linear_algebra$Math_Vector2$getX(w),
						_elm_community$linear_algebra$Math_Vector2$getY(v))),
				_1: {
					ctor: '::',
					_0: A2(
						_kirchner$elm_pat$Svg_Extra$drawArrow,
						A2(
							_elm_community$linear_algebra$Math_Vector2$vec2,
							_elm_community$linear_algebra$Math_Vector2$getX(w),
							_elm_community$linear_algebra$Math_Vector2$getY(v)),
						w),
					_1: {ctor: '[]'}
				}
			});
	});
var _kirchner$elm_pat$Svg_Extra$drawSelector = F3(
	function (strokeStyle, color, v) {
		return A2(
			_elm_lang$svg$Svg$circle,
			{
				ctor: '::',
				_0: _elm_lang$svg$Svg_Attributes$cx(
					_elm_lang$core$Basics$toString(
						_elm_community$linear_algebra$Math_Vector2$getX(v))),
				_1: {
					ctor: '::',
					_0: _elm_lang$svg$Svg_Attributes$cy(
						_elm_lang$core$Basics$toString(
							_elm_community$linear_algebra$Math_Vector2$getY(v))),
					_1: {
						ctor: '::',
						_0: _elm_lang$svg$Svg_Attributes$r('7'),
						_1: {
							ctor: '::',
							_0: _elm_lang$svg$Svg_Attributes$strokeWidth('1'),
							_1: {
								ctor: '::',
								_0: _elm_lang$svg$Svg_Attributes$stroke(color),
								_1: {
									ctor: '::',
									_0: _elm_lang$svg$Svg_Attributes$fill('none'),
									_1: {
										ctor: '::',
										_0: function () {
											var _p1 = strokeStyle;
											if (_p1.ctor === 'Dashed') {
												return _elm_lang$svg$Svg_Attributes$strokeDasharray('5, 5');
											} else {
												return _elm_lang$svg$Svg_Attributes$strokeDasharray('none');
											}
										}(),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}
			},
			{ctor: '[]'});
	});
var _kirchner$elm_pat$Svg_Extra$drawPoint = F2(
	function (color, v) {
		return A2(
			_elm_lang$svg$Svg$circle,
			{
				ctor: '::',
				_0: _elm_lang$svg$Svg_Attributes$cx(
					_elm_lang$core$Basics$toString(
						_elm_community$linear_algebra$Math_Vector2$getX(v))),
				_1: {
					ctor: '::',
					_0: _elm_lang$svg$Svg_Attributes$cy(
						_elm_lang$core$Basics$toString(
							_elm_community$linear_algebra$Math_Vector2$getY(v))),
					_1: {
						ctor: '::',
						_0: _elm_lang$svg$Svg_Attributes$r('3.5'),
						_1: {
							ctor: '::',
							_0: _elm_lang$svg$Svg_Attributes$strokeWidth('0'),
							_1: {
								ctor: '::',
								_0: _elm_lang$svg$Svg_Attributes$fill(color),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			},
			{ctor: '[]'});
	});
var _kirchner$elm_pat$Svg_Extra$ArcConfig = F2(
	function (a, b) {
		return {radius: a, label: b};
	});
var _kirchner$elm_pat$Svg_Extra$Solid = {ctor: 'Solid'};
var _kirchner$elm_pat$Svg_Extra$Dashed = {ctor: 'Dashed'};

var _kirchner$elm_pat$Types$equals = F2(
	function (maybe, a) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _elm_lang$core$Native_Utils.eq(a, _p0._0) ? true : false;
		} else {
			return false;
		}
	});
var _kirchner$elm_pat$Types$vec = F2(
	function (x, y) {
		return A2(
			_elm_community$linear_algebra$Math_Vector2$vec2,
			_elm_lang$core$Basics$toFloat(x),
			_elm_lang$core$Basics$toFloat(y));
	});
var _kirchner$elm_pat$Types$svgToCanvas = F2(
	function (viewPort, p) {
		return {x: p.x + viewPort.x, y: p.y + viewPort.y};
	});
var _kirchner$elm_pat$Types$canvasToSvg = F2(
	function (viewPort, p) {
		return {x: p.x - viewPort.x, y: p.y - viewPort.y};
	});
var _kirchner$elm_pat$Types$toVec = function (p) {
	return A2(
		_elm_community$linear_algebra$Math_Vector2$vec2,
		_elm_lang$core$Basics$toFloat(p.x),
		_elm_lang$core$Basics$toFloat(p.y));
};
var _kirchner$elm_pat$Types$Position = F2(
	function (a, b) {
		return {x: a, y: b};
	});
var _kirchner$elm_pat$Types$ViewPort = F4(
	function (a, b, c, d) {
		return {x: a, y: b, width: c, height: d};
	});

var _kirchner$elm_pat$Events$positionDecoder = A3(
	_elm_lang$core$Json_Decode$map2,
	_kirchner$elm_pat$Types$Position,
	A2(_elm_lang$core$Json_Decode$field, 'offsetX', _elm_lang$core$Json_Decode$int),
	A2(_elm_lang$core$Json_Decode$field, 'offsetY', _elm_lang$core$Json_Decode$int));
var _kirchner$elm_pat$Events$onMouseDown = function (tagger) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom$on,
		'mousedown',
		A2(_elm_lang$core$Json_Decode$map, tagger, _kirchner$elm_pat$Events$positionDecoder));
};
var _kirchner$elm_pat$Events$onMove = function (tagger) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom$on,
		'mousemove',
		A2(_elm_lang$core$Json_Decode$map, tagger, _kirchner$elm_pat$Events$positionDecoder));
};
var _kirchner$elm_pat$Events$onClick = function (tagger) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom$on,
		'click',
		A2(_elm_lang$core$Json_Decode$map, tagger, _kirchner$elm_pat$Events$positionDecoder));
};

var _kirchner$elm_pat$Tools_Styles$rem = _rtfeldman$elm_css$Css$rem;
var _kirchner$elm_pat$Tools_Styles$_p0 = _rtfeldman$elm_css_helpers$Html_CssHelpers$withNamespace('tool__');
var _kirchner$elm_pat$Tools_Styles$id = _kirchner$elm_pat$Tools_Styles$_p0.id;
var _kirchner$elm_pat$Tools_Styles$class = _kirchner$elm_pat$Tools_Styles$_p0.$class;
var _kirchner$elm_pat$Tools_Styles$classList = _kirchner$elm_pat$Tools_Styles$_p0.classList;
var _kirchner$elm_pat$Tools_Styles$MenuItemSelected = {ctor: 'MenuItemSelected'};
var _kirchner$elm_pat$Tools_Styles$MenuItem = {ctor: 'MenuItem'};
var _kirchner$elm_pat$Tools_Styles$MenuList = {ctor: 'MenuList'};
var _kirchner$elm_pat$Tools_Styles$MenuTextfield = {ctor: 'MenuTextfield'};
var _kirchner$elm_pat$Tools_Styles$MenuContainer = {ctor: 'MenuContainer'};
var _kirchner$elm_pat$Tools_Styles$Button = {ctor: 'Button'};
var _kirchner$elm_pat$Tools_Styles$IconContainer = {ctor: 'IconContainer'};
var _kirchner$elm_pat$Tools_Styles$Textfield = {ctor: 'Textfield'};
var _kirchner$elm_pat$Tools_Styles$ValueContainer = {ctor: 'ValueContainer'};
var _kirchner$elm_pat$Tools_Styles$ToolBox = {ctor: 'ToolBox'};
var _kirchner$elm_pat$Tools_Styles$css = function (_p1) {
	return _rtfeldman$elm_css$Css$stylesheet(
		A2(_rtfeldman$elm_css$Css_Namespace$namespace, 'tool__', _p1));
}(
	{
		ctor: '::',
		_0: A2(
			_rtfeldman$elm_css$Css$class,
			_kirchner$elm_pat$Tools_Styles$ToolBox,
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$backgroundColor(
					_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base2)),
				_1: {
					ctor: '::',
					_0: A2(_rtfeldman$elm_css$Css$property, 'pointer-events', 'auto'),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$displayFlex,
						_1: {ctor: '[]'}
					}
				}
			}),
		_1: {
			ctor: '::',
			_0: A2(
				_rtfeldman$elm_css$Css$class,
				_kirchner$elm_pat$Tools_Styles$ValueContainer,
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$relative),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$displayFlex,
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$paddingLeft(
								_kirchner$elm_pat$Tools_Styles$rem(0.3)),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$paddingRight(
									_kirchner$elm_pat$Tools_Styles$rem(0.3)),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$margin(
										_rtfeldman$elm_css$Css$px(2)),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$border(_rtfeldman$elm_css$Css$zero),
										_1: {
											ctor: '::',
											_0: _rtfeldman$elm_css$Css$hover(
												{
													ctor: '::',
													_0: _rtfeldman$elm_css$Css$margin(_rtfeldman$elm_css$Css$zero),
													_1: {
														ctor: '::',
														_0: A3(
															_rtfeldman$elm_css$Css$border3,
															_rtfeldman$elm_css$Css$px(2),
															_rtfeldman$elm_css$Css$solid,
															_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base0)),
														_1: {ctor: '[]'}
													}
												}),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_rtfeldman$elm_css$Css$class,
					_kirchner$elm_pat$Tools_Styles$Textfield,
					{
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$borderColor(_rtfeldman$elm_css$Css$transparent),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$fontFamily(_rtfeldman$elm_css$Css$monospace),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$fontSize(
									_kirchner$elm_pat$Tools_Styles$rem(1)),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$lineHeight(
										_kirchner$elm_pat$Tools_Styles$rem(1)),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$width(
											_kirchner$elm_pat$Tools_Styles$rem(20)),
										_1: {
											ctor: '::',
											_0: _rtfeldman$elm_css$Css$backgroundColor(_rtfeldman$elm_css$Css$transparent),
											_1: {
												ctor: '::',
												_0: _rtfeldman$elm_css$Css$focus(
													{
														ctor: '::',
														_0: _rtfeldman$elm_css$Css$outline(_rtfeldman$elm_css$Css$none),
														_1: {ctor: '[]'}
													}),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_rtfeldman$elm_css$Css$class,
						_kirchner$elm_pat$Tools_Styles$IconContainer,
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$absolute),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$right(
									_kirchner$elm_pat$Tools_Styles$rem(0.3)),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$height(
										_rtfeldman$elm_css$Css$pct(100)),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$displayFlex,
										_1: {
											ctor: '::',
											_0: _rtfeldman$elm_css$Css$flexFlow1(_rtfeldman$elm_css$Css$column),
											_1: {
												ctor: '::',
												_0: _rtfeldman$elm_css$Css$justifyContent(_rtfeldman$elm_css$Css$spaceAround),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_rtfeldman$elm_css$Css$class,
							_kirchner$elm_pat$Tools_Styles$Button,
							{
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$textAlign(_rtfeldman$elm_css$Css$center),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$width(
										_kirchner$elm_pat$Tools_Styles$rem(10)),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$height(
											_kirchner$elm_pat$Tools_Styles$rem(2)),
										_1: {
											ctor: '::',
											_0: _rtfeldman$elm_css$Css$lineHeight(
												_kirchner$elm_pat$Tools_Styles$rem(2)),
											_1: {
												ctor: '::',
												_0: _rtfeldman$elm_css$Css$color(
													_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base0)),
												_1: {
													ctor: '::',
													_0: _rtfeldman$elm_css$Css$backgroundColor(
														_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base03)),
													_1: {
														ctor: '::',
														_0: _rtfeldman$elm_css$Css$cursor(_rtfeldman$elm_css$Css$pointer),
														_1: {
															ctor: '::',
															_0: _rtfeldman$elm_css$Css$hover(
																{
																	ctor: '::',
																	_0: _rtfeldman$elm_css$Css$backgroundColor(
																		_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base02)),
																	_1: {ctor: '[]'}
																}),
															_1: {ctor: '[]'}
														}
													}
												}
											}
										}
									}
								}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_rtfeldman$elm_css$Css$class,
								_kirchner$elm_pat$Tools_Styles$MenuContainer,
								{
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$absolute),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$left(
											_rtfeldman$elm_css$Css$px(-2)),
										_1: {
											ctor: '::',
											_0: _rtfeldman$elm_css$Css$top(
												_rtfeldman$elm_css$Css$pct(100)),
											_1: {
												ctor: '::',
												_0: _rtfeldman$elm_css$Css$maxHeight(
													_kirchner$elm_pat$Tools_Styles$rem(6)),
												_1: {
													ctor: '::',
													_0: _rtfeldman$elm_css$Css$width(
														_rtfeldman$elm_css$Css$pct(100)),
													_1: {
														ctor: '::',
														_0: _rtfeldman$elm_css$Css$margin(_rtfeldman$elm_css$Css$zero),
														_1: {
															ctor: '::',
															_0: A3(
																_rtfeldman$elm_css$Css$border3,
																_rtfeldman$elm_css$Css$px(2),
																_rtfeldman$elm_css$Css$solid,
																_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base0)),
															_1: {ctor: '[]'}
														}
													}
												}
											}
										}
									}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_rtfeldman$elm_css$Css$class,
									_kirchner$elm_pat$Tools_Styles$MenuTextfield,
									{
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$width(
											_kirchner$elm_pat$Tools_Styles$rem(10)),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_rtfeldman$elm_css$Css$class,
										_kirchner$elm_pat$Tools_Styles$MenuList,
										{
											ctor: '::',
											_0: _rtfeldman$elm_css$Css$width(
												_rtfeldman$elm_css$Css$pct(100)),
											_1: {
												ctor: '::',
												_0: _rtfeldman$elm_css$Css$backgroundColor(
													_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base2)),
												_1: {
													ctor: '::',
													_0: _rtfeldman$elm_css$Css$listStyle(_rtfeldman$elm_css$Css$none),
													_1: {
														ctor: '::',
														_0: _rtfeldman$elm_css$Css$padding(_rtfeldman$elm_css$Css$zero),
														_1: {
															ctor: '::',
															_0: _rtfeldman$elm_css$Css$margin(_rtfeldman$elm_css$Css$zero),
															_1: {
																ctor: '::',
																_0: _rtfeldman$elm_css$Css$fontFamily(_rtfeldman$elm_css$Css$monospace),
																_1: {
																	ctor: '::',
																	_0: _rtfeldman$elm_css$Css$fontSize(
																		_kirchner$elm_pat$Tools_Styles$rem(1)),
																	_1: {
																		ctor: '::',
																		_0: _rtfeldman$elm_css$Css$lineHeight(
																			_kirchner$elm_pat$Tools_Styles$rem(1)),
																		_1: {ctor: '[]'}
																	}
																}
															}
														}
													}
												}
											}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_rtfeldman$elm_css$Css$class,
											_kirchner$elm_pat$Tools_Styles$MenuItem,
											{
												ctor: '::',
												_0: _rtfeldman$elm_css$Css$padding(
													_kirchner$elm_pat$Tools_Styles$rem(0.2)),
												_1: {ctor: '[]'}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												_rtfeldman$elm_css$Css$class,
												_kirchner$elm_pat$Tools_Styles$MenuItemSelected,
												{
													ctor: '::',
													_0: _rtfeldman$elm_css$Css$backgroundColor(
														_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base3)),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});

var _kirchner$elm_pat$Tools_Common$exprInput_ = F4(
	function (autoFocus, name, e, callback) {
		var deleteIcon = (!_elm_lang$core$Native_Utils.eq(e, _elm_lang$core$Maybe$Nothing)) ? {
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _kirchner$elm_pat$Tools_Styles$class(
						{
							ctor: '::',
							_0: _kirchner$elm_pat$Tools_Styles$IconContainer,
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_kirchner$elm_pat$Views_Common$iconSmall,
						'delete',
						callback('')),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		} : {ctor: '[]'};
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _kirchner$elm_pat$Tools_Styles$class(
					{
						ctor: '::',
						_0: _kirchner$elm_pat$Tools_Styles$ValueContainer,
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			},
			A2(
				_elm_lang$core$Basics_ops['++'],
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$input,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onInput(callback),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$placeholder(
									A2(
										_elm_lang$core$Maybe$withDefault,
										name,
										A2(_elm_lang$core$Maybe$map, _kirchner$elm_pat$Expr$print, e))),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$autofocus(autoFocus),
									_1: {
										ctor: '::',
										_0: _kirchner$elm_pat$Tools_Styles$class(
											{
												ctor: '::',
												_0: _kirchner$elm_pat$Tools_Styles$Textfield,
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}
							}
						},
						{ctor: '[]'}),
					_1: {ctor: '[]'}
				},
				deleteIcon));
	});
var _kirchner$elm_pat$Tools_Common$exprInput = F3(
	function (name, e, callback) {
		var deleteIcon = (!_elm_lang$core$Native_Utils.eq(e, _elm_lang$core$Maybe$Nothing)) ? {
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _kirchner$elm_pat$Tools_Styles$class(
						{
							ctor: '::',
							_0: _kirchner$elm_pat$Tools_Styles$IconContainer,
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_kirchner$elm_pat$Views_Common$iconSmall,
						'delete',
						callback('')),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		} : {ctor: '[]'};
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _kirchner$elm_pat$Tools_Styles$class(
					{
						ctor: '::',
						_0: _kirchner$elm_pat$Tools_Styles$ValueContainer,
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			},
			A2(
				_elm_lang$core$Basics_ops['++'],
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$input,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onInput(callback),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$placeholder(
									A2(
										_elm_lang$core$Maybe$withDefault,
										name,
										A2(_elm_lang$core$Maybe$map, _kirchner$elm_pat$Expr$print, e))),
								_1: {
									ctor: '::',
									_0: _kirchner$elm_pat$Tools_Styles$class(
										{
											ctor: '::',
											_0: _kirchner$elm_pat$Tools_Styles$Textfield,
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}
						},
						{ctor: '[]'}),
					_1: {ctor: '[]'}
				},
				deleteIcon));
	});
var _kirchner$elm_pat$Tools_Common$view = F5(
	function (callbacks, data, state, point, elements) {
		var addPoint = A2(
			_elm_lang$core$Maybe$map,
			callbacks.addPoint,
			A2(point, data, state));
		var button = function () {
			var _p0 = addPoint;
			if (_p0.ctor === 'Just') {
				return {
					ctor: '::',
					_0: A2(_kirchner$elm_pat$Views_Common$iconSmall, 'add', _p0._0),
					_1: {ctor: '[]'}
				};
			} else {
				return {ctor: '[]'};
			}
		}();
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _kirchner$elm_pat$Tools_Styles$class(
					{
						ctor: '::',
						_0: _kirchner$elm_pat$Tools_Styles$ToolBox,
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			},
			elements);
	});
var _kirchner$elm_pat$Tools_Common$drawCursor = function (position) {
	var _p1 = _elm_community$linear_algebra$Math_Vector2$toTuple(position);
	var x = _p1._0;
	var y = _p1._1;
	return A2(
		_elm_lang$svg$Svg$g,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_kirchner$elm_pat$Svg_Extra$drawPoint,
				_kirchner$elm_pat$Styles_Colors$base0,
				A2(_elm_community$linear_algebra$Math_Vector2$vec2, x, y)),
			_1: {
				ctor: '::',
				_0: A3(
					_kirchner$elm_pat$Svg_Extra$drawSelector,
					_kirchner$elm_pat$Svg_Extra$Solid,
					_kirchner$elm_pat$Styles_Colors$base1,
					A2(_elm_community$linear_algebra$Math_Vector2$vec2, x, y)),
				_1: {ctor: '[]'}
			}
		});
};
var _kirchner$elm_pat$Tools_Common$pointSelector_ = F4(
	function (focusPoint, selectPoint, data, _p2) {
		var _p3 = _p2;
		var _p4 = _p3._0;
		var draw = function (v) {
			return A2(
				_elm_lang$svg$Svg$g,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$svg$Svg$circle,
						{
							ctor: '::',
							_0: _elm_lang$svg$Svg_Attributes$cx(
								_elm_lang$core$Basics$toString(
									_elm_community$linear_algebra$Math_Vector2$getX(v))),
							_1: {
								ctor: '::',
								_0: _elm_lang$svg$Svg_Attributes$cy(
									_elm_lang$core$Basics$toString(
										_elm_community$linear_algebra$Math_Vector2$getY(v))),
								_1: {
									ctor: '::',
									_0: _elm_lang$svg$Svg_Attributes$r('5'),
									_1: {
										ctor: '::',
										_0: _elm_lang$svg$Svg_Attributes$fill('transparent'),
										_1: {
											ctor: '::',
											_0: _elm_lang$svg$Svg_Attributes$strokeWidth('0'),
											_1: {
												ctor: '::',
												_0: _elm_lang$svg$Svg_Events$onClick(
													selectPoint(
														_elm_lang$core$Maybe$Just(_p4))),
												_1: {
													ctor: '::',
													_0: _elm_lang$svg$Svg_Events$onMouseOver(
														focusPoint(
															_elm_lang$core$Maybe$Just(_p4))),
													_1: {
														ctor: '::',
														_0: _elm_lang$svg$Svg_Events$onMouseOut(
															focusPoint(_elm_lang$core$Maybe$Nothing)),
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}
								}
							}
						},
						{ctor: '[]'}),
					_1: {
						ctor: '::',
						_0: A2(_kirchner$elm_pat$Types$equals, data.focusedPoint, _p4) ? A3(_kirchner$elm_pat$Svg_Extra$drawSelector, _kirchner$elm_pat$Svg_Extra$Solid, _kirchner$elm_pat$Styles_Colors$red, v) : A2(
							_elm_lang$svg$Svg$g,
							{ctor: '[]'},
							{ctor: '[]'}),
						_1: {ctor: '[]'}
					}
				});
		};
		return A2(
			_elm_lang$core$Maybe$map,
			draw,
			A3(_kirchner$elm_pat$Point$position, data.store, data.variables, _p3._1));
	});
var _kirchner$elm_pat$Tools_Common$svgSelectPoint = F3(
	function (focusPoint, selectPoint, data) {
		return A2(
			_elm_lang$svg$Svg$g,
			{ctor: '[]'},
			A2(
				_elm_lang$core$List$filterMap,
				A3(_kirchner$elm_pat$Tools_Common$pointSelector_, focusPoint, selectPoint, data),
				_kirchner$elm_pat$Store$toList(data.store)));
	});
var _kirchner$elm_pat$Tools_Common$svgUpdateMouse = F3(
	function (mouseClicked, updateCursorPosition, data) {
		return A2(
			_elm_lang$svg$Svg$rect,
			A2(
				_elm_lang$core$Basics_ops['++'],
				{
					ctor: '::',
					_0: _elm_lang$svg$Svg_Attributes$x(
						_elm_lang$core$Basics$toString(data.viewPort.x)),
					_1: {
						ctor: '::',
						_0: _elm_lang$svg$Svg_Attributes$y(
							_elm_lang$core$Basics$toString(data.viewPort.y)),
						_1: {
							ctor: '::',
							_0: _elm_lang$svg$Svg_Attributes$width(
								_elm_lang$core$Basics$toString(data.viewPort.width)),
							_1: {
								ctor: '::',
								_0: _elm_lang$svg$Svg_Attributes$height(
									_elm_lang$core$Basics$toString(data.viewPort.height)),
								_1: {
									ctor: '::',
									_0: _elm_lang$svg$Svg_Attributes$fill('transparent'),
									_1: {
										ctor: '::',
										_0: _elm_lang$svg$Svg_Attributes$strokeWidth('0'),
										_1: {
											ctor: '::',
											_0: _kirchner$elm_pat$Events$onMove(
												function (_p5) {
													return updateCursorPosition(
														_elm_lang$core$Maybe$Just(_p5));
												}),
											_1: {
												ctor: '::',
												_0: _elm_lang$svg$Svg_Events$onMouseOut(
													updateCursorPosition(_elm_lang$core$Maybe$Nothing)),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					}
				},
				_elm_community$maybe_extra$Maybe_Extra$toList(
					A2(_elm_lang$core$Maybe$map, _elm_lang$svg$Svg_Events$onClick, mouseClicked))),
			{ctor: '[]'});
	});
var _kirchner$elm_pat$Tools_Common$Data = F8(
	function (a, b, c, d, e, f, g, h) {
		return {store: a, pieceStore: b, variables: c, viewPort: d, cursorPosition: e, focusedPoint: f, pressedKeys: g, selectedPoints: h};
	});
var _kirchner$elm_pat$Tools_Common$Callbacks = F6(
	function (a, b, c, d, e, f) {
		return {addPoint: a, updateCursorPosition: b, focusPoint: c, selectPoint: d, clearSelection: e, extendPiece: f};
	});

var _kirchner$elm_pat$Tools_Absolute$verticalLine = F2(
	function (data, state) {
		return A2(
			_elm_lang$core$Maybe$map,
			_kirchner$elm_pat$Svg_Extra$drawVerticalLine,
			A2(
				_elm_lang$core$Maybe$andThen,
				_kirchner$elm_pat$Expr$compute(data.variables),
				state.x));
	});
var _kirchner$elm_pat$Tools_Absolute$horizontalLine = F2(
	function (data, state) {
		return A2(
			_elm_lang$core$Maybe$map,
			_kirchner$elm_pat$Svg_Extra$drawHorizontalLine,
			A2(
				_elm_lang$core$Maybe$andThen,
				_kirchner$elm_pat$Expr$compute(data.variables),
				state.y));
	});
var _kirchner$elm_pat$Tools_Absolute$newPoint = F2(
	function (data, state) {
		var yCursor = A2(
			_elm_lang$core$Maybe$map,
			function (_p0) {
				var _p1 = _p0;
				return _elm_lang$core$Basics$toFloat(_p1.y);
			},
			data.cursorPosition);
		var xCursor = A2(
			_elm_lang$core$Maybe$map,
			function (_p2) {
				var _p3 = _p2;
				return _elm_lang$core$Basics$toFloat(_p3.x);
			},
			data.cursorPosition);
		var yState = A2(
			_elm_lang$core$Maybe$andThen,
			_kirchner$elm_pat$Expr$compute(data.variables),
			state.y);
		var y = A2(_elm_community$maybe_extra$Maybe_Extra$or, yState, yCursor);
		var xState = A2(
			_elm_lang$core$Maybe$andThen,
			_kirchner$elm_pat$Expr$compute(data.variables),
			state.x);
		var x = A2(_elm_community$maybe_extra$Maybe_Extra$or, xState, xCursor);
		var draw = F2(
			function (x, y) {
				return A2(
					_elm_lang$svg$Svg$g,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: A2(
							_kirchner$elm_pat$Svg_Extra$drawPoint,
							_kirchner$elm_pat$Styles_Colors$red,
							A2(_elm_community$linear_algebra$Math_Vector2$vec2, x, y)),
						_1: {
							ctor: '::',
							_0: A3(
								_kirchner$elm_pat$Svg_Extra$drawSelector,
								_kirchner$elm_pat$Svg_Extra$Solid,
								_kirchner$elm_pat$Styles_Colors$red,
								A2(_elm_community$linear_algebra$Math_Vector2$vec2, x, y)),
							_1: {ctor: '[]'}
						}
					});
			});
		return A3(_elm_lang$core$Maybe$map2, draw, x, y);
	});
var _kirchner$elm_pat$Tools_Absolute$point = F2(
	function (data, state) {
		var yCursor = A2(
			_elm_lang$core$Maybe$map,
			function (_p4) {
				var _p5 = _p4;
				return _kirchner$elm_pat$Expr$Number(
					_elm_lang$core$Basics$toFloat(_p5.y));
			},
			data.cursorPosition);
		var y = A2(_elm_community$maybe_extra$Maybe_Extra$or, state.y, yCursor);
		var xCursor = A2(
			_elm_lang$core$Maybe$map,
			function (_p6) {
				var _p7 = _p6;
				return _kirchner$elm_pat$Expr$Number(
					_elm_lang$core$Basics$toFloat(_p7.x));
			},
			data.cursorPosition);
		var x = A2(_elm_community$maybe_extra$Maybe_Extra$or, state.x, xCursor);
		return A3(_elm_lang$core$Maybe$map2, _kirchner$elm_pat$Point$absolute, x, y);
	});
var _kirchner$elm_pat$Tools_Absolute$svg = F4(
	function (callbacks, updateState, data, state) {
		var addPoint = A2(
			_elm_lang$core$Maybe$map,
			callbacks.addPoint,
			A2(_kirchner$elm_pat$Tools_Absolute$point, data, state));
		return A2(
			_elm_lang$svg$Svg$g,
			{ctor: '[]'},
			A2(
				_elm_lang$core$List$filterMap,
				_elm_lang$core$Basics$identity,
				{
					ctor: '::',
					_0: A2(_kirchner$elm_pat$Tools_Absolute$newPoint, data, state),
					_1: {
						ctor: '::',
						_0: A2(_kirchner$elm_pat$Tools_Absolute$horizontalLine, data, state),
						_1: {
							ctor: '::',
							_0: A2(_kirchner$elm_pat$Tools_Absolute$verticalLine, data, state),
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Maybe$Just(
									A3(_kirchner$elm_pat$Tools_Common$svgUpdateMouse, addPoint, callbacks.updateCursorPosition, data)),
								_1: {ctor: '[]'}
							}
						}
					}
				}));
	});
var _kirchner$elm_pat$Tools_Absolute$view = F4(
	function (callbacks, updateState, data, state) {
		var updateY = function (_p8) {
			return updateState(
				function (s) {
					return _elm_lang$core$Native_Utils.update(
						state,
						{
							y: _kirchner$elm_pat$Expr$parse(s)
						});
				}(_p8));
		};
		var updateX = function (_p9) {
			return updateState(
				function (s) {
					return _elm_lang$core$Native_Utils.update(
						state,
						{
							x: _kirchner$elm_pat$Expr$parse(s)
						});
				}(_p9));
		};
		return A5(
			_kirchner$elm_pat$Tools_Common$view,
			callbacks,
			data,
			state,
			_kirchner$elm_pat$Tools_Absolute$point,
			{
				ctor: '::',
				_0: A3(_kirchner$elm_pat$Tools_Common$exprInput, 'x-coordinate', state.x, updateX),
				_1: {
					ctor: '::',
					_0: A3(_kirchner$elm_pat$Tools_Common$exprInput, 'y-coordinate', state.y, updateY),
					_1: {ctor: '[]'}
				}
			});
	});
var _kirchner$elm_pat$Tools_Absolute$initWith = F3(
	function (id, x, y) {
		return {
			x: _elm_lang$core$Maybe$Just(x),
			y: _elm_lang$core$Maybe$Just(y),
			id: _elm_lang$core$Maybe$Just(id)
		};
	});
var _kirchner$elm_pat$Tools_Absolute$init = {x: _elm_lang$core$Maybe$Nothing, y: _elm_lang$core$Maybe$Nothing, id: _elm_lang$core$Maybe$Nothing};
var _kirchner$elm_pat$Tools_Absolute$State = F3(
	function (a, b, c) {
		return {x: a, y: b, id: c};
	});

var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$sectionConfig = function (_p0) {
	var _p1 = _p0;
	return {toId: _p1.toId, getData: _p1.getData, ul: _p1.ul, li: _p1.li};
};
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$viewWithSectionsConfig = function (_p2) {
	var _p3 = _p2;
	return {toId: _p3.toId, ul: _p3.ul, li: _p3.li, section: _p3.section};
};
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$viewConfig = function (_p4) {
	var _p5 = _p4;
	return {toId: _p5.toId, ul: _p5.ul, li: _p5.li};
};
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$getPrevious = F3(
	function (id, selectedId, resultId) {
		return _elm_lang$core$Native_Utils.eq(selectedId, id) ? _elm_lang$core$Maybe$Just(id) : (_elm_lang$core$Native_Utils.eq(
			A2(_elm_lang$core$Maybe$withDefault, '', resultId),
			id) ? _elm_lang$core$Maybe$Just(selectedId) : resultId);
	});
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$getNextItemId = F2(
	function (ids, selectedId) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			selectedId,
			A3(
				_elm_lang$core$List$foldl,
				_thebritican$elm_autocomplete$Autocomplete_Autocomplete$getPrevious(selectedId),
				_elm_lang$core$Maybe$Nothing,
				ids));
	});
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$getPreviousItemId = F2(
	function (ids, selectedId) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			selectedId,
			A3(
				_elm_lang$core$List$foldr,
				_thebritican$elm_autocomplete$Autocomplete_Autocomplete$getPrevious(selectedId),
				_elm_lang$core$Maybe$Nothing,
				ids));
	});
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$navigateWithKey = F3(
	function (code, ids, maybeId) {
		var _p6 = code;
		switch (_p6) {
			case 38:
				return A2(
					_elm_lang$core$Maybe$map,
					_thebritican$elm_autocomplete$Autocomplete_Autocomplete$getPreviousItemId(ids),
					maybeId);
			case 40:
				return A2(
					_elm_lang$core$Maybe$map,
					_thebritican$elm_autocomplete$Autocomplete_Autocomplete$getNextItemId(ids),
					maybeId);
			default:
				return maybeId;
		}
	});
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$resetMouseStateWithId = F3(
	function (separateSelections, id, state) {
		return separateSelections ? {
			key: state.key,
			mouse: _elm_lang$core$Maybe$Just(id)
		} : {
			key: _elm_lang$core$Maybe$Just(id),
			mouse: _elm_lang$core$Maybe$Just(id)
		};
	});
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$updateConfig = function (_p7) {
	var _p8 = _p7;
	return {toId: _p8.toId, onKeyDown: _p8.onKeyDown, onTooLow: _p8.onTooLow, onTooHigh: _p8.onTooHigh, onMouseEnter: _p8.onMouseEnter, onMouseLeave: _p8.onMouseLeave, onMouseClick: _p8.onMouseClick, separateSelections: _p8.separateSelections};
};
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$empty = {key: _elm_lang$core$Maybe$Nothing, mouse: _elm_lang$core$Maybe$Nothing};
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$reset = F2(
	function (_p10, _p9) {
		var _p11 = _p10;
		var _p12 = _p9;
		return _p11.separateSelections ? {key: _elm_lang$core$Maybe$Nothing, mouse: _p12.mouse} : _thebritican$elm_autocomplete$Autocomplete_Autocomplete$empty;
	});
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$resetToFirst = F3(
	function (config, data, state) {
		var _p13 = config;
		var toId = _p13.toId;
		var separateSelections = _p13.separateSelections;
		var setFirstItem = F2(
			function (datum, newState) {
				return _elm_lang$core$Native_Utils.update(
					newState,
					{
						key: _elm_lang$core$Maybe$Just(
							toId(datum))
					});
			});
		var _p14 = _elm_lang$core$List$head(data);
		if (_p14.ctor === 'Nothing') {
			return _thebritican$elm_autocomplete$Autocomplete_Autocomplete$empty;
		} else {
			var _p15 = _p14._0;
			return separateSelections ? A2(
				setFirstItem,
				_p15,
				A2(_thebritican$elm_autocomplete$Autocomplete_Autocomplete$reset, config, state)) : A2(setFirstItem, _p15, _thebritican$elm_autocomplete$Autocomplete_Autocomplete$empty);
		}
	});
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$resetToFirstItem = F4(
	function (config, data, howManyToShow, state) {
		return A3(
			_thebritican$elm_autocomplete$Autocomplete_Autocomplete$resetToFirst,
			config,
			A2(_elm_lang$core$List$take, howManyToShow, data),
			state);
	});
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$resetToLastItem = F4(
	function (config, data, howManyToShow, state) {
		var reversedData = _elm_lang$core$List$reverse(
			A2(_elm_lang$core$List$take, howManyToShow, data));
		return A3(_thebritican$elm_autocomplete$Autocomplete_Autocomplete$resetToFirst, config, reversedData, state);
	});
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$State = F2(
	function (a, b) {
		return {key: a, mouse: b};
	});
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$UpdateConfig = F8(
	function (a, b, c, d, e, f, g, h) {
		return {onKeyDown: a, onTooLow: b, onTooHigh: c, onMouseEnter: d, onMouseLeave: e, onMouseClick: f, toId: g, separateSelections: h};
	});
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$HtmlDetails = F2(
	function (a, b) {
		return {attributes: a, children: b};
	});
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$ViewConfig = F3(
	function (a, b, c) {
		return {toId: a, ul: b, li: c};
	});
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$ViewWithSectionsConfig = F4(
	function (a, b, c, d) {
		return {toId: a, ul: b, li: c, section: d};
	});
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$SectionConfig = F4(
	function (a, b, c, d) {
		return {toId: a, getData: b, ul: c, li: d};
	});
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$SectionNode = F3(
	function (a, b, c) {
		return {nodeType: a, attributes: b, children: c};
	});
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$NoOp = {ctor: 'NoOp'};
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$mapNeverToMsg = function (msg) {
	return A2(
		_elm_lang$html$Html_Attributes$map,
		function (_p16) {
			return _thebritican$elm_autocomplete$Autocomplete_Autocomplete$NoOp;
		},
		msg);
};
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$MouseClick = function (a) {
	return {ctor: 'MouseClick', _0: a};
};
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$MouseLeave = function (a) {
	return {ctor: 'MouseLeave', _0: a};
};
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$MouseEnter = function (a) {
	return {ctor: 'MouseEnter', _0: a};
};
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$viewData = F3(
	function (_p18, _p17, data) {
		var _p19 = _p18;
		var _p20 = _p17;
		var id = _p19.toId(data);
		var isSelected = function (maybeId) {
			var _p21 = maybeId;
			if (_p21.ctor === 'Just') {
				return _elm_lang$core$Native_Utils.eq(_p21._0, id);
			} else {
				return false;
			}
		};
		var listItemData = A3(
			_p19.li,
			isSelected(_p20.key),
			isSelected(_p20.mouse),
			data);
		var customAttributes = A2(_elm_lang$core$List$map, _thebritican$elm_autocomplete$Autocomplete_Autocomplete$mapNeverToMsg, listItemData.attributes);
		var customLiAttr = A2(
			_elm_lang$core$List$append,
			customAttributes,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onMouseEnter(
					_thebritican$elm_autocomplete$Autocomplete_Autocomplete$MouseEnter(id)),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Events$onMouseLeave(
						_thebritican$elm_autocomplete$Autocomplete_Autocomplete$MouseLeave(id)),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Events$onClick(
							_thebritican$elm_autocomplete$Autocomplete_Autocomplete$MouseClick(id)),
						_1: {ctor: '[]'}
					}
				}
			});
		return A2(
			_elm_lang$html$Html$li,
			customLiAttr,
			A2(
				_elm_lang$core$List$map,
				_elm_lang$html$Html$map(
					function (html) {
						return _thebritican$elm_autocomplete$Autocomplete_Autocomplete$NoOp;
					}),
				listItemData.children));
	});
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$viewSection = F3(
	function (config, state, section) {
		var getKeyedItems = function (datum) {
			return {
				ctor: '_Tuple2',
				_0: config.toId(datum),
				_1: A3(_thebritican$elm_autocomplete$Autocomplete_Autocomplete$viewData, config, state, datum)
			};
		};
		var viewItemList = A2(
			_elm_lang$html$Html_Keyed$ul,
			A2(_elm_lang$core$List$map, _thebritican$elm_autocomplete$Autocomplete_Autocomplete$mapNeverToMsg, config.ul),
			A2(
				_elm_lang$core$List$map,
				getKeyedItems,
				config.section.getData(section)));
		var sectionNode = config.section.li(section);
		var attributes = A2(_elm_lang$core$List$map, _thebritican$elm_autocomplete$Autocomplete_Autocomplete$mapNeverToMsg, sectionNode.attributes);
		var customChildren = A2(
			_elm_lang$core$List$map,
			_elm_lang$html$Html$map(
				function (html) {
					return _thebritican$elm_autocomplete$Autocomplete_Autocomplete$NoOp;
				}),
			sectionNode.children);
		var children = A2(
			_elm_lang$core$List$append,
			customChildren,
			{
				ctor: '::',
				_0: viewItemList,
				_1: {ctor: '[]'}
			});
		return A2(
			_elm_lang$html$Html$li,
			attributes,
			{
				ctor: '::',
				_0: A3(_elm_lang$html$Html$node, sectionNode.nodeType, attributes, children),
				_1: {ctor: '[]'}
			});
	});
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$viewWithSections = F4(
	function (config, howManyToShow, state, sections) {
		var getKeyedItems = function (section) {
			return {
				ctor: '_Tuple2',
				_0: config.section.toId(section),
				_1: A3(_thebritican$elm_autocomplete$Autocomplete_Autocomplete$viewSection, config, state, section)
			};
		};
		return A2(
			_elm_lang$html$Html_Keyed$ul,
			A2(_elm_lang$core$List$map, _thebritican$elm_autocomplete$Autocomplete_Autocomplete$mapNeverToMsg, config.section.ul),
			A2(_elm_lang$core$List$map, getKeyedItems, sections));
	});
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$viewItem = F3(
	function (_p23, _p22, data) {
		var _p24 = _p23;
		var _p25 = _p22;
		var id = _p24.toId(data);
		var isSelected = function (maybeId) {
			var _p26 = maybeId;
			if (_p26.ctor === 'Just') {
				return _elm_lang$core$Native_Utils.eq(_p26._0, id);
			} else {
				return false;
			}
		};
		var listItemData = A3(
			_p24.li,
			isSelected(_p25.key),
			isSelected(_p25.mouse),
			data);
		var customAttributes = A2(_elm_lang$core$List$map, _thebritican$elm_autocomplete$Autocomplete_Autocomplete$mapNeverToMsg, listItemData.attributes);
		var customLiAttr = A2(
			_elm_lang$core$List$append,
			customAttributes,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onMouseEnter(
					_thebritican$elm_autocomplete$Autocomplete_Autocomplete$MouseEnter(id)),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Events$onMouseLeave(
						_thebritican$elm_autocomplete$Autocomplete_Autocomplete$MouseLeave(id)),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Events$onClick(
							_thebritican$elm_autocomplete$Autocomplete_Autocomplete$MouseClick(id)),
						_1: {ctor: '[]'}
					}
				}
			});
		return A2(
			_elm_lang$html$Html$li,
			customLiAttr,
			A2(
				_elm_lang$core$List$map,
				_elm_lang$html$Html$map(
					function (html) {
						return _thebritican$elm_autocomplete$Autocomplete_Autocomplete$NoOp;
					}),
				listItemData.children));
	});
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$viewList = F4(
	function (config, howManyToShow, state, data) {
		var getKeyedItems = function (datum) {
			return {
				ctor: '_Tuple2',
				_0: config.toId(datum),
				_1: A3(_thebritican$elm_autocomplete$Autocomplete_Autocomplete$viewItem, config, state, datum)
			};
		};
		var customUlAttr = A2(_elm_lang$core$List$map, _thebritican$elm_autocomplete$Autocomplete_Autocomplete$mapNeverToMsg, config.ul);
		return A2(
			_elm_lang$html$Html_Keyed$ul,
			customUlAttr,
			A2(
				_elm_lang$core$List$map,
				getKeyedItems,
				A2(_elm_lang$core$List$take, howManyToShow, data)));
	});
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$view = F4(
	function (config, howManyToShow, state, data) {
		return A4(_thebritican$elm_autocomplete$Autocomplete_Autocomplete$viewList, config, howManyToShow, state, data);
	});
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$WentTooHigh = {ctor: 'WentTooHigh'};
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$WentTooLow = {ctor: 'WentTooLow'};
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$update = F5(
	function (config, msg, howManyToShow, state, data) {
		update:
		while (true) {
			var _p27 = msg;
			switch (_p27.ctor) {
				case 'KeyDown':
					var _p28 = _p27._0;
					var boundedList = A2(
						_elm_lang$core$List$take,
						howManyToShow,
						A2(_elm_lang$core$List$map, config.toId, data));
					var newKey = A3(_thebritican$elm_autocomplete$Autocomplete_Autocomplete$navigateWithKey, _p28, boundedList, state.key);
					if (_elm_lang$core$Native_Utils.eq(newKey, state.key) && _elm_lang$core$Native_Utils.eq(_p28, 38)) {
						var _v15 = config,
							_v16 = _thebritican$elm_autocomplete$Autocomplete_Autocomplete$WentTooHigh,
							_v17 = howManyToShow,
							_v18 = state,
							_v19 = data;
						config = _v15;
						msg = _v16;
						howManyToShow = _v17;
						state = _v18;
						data = _v19;
						continue update;
					} else {
						if (_elm_lang$core$Native_Utils.eq(newKey, state.key) && _elm_lang$core$Native_Utils.eq(_p28, 40)) {
							var _v20 = config,
								_v21 = _thebritican$elm_autocomplete$Autocomplete_Autocomplete$WentTooLow,
								_v22 = howManyToShow,
								_v23 = state,
								_v24 = data;
							config = _v20;
							msg = _v21;
							howManyToShow = _v22;
							state = _v23;
							data = _v24;
							continue update;
						} else {
							if (config.separateSelections) {
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Native_Utils.update(
										state,
										{key: newKey}),
									_1: A2(config.onKeyDown, _p28, newKey)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: {key: newKey, mouse: newKey},
									_1: A2(config.onKeyDown, _p28, newKey)
								};
							}
						}
					}
				case 'WentTooLow':
					return {ctor: '_Tuple2', _0: state, _1: config.onTooLow};
				case 'WentTooHigh':
					return {ctor: '_Tuple2', _0: state, _1: config.onTooHigh};
				case 'MouseEnter':
					var _p29 = _p27._0;
					return {
						ctor: '_Tuple2',
						_0: A3(_thebritican$elm_autocomplete$Autocomplete_Autocomplete$resetMouseStateWithId, config.separateSelections, _p29, state),
						_1: config.onMouseEnter(_p29)
					};
				case 'MouseLeave':
					var _p30 = _p27._0;
					return {
						ctor: '_Tuple2',
						_0: A3(_thebritican$elm_autocomplete$Autocomplete_Autocomplete$resetMouseStateWithId, config.separateSelections, _p30, state),
						_1: config.onMouseLeave(_p30)
					};
				case 'MouseClick':
					var _p31 = _p27._0;
					return {
						ctor: '_Tuple2',
						_0: A3(_thebritican$elm_autocomplete$Autocomplete_Autocomplete$resetMouseStateWithId, config.separateSelections, _p31, state),
						_1: config.onMouseClick(_p31)
					};
				default:
					return {ctor: '_Tuple2', _0: state, _1: _elm_lang$core$Maybe$Nothing};
			}
		}
	});
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$KeyDown = function (a) {
	return {ctor: 'KeyDown', _0: a};
};
var _thebritican$elm_autocomplete$Autocomplete_Autocomplete$subscription = _elm_lang$keyboard$Keyboard$downs(_thebritican$elm_autocomplete$Autocomplete_Autocomplete$KeyDown);

var _thebritican$elm_autocomplete$Autocomplete$HtmlDetails = F2(
	function (a, b) {
		return {attributes: a, children: b};
	});
var _thebritican$elm_autocomplete$Autocomplete$SectionNode = F3(
	function (a, b, c) {
		return {nodeType: a, attributes: b, children: c};
	});
var _thebritican$elm_autocomplete$Autocomplete$State = function (a) {
	return {ctor: 'State', _0: a};
};
var _thebritican$elm_autocomplete$Autocomplete$empty = _thebritican$elm_autocomplete$Autocomplete$State(_thebritican$elm_autocomplete$Autocomplete_Autocomplete$empty);
var _thebritican$elm_autocomplete$Autocomplete$reset = F2(
	function (_p1, _p0) {
		var _p2 = _p1;
		var _p3 = _p0;
		return _thebritican$elm_autocomplete$Autocomplete$State(
			A2(_thebritican$elm_autocomplete$Autocomplete_Autocomplete$reset, _p2._0, _p3._0));
	});
var _thebritican$elm_autocomplete$Autocomplete$resetToFirstItem = F4(
	function (_p5, data, howManyToShow, _p4) {
		var _p6 = _p5;
		var _p7 = _p4;
		return _thebritican$elm_autocomplete$Autocomplete$State(
			A4(_thebritican$elm_autocomplete$Autocomplete_Autocomplete$resetToFirstItem, _p6._0, data, howManyToShow, _p7._0));
	});
var _thebritican$elm_autocomplete$Autocomplete$resetToLastItem = F4(
	function (_p9, data, howManyToShow, _p8) {
		var _p10 = _p9;
		var _p11 = _p8;
		return _thebritican$elm_autocomplete$Autocomplete$State(
			A4(_thebritican$elm_autocomplete$Autocomplete_Autocomplete$resetToLastItem, _p10._0, data, howManyToShow, _p11._0));
	});
var _thebritican$elm_autocomplete$Autocomplete$update = F5(
	function (_p14, _p13, howManyToShow, _p12, data) {
		var _p15 = _p14;
		var _p16 = _p13;
		var _p17 = _p12;
		var _p18 = A5(_thebritican$elm_autocomplete$Autocomplete_Autocomplete$update, _p15._0, _p16._0, howManyToShow, _p17._0, data);
		var newState = _p18._0;
		var maybeMsg = _p18._1;
		return {
			ctor: '_Tuple2',
			_0: _thebritican$elm_autocomplete$Autocomplete$State(newState),
			_1: maybeMsg
		};
	});
var _thebritican$elm_autocomplete$Autocomplete$Msg = function (a) {
	return {ctor: 'Msg', _0: a};
};
var _thebritican$elm_autocomplete$Autocomplete$subscription = A2(_elm_lang$core$Platform_Sub$map, _thebritican$elm_autocomplete$Autocomplete$Msg, _thebritican$elm_autocomplete$Autocomplete_Autocomplete$subscription);
var _thebritican$elm_autocomplete$Autocomplete$view = F4(
	function (_p20, howManyToShow, _p19, data) {
		var _p21 = _p20;
		var _p22 = _p19;
		return A2(
			_elm_lang$html$Html$map,
			_thebritican$elm_autocomplete$Autocomplete$Msg,
			A4(_thebritican$elm_autocomplete$Autocomplete_Autocomplete$view, _p21._0, howManyToShow, _p22._0, data));
	});
var _thebritican$elm_autocomplete$Autocomplete$viewWithSections = F4(
	function (_p24, howManyToShow, _p23, sections) {
		var _p25 = _p24;
		var _p26 = _p23;
		return A2(
			_elm_lang$html$Html$map,
			_thebritican$elm_autocomplete$Autocomplete$Msg,
			A4(_thebritican$elm_autocomplete$Autocomplete_Autocomplete$viewWithSections, _p25._0, howManyToShow, _p26._0, sections));
	});
var _thebritican$elm_autocomplete$Autocomplete$UpdateConfig = function (a) {
	return {ctor: 'UpdateConfig', _0: a};
};
var _thebritican$elm_autocomplete$Autocomplete$updateConfig = function (config) {
	return _thebritican$elm_autocomplete$Autocomplete$UpdateConfig(
		_thebritican$elm_autocomplete$Autocomplete_Autocomplete$updateConfig(config));
};
var _thebritican$elm_autocomplete$Autocomplete$ViewConfig = function (a) {
	return {ctor: 'ViewConfig', _0: a};
};
var _thebritican$elm_autocomplete$Autocomplete$viewConfig = function (config) {
	return _thebritican$elm_autocomplete$Autocomplete$ViewConfig(
		_thebritican$elm_autocomplete$Autocomplete_Autocomplete$viewConfig(config));
};
var _thebritican$elm_autocomplete$Autocomplete$ViewWithSectionsConfig = function (a) {
	return {ctor: 'ViewWithSectionsConfig', _0: a};
};
var _thebritican$elm_autocomplete$Autocomplete$viewWithSectionsConfig = function (config) {
	return _thebritican$elm_autocomplete$Autocomplete$ViewWithSectionsConfig(
		function () {
			var _p27 = config.section;
			return _thebritican$elm_autocomplete$Autocomplete_Autocomplete$viewWithSectionsConfig(
				_elm_lang$core$Native_Utils.update(
					config,
					{section: _p27._0}));
		}());
};
var _thebritican$elm_autocomplete$Autocomplete$SectionConfig = function (a) {
	return {ctor: 'SectionConfig', _0: a};
};
var _thebritican$elm_autocomplete$Autocomplete$sectionConfig = function (section) {
	return _thebritican$elm_autocomplete$Autocomplete$SectionConfig(
		_thebritican$elm_autocomplete$Autocomplete_Autocomplete$sectionConfig(section));
};

var _kirchner$elm_pat$Tools_Dropdown$pointEntry = F2(
	function (id, point) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'#',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(
					_kirchner$elm_pat$Store$toInt(id)),
				A2(
					_elm_lang$core$Basics_ops['++'],
					': ',
					_kirchner$elm_pat$Point$name(point))));
	});
var _kirchner$elm_pat$Tools_Dropdown$toId = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$core$Basics$toString(
		_kirchner$elm_pat$Store$toInt(_p1._0));
};
var _kirchner$elm_pat$Tools_Dropdown$viewConfig = _thebritican$elm_autocomplete$Autocomplete$viewConfig(
	{
		toId: _kirchner$elm_pat$Tools_Dropdown$toId,
		ul: {
			ctor: '::',
			_0: _kirchner$elm_pat$Tools_Styles$class(
				{
					ctor: '::',
					_0: _kirchner$elm_pat$Tools_Styles$MenuList,
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		},
		li: F3(
			function (keySelected, mouseSelected, _p2) {
				var _p3 = _p2;
				return {
					attributes: {
						ctor: '::',
						_0: _kirchner$elm_pat$Tools_Styles$class(
							{
								ctor: '::',
								_0: _kirchner$elm_pat$Tools_Styles$MenuItem,
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: _kirchner$elm_pat$Tools_Styles$classList(
								{
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: _kirchner$elm_pat$Tools_Styles$MenuItemSelected, _1: keySelected || mouseSelected},
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					},
					children: {
						ctor: '::',
						_0: _elm_lang$html$Html$text(
							A2(_kirchner$elm_pat$Tools_Dropdown$pointEntry, _p3._0, _p3._1)),
						_1: {ctor: '[]'}
					}
				};
			})
	});
var _kirchner$elm_pat$Tools_Dropdown$filteredPoints = F2(
	function (query, data) {
		var lowerQuery = _elm_lang$core$String$toLower(query);
		var keepPoint = function (_p4) {
			var _p5 = _p4;
			return A2(
				_elm_lang$core$String$contains,
				lowerQuery,
				_elm_lang$core$String$toLower(
					A2(_kirchner$elm_pat$Tools_Dropdown$pointEntry, _p5._0, _p5._1)));
		};
		return A2(
			_elm_lang$core$List$filter,
			keepPoint,
			_kirchner$elm_pat$Store$toList(data.store));
	});
var _kirchner$elm_pat$Tools_Dropdown$resetMenu = function (state) {
	return _elm_lang$core$Native_Utils.update(
		state,
		{autoState: _thebritican$elm_autocomplete$Autocomplete$empty, showMenu: false});
};
var _kirchner$elm_pat$Tools_Dropdown$resetInput = function (state) {
	return {
		ctor: '_Tuple2',
		_0: _kirchner$elm_pat$Tools_Dropdown$resetMenu(
			_elm_lang$core$Native_Utils.update(
				state,
				{query: ''})),
		_1: _elm_lang$core$Maybe$Nothing
	};
};
var _kirchner$elm_pat$Tools_Dropdown$setQuery = F3(
	function (data, state, idString) {
		var maybeIdPoint = A2(
			_elm_lang$core$Maybe$andThen,
			function (id) {
				return A2(
					_elm_lang$core$Maybe$map,
					function (point) {
						return {
							ctor: '_Tuple2',
							_0: _kirchner$elm_pat$Store$fromInt(id),
							_1: point
						};
					},
					A2(
						_kirchner$elm_pat$Store$get,
						_kirchner$elm_pat$Store$fromInt(id),
						data.store));
			},
			_elm_lang$core$Result$toMaybe(
				_elm_lang$core$String$toInt(idString)));
		var query = A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			A2(
				_elm_lang$core$Maybe$map,
				function (_p6) {
					var _p7 = _p6;
					return A2(_kirchner$elm_pat$Tools_Dropdown$pointEntry, _p7._0, _p7._1);
				},
				maybeIdPoint));
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_Utils.update(
				state,
				{query: query}),
			_1: A2(
				_elm_lang$core$Maybe$andThen,
				function (id) {
					return A2(
						_elm_lang$core$Maybe$map,
						function (point) {
							return {
								ctor: '_Tuple2',
								_0: _kirchner$elm_pat$Store$fromInt(id),
								_1: point
							};
						},
						A2(
							_kirchner$elm_pat$Store$get,
							_kirchner$elm_pat$Store$fromInt(id),
							data.store));
				},
				_elm_lang$core$Result$toMaybe(
					_elm_lang$core$String$toInt(idString)))
		};
	});
var _kirchner$elm_pat$Tools_Dropdown$init = {autoState: _thebritican$elm_autocomplete$Autocomplete$empty, howManyToShow: 5, query: '', showMenu: false};
var _kirchner$elm_pat$Tools_Dropdown$State = F4(
	function (a, b, c, d) {
		return {autoState: a, howManyToShow: b, query: c, showMenu: d};
	});
var _kirchner$elm_pat$Tools_Dropdown$NoOp = {ctor: 'NoOp'};
var _kirchner$elm_pat$Tools_Dropdown$HandleEscape = {ctor: 'HandleEscape'};
var _kirchner$elm_pat$Tools_Dropdown$OnFocus = {ctor: 'OnFocus'};
var _kirchner$elm_pat$Tools_Dropdown$Reset = {ctor: 'Reset'};
var _kirchner$elm_pat$Tools_Dropdown$SelectPoint = function (a) {
	return {ctor: 'SelectPoint', _0: a};
};
var _kirchner$elm_pat$Tools_Dropdown$updateConfig = _thebritican$elm_autocomplete$Autocomplete$updateConfig(
	{
		toId: _kirchner$elm_pat$Tools_Dropdown$toId,
		onKeyDown: F2(
			function (code, maybeId) {
				return (_elm_lang$core$Native_Utils.eq(code, 38) || _elm_lang$core$Native_Utils.eq(code, 40)) ? A2(_elm_lang$core$Maybe$map, _kirchner$elm_pat$Tools_Dropdown$SelectPoint, maybeId) : (_elm_lang$core$Native_Utils.eq(code, 13) ? A2(_elm_lang$core$Maybe$map, _kirchner$elm_pat$Tools_Dropdown$SelectPoint, maybeId) : _elm_lang$core$Maybe$Just(_kirchner$elm_pat$Tools_Dropdown$Reset));
			}),
		onTooLow: _elm_lang$core$Maybe$Nothing,
		onTooHigh: _elm_lang$core$Maybe$Nothing,
		onMouseEnter: function (_p8) {
			return _elm_lang$core$Maybe$Nothing;
		},
		onMouseLeave: function (_p9) {
			return _elm_lang$core$Maybe$Nothing;
		},
		onMouseClick: function (id) {
			return _elm_lang$core$Maybe$Just(
				_kirchner$elm_pat$Tools_Dropdown$SelectPoint(id));
		},
		separateSelections: false
	});
var _kirchner$elm_pat$Tools_Dropdown$update = F4(
	function (selectedPoint, data, msg, state) {
		update:
		while (true) {
			var _p10 = msg;
			switch (_p10.ctor) {
				case 'SetQuery':
					var _p11 = _p10._0;
					var showMenu = !_elm_lang$core$List$isEmpty(
						A2(_kirchner$elm_pat$Tools_Dropdown$filteredPoints, _p11, data));
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							state,
							{query: _p11, showMenu: showMenu}),
						_1: _elm_lang$core$Maybe$Nothing
					};
				case 'SetAutoState':
					var _p12 = A5(
						_thebritican$elm_autocomplete$Autocomplete$update,
						_kirchner$elm_pat$Tools_Dropdown$updateConfig,
						_p10._0,
						state.howManyToShow,
						state.autoState,
						A2(_kirchner$elm_pat$Tools_Dropdown$filteredPoints, state.query, data));
					var newAutoState = _p12._0;
					var maybeMsg = _p12._1;
					var newState = _elm_lang$core$Native_Utils.update(
						state,
						{autoState: newAutoState});
					var _p13 = maybeMsg;
					if (_p13.ctor === 'Nothing') {
						return {ctor: '_Tuple2', _0: newState, _1: selectedPoint};
					} else {
						var _v6 = selectedPoint,
							_v7 = data,
							_v8 = _p13._0,
							_v9 = newState;
						selectedPoint = _v6;
						data = _v7;
						msg = _v8;
						state = _v9;
						continue update;
					}
				case 'Reset':
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							state,
							{
								autoState: A2(_thebritican$elm_autocomplete$Autocomplete$reset, _kirchner$elm_pat$Tools_Dropdown$updateConfig, state.autoState)
							}),
						_1: _elm_lang$core$Maybe$Nothing
					};
				case 'SelectPoint':
					var _p14 = A3(_kirchner$elm_pat$Tools_Dropdown$setQuery, data, state, _p10._0);
					var dirtyState = _p14._0;
					var selection = _p14._1;
					return {
						ctor: '_Tuple2',
						_0: _kirchner$elm_pat$Tools_Dropdown$resetMenu(dirtyState),
						_1: selection
					};
				case 'OnFocus':
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							state,
							{showMenu: !state.showMenu}),
						_1: _elm_lang$core$Maybe$Nothing
					};
				case 'HandleEscape':
					var validOptions = !_elm_lang$core$List$isEmpty(
						A2(_kirchner$elm_pat$Tools_Dropdown$filteredPoints, state.query, data));
					var handleEscape = validOptions ? {
						ctor: '_Tuple2',
						_0: _kirchner$elm_pat$Tools_Dropdown$resetMenu(state),
						_1: _elm_lang$core$Maybe$Nothing
					} : _kirchner$elm_pat$Tools_Dropdown$resetInput(state);
					var escapedState = function () {
						var _p15 = selectedPoint;
						if (_p15.ctor === 'Just') {
							return _elm_lang$core$Native_Utils.eq(
								state.query,
								_elm_lang$core$Basics$toString(_p15._0._0)) ? _kirchner$elm_pat$Tools_Dropdown$resetInput(state) : handleEscape;
						} else {
							return handleEscape;
						}
					}();
					return escapedState;
				default:
					return {ctor: '_Tuple2', _0: state, _1: selectedPoint};
			}
		}
	});
var _kirchner$elm_pat$Tools_Dropdown$SetAutoState = function (a) {
	return {ctor: 'SetAutoState', _0: a};
};
var _kirchner$elm_pat$Tools_Dropdown$viewMenu = F2(
	function (data, state) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _kirchner$elm_pat$Tools_Styles$class(
					{
						ctor: '::',
						_0: _kirchner$elm_pat$Tools_Styles$MenuContainer,
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$map,
					_kirchner$elm_pat$Tools_Dropdown$SetAutoState,
					A4(
						_thebritican$elm_autocomplete$Autocomplete$view,
						_kirchner$elm_pat$Tools_Dropdown$viewConfig,
						state.howManyToShow,
						state.autoState,
						A2(_kirchner$elm_pat$Tools_Dropdown$filteredPoints, state.query, data))),
				_1: {ctor: '[]'}
			});
	});
var _kirchner$elm_pat$Tools_Dropdown$SetQuery = function (a) {
	return {ctor: 'SetQuery', _0: a};
};
var _kirchner$elm_pat$Tools_Dropdown$view = F3(
	function (selectedPoint, data, state) {
		var menu = (state.showMenu && (!_elm_lang$core$List$isEmpty(
			A2(_kirchner$elm_pat$Tools_Dropdown$filteredPoints, state.query, data)))) ? A2(_kirchner$elm_pat$Tools_Dropdown$viewMenu, data, state) : A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{ctor: '[]'});
		var query = function () {
			var _p16 = selectedPoint;
			if (_p16.ctor === 'Just') {
				return A2(_kirchner$elm_pat$Tools_Dropdown$pointEntry, _p16._0._0, _p16._0._1);
			} else {
				return state.query;
			}
		}();
		var fromResult = function (result) {
			var _p17 = result;
			if (_p17.ctor === 'Ok') {
				return _elm_lang$core$Json_Decode$succeed(_p17._0);
			} else {
				return _elm_lang$core$Json_Decode$fail(_p17._0);
			}
		};
		var dec = A2(
			_elm_lang$core$Json_Decode$andThen,
			fromResult,
			A2(
				_elm_lang$core$Json_Decode$map,
				function (code) {
					return (_elm_lang$core$Native_Utils.eq(code, 38) || _elm_lang$core$Native_Utils.eq(code, 40)) ? _elm_lang$core$Result$Ok(_kirchner$elm_pat$Tools_Dropdown$NoOp) : (_elm_lang$core$Native_Utils.eq(code, 27) ? _elm_lang$core$Result$Ok(_kirchner$elm_pat$Tools_Dropdown$HandleEscape) : _elm_lang$core$Result$Err('not handling that key'));
				},
				_elm_lang$html$Html_Events$keyCode));
		var options = {preventDefault: true, stopPropagation: false};
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('tool__ValueContainer'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$input,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Events$onInput(_kirchner$elm_pat$Tools_Dropdown$SetQuery),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onFocus(_kirchner$elm_pat$Tools_Dropdown$OnFocus),
							_1: {
								ctor: '::',
								_0: A3(_elm_lang$html$Html_Events$onWithOptions, 'keydown', options, dec),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$value(query),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$placeholder('anchor point'),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$autocomplete(false),
											_1: {
												ctor: '::',
												_0: _kirchner$elm_pat$Tools_Styles$class(
													{
														ctor: '::',
														_0: _kirchner$elm_pat$Tools_Styles$Textfield,
														_1: {
															ctor: '::',
															_0: _kirchner$elm_pat$Tools_Styles$MenuTextfield,
															_1: {ctor: '[]'}
														}
													}),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: menu,
					_1: {ctor: '[]'}
				}
			});
	});

var _kirchner$elm_pat$Tools_Distance$snapAngle = F2(
	function (count, angle) {
		var divisor = (2 * _elm_lang$core$Basics$pi) / _elm_lang$core$Basics$toFloat(count);
		return _elm_lang$core$Basics$toFloat(
			_elm_lang$core$Basics$round(angle / divisor)) * divisor;
	});
var _kirchner$elm_pat$Tools_Distance$pointPosition = F3(
	function (data, state, anchorPosition) {
		var snap = function (angle) {
			return A2(_elm_lang$core$List$member, _ohanhi$keyboard_extra$Keyboard_Extra$Shift, data.pressedKeys) ? A2(_kirchner$elm_pat$Tools_Distance$snapAngle, 8, angle) : angle;
		};
		var position = F2(
			function (distance, angle) {
				return A2(
					_elm_community$linear_algebra$Math_Vector2$add,
					anchorPosition,
					A2(
						_elm_community$linear_algebra$Math_Vector2$scale,
						distance,
						A2(
							_elm_community$linear_algebra$Math_Vector2$vec2,
							_elm_lang$core$Basics$cos(
								snap(angle)),
							_elm_lang$core$Basics$sin(
								snap(angle)))));
			});
		var _p2 = A2(
			_elm_lang$core$Maybe$map,
			function (_p0) {
				var _p1 = _p0;
				return A2(
					_elm_community$linear_algebra$Math_Vector2$vec2,
					_elm_lang$core$Basics$toFloat(_p1.x),
					_elm_lang$core$Basics$toFloat(_p1.y));
			},
			data.cursorPosition);
		if (_p2.ctor === 'Just') {
			var delta = A2(_elm_community$linear_algebra$Math_Vector2$sub, _p2._0, anchorPosition);
			return _elm_lang$core$Maybe$Just(
				A2(
					position,
					A2(
						_elm_lang$core$Maybe$withDefault,
						_elm_community$linear_algebra$Math_Vector2$length(delta),
						A2(
							_elm_lang$core$Maybe$andThen,
							_kirchner$elm_pat$Expr$compute(data.variables),
							state.distance)),
					A2(
						_elm_lang$core$Maybe$withDefault,
						A2(
							_elm_lang$core$Basics$atan2,
							_elm_community$linear_algebra$Math_Vector2$getY(delta),
							_elm_community$linear_algebra$Math_Vector2$getX(delta)),
						A2(
							_elm_lang$core$Maybe$andThen,
							_kirchner$elm_pat$Expr$compute(data.variables),
							state.angle))));
		} else {
			return A3(
				_elm_lang$core$Maybe$map2,
				position,
				A2(
					_elm_lang$core$Maybe$andThen,
					_kirchner$elm_pat$Expr$compute(data.variables),
					state.distance),
				A2(
					_elm_lang$core$Maybe$andThen,
					_kirchner$elm_pat$Expr$compute(data.variables),
					state.angle));
		}
	});
var _kirchner$elm_pat$Tools_Distance$anchorPosition = F2(
	function (data, state) {
		return A2(
			_elm_lang$core$Maybe$andThen,
			A2(_kirchner$elm_pat$Point$position, data.store, data.variables),
			A2(
				_elm_lang$core$Maybe$andThen,
				A2(_elm_lang$core$Basics$flip, _kirchner$elm_pat$Store$get, data.store),
				A2(_elm_lang$core$Maybe$map, _elm_lang$core$Tuple$first, state.selectedPoint)));
	});
var _kirchner$elm_pat$Tools_Distance$line = F2(
	function (data, state) {
		var draw = F2(
			function (anchorPosition, angle) {
				return A2(
					_kirchner$elm_pat$Svg_Extra$drawArrow,
					anchorPosition,
					A2(
						_elm_community$linear_algebra$Math_Vector2$add,
						anchorPosition,
						A2(
							_elm_community$linear_algebra$Math_Vector2$scale,
							10000,
							A2(
								_elm_community$linear_algebra$Math_Vector2$vec2,
								_elm_lang$core$Basics$cos(angle),
								_elm_lang$core$Basics$sin(angle)))));
			});
		var _p3 = A2(_kirchner$elm_pat$Tools_Distance$anchorPosition, data, state);
		if (_p3.ctor === 'Just') {
			return A2(
				_elm_lang$core$Maybe$map,
				draw(_p3._0),
				A2(
					_elm_lang$core$Maybe$andThen,
					_kirchner$elm_pat$Expr$compute(data.variables),
					state.angle));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _kirchner$elm_pat$Tools_Distance$circle = F2(
	function (data, state) {
		var draw = F2(
			function (anchorPosition, distance) {
				return A2(
					_elm_lang$svg$Svg$circle,
					{
						ctor: '::',
						_0: _elm_lang$svg$Svg_Attributes$cx(
							_elm_lang$core$Basics$toString(
								_elm_community$linear_algebra$Math_Vector2$getX(anchorPosition))),
						_1: {
							ctor: '::',
							_0: _elm_lang$svg$Svg_Attributes$cy(
								_elm_lang$core$Basics$toString(
									_elm_community$linear_algebra$Math_Vector2$getY(anchorPosition))),
							_1: {
								ctor: '::',
								_0: _elm_lang$svg$Svg_Attributes$r(
									_elm_lang$core$Basics$toString(distance)),
								_1: {
									ctor: '::',
									_0: _elm_lang$svg$Svg_Attributes$strokeWidth('1'),
									_1: {
										ctor: '::',
										_0: _elm_lang$svg$Svg_Attributes$stroke(_kirchner$elm_pat$Styles_Colors$base1),
										_1: {
											ctor: '::',
											_0: _elm_lang$svg$Svg_Attributes$fill('none'),
											_1: {
												ctor: '::',
												_0: _elm_lang$svg$Svg_Attributes$strokeDasharray('5, 5'),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					},
					{ctor: '[]'});
			});
		var _p4 = A2(_kirchner$elm_pat$Tools_Distance$anchorPosition, data, state);
		if (_p4.ctor === 'Just') {
			return A2(
				_elm_lang$core$Maybe$map,
				draw(_p4._0),
				A2(
					_elm_lang$core$Maybe$andThen,
					_kirchner$elm_pat$Expr$compute(data.variables),
					state.distance));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _kirchner$elm_pat$Tools_Distance$newPoint = F2(
	function (data, state) {
		var format = _cuducos$elm_format_number$FormatNumber$format(
			{decimals: 2, thousandSeparator: ' ', decimalSeparator: '.'});
		var lerp = F3(
			function (t, u, v) {
				return A2(
					_elm_community$linear_algebra$Math_Vector2$add,
					A2(_elm_community$linear_algebra$Math_Vector2$scale, 1 - t, u),
					A2(_elm_community$linear_algebra$Math_Vector2$scale, t, v));
			});
		var draw = function (anchorPosition) {
			return A2(
				_elm_lang$core$Maybe$map,
				function (pointPosition) {
					return A2(
						_elm_lang$svg$Svg$g,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(_kirchner$elm_pat$Svg_Extra$drawPoint, _kirchner$elm_pat$Styles_Colors$red, pointPosition),
							_1: {
								ctor: '::',
								_0: A3(_kirchner$elm_pat$Svg_Extra$drawSelector, _kirchner$elm_pat$Svg_Extra$Solid, _kirchner$elm_pat$Styles_Colors$red, pointPosition),
								_1: {
									ctor: '::',
									_0: A2(_kirchner$elm_pat$Svg_Extra$drawArrow, anchorPosition, pointPosition),
									_1: {
										ctor: '::',
										_0: A3(_kirchner$elm_pat$Svg_Extra$drawAngleArc, _kirchner$elm_pat$Svg_Extra$defaultArcConfig, anchorPosition, pointPosition),
										_1: {
											ctor: '::',
											_0: A2(
												_kirchner$elm_pat$Svg_Extra$label,
												{
													ctor: '::',
													_0: _elm_lang$svg$Svg_Attributes$transform(
														_kirchner$elm_pat$Svg_Extra$translate(
															A3(lerp, 0.5, anchorPosition, pointPosition))),
													_1: {ctor: '[]'}
												},
												{
													ctor: '::',
													_0: _elm_lang$svg$Svg$text(
														format(
															_elm_community$linear_algebra$Math_Vector2$length(
																A2(_elm_community$linear_algebra$Math_Vector2$sub, pointPosition, anchorPosition)))),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						});
				},
				A3(_kirchner$elm_pat$Tools_Distance$pointPosition, data, state, anchorPosition));
		};
		return A2(
			_elm_lang$core$Maybe$andThen,
			draw,
			A2(_kirchner$elm_pat$Tools_Distance$anchorPosition, data, state));
	});
var _kirchner$elm_pat$Tools_Distance$point = F2(
	function (data, state) {
		var snap = function (angle) {
			return A2(_elm_lang$core$List$member, _ohanhi$keyboard_extra$Keyboard_Extra$Shift, data.pressedKeys) ? A2(_kirchner$elm_pat$Tools_Distance$snapAngle, 8, angle) : angle;
		};
		var anchorId = A2(_elm_lang$core$Maybe$map, _elm_lang$core$Tuple$first, state.selectedPoint);
		var anchorPosition = A2(
			_elm_lang$core$Maybe$andThen,
			A2(_kirchner$elm_pat$Point$position, data.store, data.variables),
			A2(
				_elm_lang$core$Maybe$andThen,
				A2(_elm_lang$core$Basics$flip, _kirchner$elm_pat$Store$get, data.store),
				anchorId));
		var cursorPosition = A2(
			_elm_lang$core$Maybe$map,
			function (_p5) {
				var _p6 = _p5;
				return A2(
					_elm_community$linear_algebra$Math_Vector2$vec2,
					_elm_lang$core$Basics$toFloat(_p6.x),
					_elm_lang$core$Basics$toFloat(_p6.y));
			},
			data.cursorPosition);
		var deltaCursor = A3(_elm_lang$core$Maybe$map2, _elm_community$linear_algebra$Math_Vector2$sub, cursorPosition, anchorPosition);
		var distanceCursor = A2(
			_elm_lang$core$Maybe$map,
			_kirchner$elm_pat$Expr$Number,
			A2(_elm_lang$core$Maybe$map, _elm_community$linear_algebra$Math_Vector2$length, deltaCursor));
		var distance = A2(_elm_community$maybe_extra$Maybe_Extra$or, state.distance, distanceCursor);
		var angleCursor = A2(
			_elm_lang$core$Maybe$map,
			_kirchner$elm_pat$Expr$Number,
			A2(
				_elm_lang$core$Maybe$map,
				snap,
				A2(
					_elm_lang$core$Maybe$map,
					function (delta) {
						return A2(
							_elm_lang$core$Basics$atan2,
							_elm_community$linear_algebra$Math_Vector2$getY(delta),
							_elm_community$linear_algebra$Math_Vector2$getX(delta));
					},
					deltaCursor)));
		var angle = A2(_elm_community$maybe_extra$Maybe_Extra$or, state.angle, angleCursor);
		return A4(_elm_lang$core$Maybe$map3, _kirchner$elm_pat$Point$distance, anchorId, distance, angle);
	});
var _kirchner$elm_pat$Tools_Distance$svg = F4(
	function (callbacks, updateState, data, state) {
		var _p7 = A2(_kirchner$elm_pat$Tools_Distance$anchorPosition, data, state);
		if (_p7.ctor === 'Just') {
			var addPoint = A2(
				_elm_lang$core$Maybe$map,
				callbacks.addPoint,
				A2(_kirchner$elm_pat$Tools_Distance$point, data, state));
			return A2(
				_elm_lang$svg$Svg$g,
				{ctor: '[]'},
				A2(
					_elm_lang$core$List$filterMap,
					_elm_lang$core$Basics$identity,
					{
						ctor: '::',
						_0: A2(_kirchner$elm_pat$Tools_Distance$newPoint, data, state),
						_1: {
							ctor: '::',
							_0: A2(_kirchner$elm_pat$Tools_Distance$circle, data, state),
							_1: {
								ctor: '::',
								_0: A2(_kirchner$elm_pat$Tools_Distance$line, data, state),
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Maybe$Just(
										A3(_kirchner$elm_pat$Tools_Common$svgUpdateMouse, addPoint, callbacks.updateCursorPosition, data)),
									_1: {ctor: '[]'}
								}
							}
						}
					}));
		} else {
			var selectPoint = function (_p8) {
				return updateState(
					function (maybeId) {
						return _elm_lang$core$Native_Utils.update(
							state,
							{
								selectedPoint: function () {
									var _p9 = maybeId;
									if (_p9.ctor === 'Just') {
										var _p10 = _p9._0;
										return A2(
											_elm_lang$core$Maybe$map,
											function (point) {
												return {ctor: '_Tuple2', _0: _p10, _1: point};
											},
											A2(_kirchner$elm_pat$Store$get, _p10, data.store));
									} else {
										return _elm_lang$core$Maybe$Nothing;
									}
								}()
							});
					}(_p8));
			};
			return A2(
				_elm_lang$svg$Svg$g,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A3(_kirchner$elm_pat$Tools_Common$svgSelectPoint, callbacks.focusPoint, selectPoint, data),
					_1: {ctor: '[]'}
				});
		}
	});
var _kirchner$elm_pat$Tools_Distance$view = F4(
	function (callbacks, updateState, data, state) {
		var _p11 = function () {
			var _p12 = {
				ctor: '_Tuple2',
				_0: data.cursorPosition,
				_1: A2(_kirchner$elm_pat$Tools_Distance$anchorPosition, data, state)
			};
			if (((_p12.ctor === '_Tuple2') && (_p12._0.ctor === 'Just')) && (_p12._1.ctor === 'Just')) {
				var _p13 = _p12._1._0;
				var w = A3(
					_elm_lang$core$Basics$flip,
					_elm_community$linear_algebra$Math_Vector2$sub,
					_kirchner$elm_pat$Types$toVec(_p12._0._0),
					_p13);
				var p = A3(_kirchner$elm_pat$Tools_Distance$pointPosition, data, state, _p13);
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Basics$toString(
						_elm_community$linear_algebra$Math_Vector2$length(w)),
					_1: _elm_lang$core$Basics$toString(
						A2(
							_elm_lang$core$Basics$atan2,
							_elm_community$linear_algebra$Math_Vector2$getY(w),
							_elm_community$linear_algebra$Math_Vector2$getX(w)))
				};
			} else {
				return {ctor: '_Tuple2', _0: 'distance', _1: 'angle'};
			}
		}();
		var distancePlaceholder = _p11._0;
		var anglePlaceholder = _p11._1;
		var updateAutoState = function (autoMsg) {
			var _p14 = A4(_kirchner$elm_pat$Tools_Dropdown$update, state.selectedPoint, data, autoMsg, state.dropdownState);
			var newDropdownState = _p14._0;
			var newSelectedPoint = _p14._1;
			return updateState(
				_elm_lang$core$Native_Utils.update(
					state,
					{dropdownState: newDropdownState, selectedPoint: newSelectedPoint}));
		};
		var updateAngle = function (_p15) {
			return updateState(
				function (s) {
					return _elm_lang$core$Native_Utils.update(
						state,
						{
							angle: _kirchner$elm_pat$Expr$parse(s)
						});
				}(_p15));
		};
		var updateDistance = function (_p16) {
			return updateState(
				function (s) {
					return _elm_lang$core$Native_Utils.update(
						state,
						{
							distance: _kirchner$elm_pat$Expr$parse(s)
						});
				}(_p16));
		};
		return A5(
			_kirchner$elm_pat$Tools_Common$view,
			callbacks,
			data,
			state,
			_kirchner$elm_pat$Tools_Distance$point,
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$map,
					updateAutoState,
					A3(_kirchner$elm_pat$Tools_Dropdown$view, state.selectedPoint, data, state.dropdownState)),
				_1: {
					ctor: '::',
					_0: A4(_kirchner$elm_pat$Tools_Common$exprInput_, true, distancePlaceholder, state.distance, updateDistance),
					_1: {
						ctor: '::',
						_0: A3(_kirchner$elm_pat$Tools_Common$exprInput, anglePlaceholder, state.angle, updateAngle),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _kirchner$elm_pat$Tools_Distance$initWith = F4(
	function (id, anchor, distance, angle) {
		return {
			distance: _elm_lang$core$Maybe$Just(distance),
			angle: _elm_lang$core$Maybe$Just(angle),
			id: _elm_lang$core$Maybe$Just(id),
			dropdownState: _kirchner$elm_pat$Tools_Dropdown$init,
			selectedPoint: _elm_lang$core$Maybe$Nothing
		};
	});
var _kirchner$elm_pat$Tools_Distance$init = function (data) {
	return {
		distance: _elm_lang$core$Maybe$Nothing,
		angle: _elm_lang$core$Maybe$Nothing,
		id: _elm_lang$core$Maybe$Nothing,
		dropdownState: _kirchner$elm_pat$Tools_Dropdown$init,
		selectedPoint: function () {
			var _p17 = _elm_lang$core$List$head(data.selectedPoints);
			if (_p17.ctor === 'Just') {
				var _p19 = _p17._0;
				var _p18 = A2(_kirchner$elm_pat$Store$get, _p19, data.store);
				if (_p18.ctor === 'Just') {
					return _elm_lang$core$Maybe$Just(
						{ctor: '_Tuple2', _0: _p19, _1: _p18._0});
				} else {
					return _elm_lang$core$Maybe$Nothing;
				}
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		}()
	};
};
var _kirchner$elm_pat$Tools_Distance$State = F5(
	function (a, b, c, d, e) {
		return {distance: a, angle: b, id: c, dropdownState: d, selectedPoint: e};
	});

var _kirchner$elm_pat$Tools_ExtendPiece$lineSegments = F2(
	function (data, state) {
		var _p0 = {
			ctor: '_Tuple3',
			_0: data.cursorPosition,
			_1: A2(
				_elm_lang$core$Maybe$andThen,
				A2(_kirchner$elm_pat$Point$positionById, data.store, data.variables),
				data.focusedPoint),
			_2: A2(
				_elm_lang$core$Maybe$andThen,
				_kirchner$elm_pat$Piece$next(state.segment),
				A2(_kirchner$elm_pat$Store$get, state.piece, data.pieceStore))
		};
		_v0_2:
		do {
			if (_p0.ctor === '_Tuple3') {
				if (_p0._0.ctor === 'Just') {
					if (_p0._2.ctor === 'Just') {
						var c = A3(_kirchner$elm_pat$Point$positionById, data.store, data.variables, _p0._2._0);
						var b = _kirchner$elm_pat$Types$toVec(_p0._0._0);
						var a = A3(_kirchner$elm_pat$Point$positionById, data.store, data.variables, state.segment);
						var _p1 = {ctor: '_Tuple2', _0: a, _1: c};
						if (((_p1.ctor === '_Tuple2') && (_p1._0.ctor === 'Just')) && (_p1._1.ctor === 'Just')) {
							return _elm_lang$core$Maybe$Just(
								A2(
									_elm_lang$svg$Svg$g,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: A2(_kirchner$elm_pat$Svg_Extra$drawLineSegment, _p1._0._0, b),
										_1: {
											ctor: '::',
											_0: A2(_kirchner$elm_pat$Svg_Extra$drawLineSegment, b, _p1._1._0),
											_1: {ctor: '[]'}
										}
									}));
						} else {
							return _elm_lang$core$Maybe$Nothing;
						}
					} else {
						break _v0_2;
					}
				} else {
					if ((_p0._1.ctor === 'Just') && (_p0._2.ctor === 'Just')) {
						var _p3 = _p0._1._0;
						var c = A3(_kirchner$elm_pat$Point$positionById, data.store, data.variables, _p0._2._0);
						var a = A3(_kirchner$elm_pat$Point$positionById, data.store, data.variables, state.segment);
						var _p2 = {ctor: '_Tuple2', _0: a, _1: c};
						if (((_p2.ctor === '_Tuple2') && (_p2._0.ctor === 'Just')) && (_p2._1.ctor === 'Just')) {
							return _elm_lang$core$Maybe$Just(
								A2(
									_elm_lang$svg$Svg$g,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: A2(_kirchner$elm_pat$Svg_Extra$drawLineSegment, _p2._0._0, _p3),
										_1: {
											ctor: '::',
											_0: A2(_kirchner$elm_pat$Svg_Extra$drawLineSegment, _p3, _p2._1._0),
											_1: {ctor: '[]'}
										}
									}));
						} else {
							return _elm_lang$core$Maybe$Nothing;
						}
					} else {
						break _v0_2;
					}
				}
			} else {
				break _v0_2;
			}
		} while(false);
		return _elm_lang$core$Maybe$Nothing;
	});
var _kirchner$elm_pat$Tools_ExtendPiece$svg = F3(
	function (callbacks, data, state) {
		return A2(
			_elm_lang$svg$Svg$g,
			{ctor: '[]'},
			A2(
				_elm_lang$core$List$filterMap,
				_elm_lang$core$Basics$identity,
				{
					ctor: '::',
					_0: A2(_kirchner$elm_pat$Tools_ExtendPiece$lineSegments, data, state),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Maybe$Just(
							A3(_kirchner$elm_pat$Tools_Common$svgUpdateMouse, _elm_lang$core$Maybe$Nothing, callbacks.updateCursorPosition, data)),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Maybe$Just(
								A3(
									_kirchner$elm_pat$Tools_Common$svgSelectPoint,
									callbacks.focusPoint,
									A2(callbacks.extendPiece, state.piece, state.segment),
									data)),
							_1: {ctor: '[]'}
						}
					}
				}));
	});
var _kirchner$elm_pat$Tools_ExtendPiece$init = F2(
	function (piece, segment) {
		return {piece: piece, segment: segment};
	});
var _kirchner$elm_pat$Tools_ExtendPiece$State = F2(
	function (a, b) {
		return {piece: a, segment: b};
	});

var _kirchner$elm_pat$Tools_Relative$pointPosition = F3(
	function (data, state, anchorPosition) {
		var y = A2(
			_elm_lang$core$Maybe$map,
			function (y) {
				return y + _elm_community$linear_algebra$Math_Vector2$getY(anchorPosition);
			},
			A2(
				_elm_lang$core$Maybe$andThen,
				_kirchner$elm_pat$Expr$compute(data.variables),
				state.y));
		var x = A2(
			_elm_lang$core$Maybe$map,
			function (x) {
				return x + _elm_community$linear_algebra$Math_Vector2$getX(anchorPosition);
			},
			A2(
				_elm_lang$core$Maybe$andThen,
				_kirchner$elm_pat$Expr$compute(data.variables),
				state.x));
		var _p0 = data.cursorPosition;
		if (_p0.ctor === 'Just') {
			var _p1 = _p0._0;
			return _elm_lang$core$Maybe$Just(
				A2(
					_elm_community$linear_algebra$Math_Vector2$vec2,
					A2(
						_elm_lang$core$Maybe$withDefault,
						_elm_lang$core$Basics$toFloat(_p1.x),
						x),
					A2(
						_elm_lang$core$Maybe$withDefault,
						_elm_lang$core$Basics$toFloat(_p1.y),
						y)));
		} else {
			return A3(_elm_lang$core$Maybe$map2, _elm_community$linear_algebra$Math_Vector2$vec2, x, y);
		}
	});
var _kirchner$elm_pat$Tools_Relative$anchorPosition = F2(
	function (data, state) {
		return A2(
			_elm_lang$core$Maybe$andThen,
			A2(_kirchner$elm_pat$Point$position, data.store, data.variables),
			A2(
				_elm_lang$core$Maybe$andThen,
				A2(_elm_lang$core$Basics$flip, _kirchner$elm_pat$Store$get, data.store),
				A2(_elm_lang$core$Maybe$map, _elm_lang$core$Tuple$first, state.selectedPoint)));
	});
var _kirchner$elm_pat$Tools_Relative$verticalLine = F3(
	function (data, state, anchorPosition) {
		return A2(
			_elm_lang$core$Maybe$map,
			function (x) {
				return _kirchner$elm_pat$Svg_Extra$drawVerticalLine(
					x + _elm_community$linear_algebra$Math_Vector2$getX(anchorPosition));
			},
			A2(
				_elm_lang$core$Maybe$andThen,
				_kirchner$elm_pat$Expr$compute(data.variables),
				state.x));
	});
var _kirchner$elm_pat$Tools_Relative$horizontalLine = F3(
	function (data, state, anchorPosition) {
		return A2(
			_elm_lang$core$Maybe$map,
			function (y) {
				return _kirchner$elm_pat$Svg_Extra$drawHorizontalLine(
					y + _elm_community$linear_algebra$Math_Vector2$getY(anchorPosition));
			},
			A2(
				_elm_lang$core$Maybe$andThen,
				_kirchner$elm_pat$Expr$compute(data.variables),
				state.y));
	});
var _kirchner$elm_pat$Tools_Relative$newPoint = F2(
	function (data, state) {
		var draw = function (anchorPosition) {
			return A2(
				_elm_lang$core$Maybe$map,
				function (pointPosition) {
					return A2(
						_elm_lang$svg$Svg$g,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(_kirchner$elm_pat$Svg_Extra$drawPoint, _kirchner$elm_pat$Styles_Colors$red, pointPosition),
							_1: {
								ctor: '::',
								_0: A3(_kirchner$elm_pat$Svg_Extra$drawSelector, _kirchner$elm_pat$Svg_Extra$Solid, _kirchner$elm_pat$Styles_Colors$red, pointPosition),
								_1: {
									ctor: '::',
									_0: A2(_kirchner$elm_pat$Svg_Extra$drawRectArrow, anchorPosition, pointPosition),
									_1: {ctor: '[]'}
								}
							}
						});
				},
				A3(_kirchner$elm_pat$Tools_Relative$pointPosition, data, state, anchorPosition));
		};
		return A2(
			_elm_lang$core$Maybe$andThen,
			draw,
			A2(_kirchner$elm_pat$Tools_Relative$anchorPosition, data, state));
	});
var _kirchner$elm_pat$Tools_Relative$point = F2(
	function (data, state) {
		var yCursor = A2(
			_elm_lang$core$Maybe$map,
			function (_p2) {
				var _p3 = _p2;
				return _elm_lang$core$Basics$toFloat(_p3.y);
			},
			data.cursorPosition);
		var xCursor = A2(
			_elm_lang$core$Maybe$map,
			function (_p4) {
				var _p5 = _p4;
				return _elm_lang$core$Basics$toFloat(_p5.x);
			},
			data.cursorPosition);
		var anchorId = A2(_elm_lang$core$Maybe$map, _elm_lang$core$Tuple$first, state.selectedPoint);
		var anchorPosition = A2(
			_elm_lang$core$Maybe$andThen,
			A2(_kirchner$elm_pat$Point$position, data.store, data.variables),
			A2(
				_elm_lang$core$Maybe$andThen,
				A2(_elm_lang$core$Basics$flip, _kirchner$elm_pat$Store$get, data.store),
				anchorId));
		var xOffsetCursor = A3(
			_elm_lang$core$Maybe$map2,
			F2(
				function (x, anchor) {
					return _kirchner$elm_pat$Expr$Number(
						x - _elm_community$linear_algebra$Math_Vector2$getX(anchor));
				}),
			xCursor,
			anchorPosition);
		var xOffset = A2(_elm_community$maybe_extra$Maybe_Extra$or, state.x, xOffsetCursor);
		var yOffsetCursor = A3(
			_elm_lang$core$Maybe$map2,
			F2(
				function (y, anchor) {
					return _kirchner$elm_pat$Expr$Number(
						y - _elm_community$linear_algebra$Math_Vector2$getY(anchor));
				}),
			yCursor,
			anchorPosition);
		var yOffset = A2(_elm_community$maybe_extra$Maybe_Extra$or, state.y, yOffsetCursor);
		return A4(_elm_lang$core$Maybe$map3, _kirchner$elm_pat$Point$relative, anchorId, xOffset, yOffset);
	});
var _kirchner$elm_pat$Tools_Relative$svg = F4(
	function (callbacks, updateState, data, state) {
		var _p6 = A2(_kirchner$elm_pat$Tools_Relative$anchorPosition, data, state);
		if (_p6.ctor === 'Just') {
			var _p7 = _p6._0;
			var addPoint = A2(
				_elm_lang$core$Maybe$map,
				callbacks.addPoint,
				A2(_kirchner$elm_pat$Tools_Relative$point, data, state));
			return A2(
				_elm_lang$svg$Svg$g,
				{ctor: '[]'},
				A2(
					_elm_lang$core$List$filterMap,
					_elm_lang$core$Basics$identity,
					{
						ctor: '::',
						_0: A2(_kirchner$elm_pat$Tools_Relative$newPoint, data, state),
						_1: {
							ctor: '::',
							_0: A3(_kirchner$elm_pat$Tools_Relative$horizontalLine, data, state, _p7),
							_1: {
								ctor: '::',
								_0: A3(_kirchner$elm_pat$Tools_Relative$verticalLine, data, state, _p7),
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Maybe$Just(
										A3(_kirchner$elm_pat$Tools_Common$svgUpdateMouse, addPoint, callbacks.updateCursorPosition, data)),
									_1: {ctor: '[]'}
								}
							}
						}
					}));
		} else {
			var selectPoint = function (_p8) {
				return updateState(
					function (maybeId) {
						return _elm_lang$core$Native_Utils.update(
							state,
							{
								selectedPoint: function () {
									var _p9 = maybeId;
									if (_p9.ctor === 'Just') {
										var _p10 = _p9._0;
										return A2(
											_elm_lang$core$Maybe$map,
											function (point) {
												return {ctor: '_Tuple2', _0: _p10, _1: point};
											},
											A2(_kirchner$elm_pat$Store$get, _p10, data.store));
									} else {
										return _elm_lang$core$Maybe$Nothing;
									}
								}()
							});
					}(_p8));
			};
			return A2(
				_elm_lang$svg$Svg$g,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A3(_kirchner$elm_pat$Tools_Common$svgSelectPoint, callbacks.focusPoint, selectPoint, data),
					_1: {ctor: '[]'}
				});
		}
	});
var _kirchner$elm_pat$Tools_Relative$view = F4(
	function (callbacks, updateStateCallback, data, state) {
		var updateAutoState = function (autoMsg) {
			var _p11 = A4(_kirchner$elm_pat$Tools_Dropdown$update, state.selectedPoint, data, autoMsg, state.dropdownState);
			var newDropdownState = _p11._0;
			var newSelectedPoint = _p11._1;
			return updateStateCallback(
				_elm_lang$core$Native_Utils.update(
					state,
					{dropdownState: newDropdownState, selectedPoint: newSelectedPoint}));
		};
		var updateY = function (_p12) {
			return updateStateCallback(
				function (s) {
					return _elm_lang$core$Native_Utils.update(
						state,
						{
							y: _kirchner$elm_pat$Expr$parse(s)
						});
				}(_p12));
		};
		var updateX = function (_p13) {
			return updateStateCallback(
				function (s) {
					return _elm_lang$core$Native_Utils.update(
						state,
						{
							x: _kirchner$elm_pat$Expr$parse(s)
						});
				}(_p13));
		};
		return A5(
			_kirchner$elm_pat$Tools_Common$view,
			callbacks,
			data,
			state,
			_kirchner$elm_pat$Tools_Relative$point,
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$map,
					updateAutoState,
					A3(_kirchner$elm_pat$Tools_Dropdown$view, state.selectedPoint, data, state.dropdownState)),
				_1: {
					ctor: '::',
					_0: A3(_kirchner$elm_pat$Tools_Common$exprInput, 'horizontal distance', state.x, updateX),
					_1: {
						ctor: '::',
						_0: A3(_kirchner$elm_pat$Tools_Common$exprInput, 'vertical distance', state.y, updateY),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _kirchner$elm_pat$Tools_Relative$initWith = F4(
	function (id, anchor, x, y) {
		return {
			x: _elm_lang$core$Maybe$Just(x),
			y: _elm_lang$core$Maybe$Just(y),
			id: _elm_lang$core$Maybe$Just(id),
			dropdownState: _kirchner$elm_pat$Tools_Dropdown$init,
			selectedPoint: _elm_lang$core$Maybe$Nothing
		};
	});
var _kirchner$elm_pat$Tools_Relative$init = function (data) {
	return {
		x: _elm_lang$core$Maybe$Nothing,
		y: _elm_lang$core$Maybe$Nothing,
		id: _elm_lang$core$Maybe$Nothing,
		dropdownState: _kirchner$elm_pat$Tools_Dropdown$init,
		selectedPoint: function () {
			var _p14 = _elm_lang$core$List$head(data.selectedPoints);
			if (_p14.ctor === 'Just') {
				var _p16 = _p14._0;
				var _p15 = A2(_kirchner$elm_pat$Store$get, _p16, data.store);
				if (_p15.ctor === 'Just') {
					return _elm_lang$core$Maybe$Just(
						{ctor: '_Tuple2', _0: _p16, _1: _p15._0});
				} else {
					return _elm_lang$core$Maybe$Nothing;
				}
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		}()
	};
};
var _kirchner$elm_pat$Tools_Relative$State = F5(
	function (a, b, c, d, e) {
		return {x: a, y: b, id: c, dropdownState: d, selectedPoint: e};
	});

var _kirchner$elm_pat$Model$Model = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return {store: a, pieceStore: b, variables: c, newName: d, newValue: e, tool: f, viewPort: g, drag: h, cursorPosition: i, focusedPoint: j, pressedKeys: k, selectedPoints: l, fileBrowser: m};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _kirchner$elm_pat$Model$Drag = F2(
	function (a, b) {
		return {start: a, current: b};
	});
var _kirchner$elm_pat$Model$None = {ctor: 'None'};
var _kirchner$elm_pat$Model$defaultModel = {
	store: _kirchner$elm_pat$Store$empty,
	pieceStore: _kirchner$elm_pat$Store$empty,
	variables: _elm_lang$core$Dict$empty,
	newName: _elm_lang$core$Maybe$Nothing,
	newValue: _elm_lang$core$Maybe$Nothing,
	tool: _kirchner$elm_pat$Model$None,
	viewPort: {x: -320, y: -320, width: 640, height: 640},
	drag: _elm_lang$core$Maybe$Nothing,
	cursorPosition: _elm_lang$core$Maybe$Nothing,
	focusedPoint: _elm_lang$core$Maybe$Nothing,
	pressedKeys: {ctor: '[]'},
	selectedPoints: {ctor: '[]'},
	fileBrowser: _kirchner$elm_pat$FileBrowser$defaultModel
};
var _kirchner$elm_pat$Model$ExtendPiece = function (a) {
	return {ctor: 'ExtendPiece', _0: a};
};
var _kirchner$elm_pat$Model$Distance = function (a) {
	return {ctor: 'Distance', _0: a};
};
var _kirchner$elm_pat$Model$Relative = function (a) {
	return {ctor: 'Relative', _0: a};
};
var _kirchner$elm_pat$Model$Absolute = function (a) {
	return {ctor: 'Absolute', _0: a};
};

var _kirchner$elm_pat$File$decodeVariables = _elm_lang$core$Json_Decode$dict(_kirchner$elm_pat$Expr$decode);
var _kirchner$elm_pat$File$encodeVariables = function (variables) {
	return _elm_lang$core$Json_Encode$object(
		_elm_lang$core$Dict$values(
			A2(
				_elm_lang$core$Dict$map,
				F2(
					function (id, expr) {
						return {
							ctor: '_Tuple2',
							_0: id,
							_1: _kirchner$elm_pat$Expr$encode(expr)
						};
					}),
				variables)));
};
var _kirchner$elm_pat$File$encode = function (model) {
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'store',
				_1: A2(_kirchner$elm_pat$Store$encode, _kirchner$elm_pat$Point$encode, model.store)
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'pieceStore',
					_1: A2(_kirchner$elm_pat$Store$encode, _kirchner$elm_pat$Piece$encode, model.pieceStore)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'variables',
						_1: _kirchner$elm_pat$File$encodeVariables(model.variables)
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'selectedPoints',
							_1: _elm_lang$core$Json_Encode$list(
								A2(_elm_lang$core$List$map, _kirchner$elm_pat$Store$encodeId, model.selectedPoints))
						},
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _kirchner$elm_pat$File$save = function (model) {
	return {store: model.store, pieceStore: model.pieceStore, variables: model.variables, selectedPoints: model.selectedPoints};
};
var _kirchner$elm_pat$File$store = function (_p0) {
	return _kirchner$elm_pat$File$encode(
		_kirchner$elm_pat$File$save(_p0));
};
var _kirchner$elm_pat$File$load_ = F2(
	function (file, defaultModel) {
		return _elm_lang$core$Native_Utils.update(
			defaultModel,
			{store: file.store, pieceStore: file.pieceStore, variables: file.variables, selectedPoints: file.selectedPoints});
	});
var _kirchner$elm_pat$File$load = function (file) {
	return A2(_kirchner$elm_pat$File$load_, file, _kirchner$elm_pat$Model$defaultModel);
};
var _kirchner$elm_pat$File$defaultFile = {
	store: _kirchner$elm_pat$Store$empty,
	pieceStore: _kirchner$elm_pat$Store$empty,
	variables: _elm_lang$core$Dict$empty,
	selectedPoints: {ctor: '[]'}
};
var _kirchner$elm_pat$File$File = F4(
	function (a, b, c, d) {
		return {store: a, pieceStore: b, variables: c, selectedPoints: d};
	});
var _kirchner$elm_pat$File$decode = A5(
	_elm_lang$core$Json_Decode$map4,
	_kirchner$elm_pat$File$File,
	A2(
		_elm_lang$core$Json_Decode$at,
		{
			ctor: '::',
			_0: 'store',
			_1: {ctor: '[]'}
		},
		_kirchner$elm_pat$Store$decode(_kirchner$elm_pat$Point$decode)),
	A2(
		_elm_lang$core$Json_Decode$at,
		{
			ctor: '::',
			_0: 'pieceStore',
			_1: {ctor: '[]'}
		},
		_kirchner$elm_pat$Store$decode(_kirchner$elm_pat$Piece$decode)),
	A2(
		_elm_lang$core$Json_Decode$at,
		{
			ctor: '::',
			_0: 'variables',
			_1: {ctor: '[]'}
		},
		_kirchner$elm_pat$File$decodeVariables),
	A2(
		_elm_lang$core$Json_Decode$at,
		{
			ctor: '::',
			_0: 'selectedPoints',
			_1: {ctor: '[]'}
		},
		_elm_lang$core$Json_Decode$list(_kirchner$elm_pat$Store$decodeId)));
var _kirchner$elm_pat$File$restore = F2(
	function (value, defaultModel) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			defaultModel,
			_elm_lang$core$Result$toMaybe(
				A2(
					_elm_lang$core$Result$map,
					function (file) {
						return A2(_kirchner$elm_pat$File$load_, file, defaultModel);
					},
					A2(_elm_lang$core$Json_Decode$decodeValue, _kirchner$elm_pat$File$decode, value))));
	});

var _kirchner$elm_pat$Tools_Between$view = F4(
	function (callbacks, updateState, data, state) {
		return A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{ctor: '[]'});
	});
var _kirchner$elm_pat$Tools_Between$svg = F4(
	function (callbacks, updateState, data, state) {
		return A2(
			_elm_lang$svg$Svg$g,
			{ctor: '[]'},
			{ctor: '[]'});
	});
var _kirchner$elm_pat$Tools_Between$point = F2(
	function (data, state) {
		return _elm_lang$core$Maybe$Nothing;
	});
var _kirchner$elm_pat$Tools_Between$init = function (data) {
	return {firstDropdown: _kirchner$elm_pat$Tools_Dropdown$init, first: _elm_lang$core$Maybe$Nothing, lastDropdown: _kirchner$elm_pat$Tools_Dropdown$init, last: _elm_lang$core$Maybe$Nothing, ratio: _elm_lang$core$Maybe$Nothing};
};
var _kirchner$elm_pat$Tools_Between$State = F5(
	function (a, b, c, d, e) {
		return {firstDropdown: a, first: b, lastDropdown: c, last: d, ratio: e};
	});

var _kirchner$elm_pat$Editor$getViewPort = F2(
	function (oldViewPort, drag) {
		var _p0 = drag;
		if (_p0.ctor === 'Nothing') {
			return oldViewPort;
		} else {
			var _p2 = _p0._0.start;
			var _p1 = _p0._0.current;
			return _elm_lang$core$Native_Utils.update(
				oldViewPort,
				{x: oldViewPort.x - (_p1.x - _p2.x), y: oldViewPort.y - (_p1.y - _p2.y)});
		}
	});
var _kirchner$elm_pat$Editor$updateStorage = F3(
	function (ports, _p4, _p3) {
		var _p5 = _p3;
		var _p6 = _p5._0;
		return {
			ctor: '_Tuple2',
			_0: _p6,
			_1: _elm_lang$core$Platform_Cmd$batch(
				{
					ctor: '::',
					_0: ports.serialize(
						_kirchner$elm_pat$File$store(_p6)),
					_1: {
						ctor: '::',
						_0: _p5._1,
						_1: {ctor: '[]'}
					}
				})
		};
	});
var _kirchner$elm_pat$Editor$updateAutoFocus = F3(
	function (ports, oldModel, _p7) {
		var _p8 = _p7;
		var _p10 = _p8._0;
		var _p9 = _p8._1;
		return {
			ctor: '_Tuple2',
			_0: _p10,
			_1: (_elm_lang$core$Native_Utils.eq(oldModel.tool, _kirchner$elm_pat$Model$None) && (!_elm_lang$core$Native_Utils.eq(_p10.tool, _kirchner$elm_pat$Model$None))) ? _elm_lang$core$Platform_Cmd$batch(
				{
					ctor: '::',
					_0: ports.autofocus(
						{ctor: '_Tuple0'}),
					_1: {
						ctor: '::',
						_0: _p9,
						_1: {ctor: '[]'}
					}
				}) : _p9
		};
	});
var _kirchner$elm_pat$Editor$allTools = function (data) {
	return {
		ctor: '::',
		_0: _kirchner$elm_pat$Model$Absolute(_kirchner$elm_pat$Tools_Absolute$init),
		_1: {
			ctor: '::',
			_0: _kirchner$elm_pat$Model$Relative(
				_kirchner$elm_pat$Tools_Relative$init(data)),
			_1: {
				ctor: '::',
				_0: _kirchner$elm_pat$Model$Distance(
					_kirchner$elm_pat$Tools_Distance$init(data)),
				_1: {ctor: '[]'}
			}
		}
	};
};
var _kirchner$elm_pat$Editor$toolDescription = function (tool) {
	var _p11 = tool;
	switch (_p11.ctor) {
		case 'Absolute':
			return 'add a point given by absolute coordinates';
		case 'Relative':
			return 'relative';
		case 'Distance':
			return 'distance';
		case 'ExtendPiece':
			return 'extend piece';
		default:
			return 'none';
	}
};
var _kirchner$elm_pat$Editor$toolName = function (tool) {
	var _p12 = tool;
	switch (_p12.ctor) {
		case 'Absolute':
			return 'absolute';
		case 'Relative':
			return 'relative';
		case 'Distance':
			return 'distance';
		case 'ExtendPiece':
			return 'extend piece';
		default:
			return 'none';
	}
};
var _kirchner$elm_pat$Editor$data = function (model) {
	return {
		store: model.store,
		pieceStore: model.pieceStore,
		variables: model.variables,
		viewPort: A2(_kirchner$elm_pat$Editor$getViewPort, model.viewPort, model.drag),
		cursorPosition: model.cursorPosition,
		focusedPoint: model.focusedPoint,
		pressedKeys: model.pressedKeys,
		selectedPoints: model.selectedPoints
	};
};
var _kirchner$elm_pat$Editor$Flags = function (a) {
	return {file0: a};
};
var _kirchner$elm_pat$Editor$Ports = F2(
	function (a, b) {
		return {autofocus: a, serialize: b};
	});
var _kirchner$elm_pat$Editor$LoadRemoteFileError = function (a) {
	return {ctor: 'LoadRemoteFileError', _0: a};
};
var _kirchner$elm_pat$Editor$LoadRemoteFile = function (a) {
	return {ctor: 'LoadRemoteFile', _0: a};
};
var _kirchner$elm_pat$Editor$RestoreSession = function (a) {
	return {ctor: 'RestoreSession', _0: a};
};
var _kirchner$elm_pat$Editor$update = F3(
	function (ports, msg, model) {
		return function (_p13) {
			return A3(
				_kirchner$elm_pat$Editor$updateStorage,
				ports,
				model,
				A3(_kirchner$elm_pat$Editor$updateAutoFocus, ports, model, _p13));
		}(
			function () {
				var _p14 = msg;
				switch (_p14.ctor) {
					case 'LoadRemoteFile':
						var handle = function (_p15) {
							return function (result) {
								var _p16 = result;
								if (_p16.ctor === 'Ok') {
									return _p16._0;
								} else {
									return _p16._0;
								}
							}(
								A2(
									_elm_lang$core$Result$mapError,
									_kirchner$elm_pat$Editor$LoadRemoteFileError,
									A2(_elm_lang$core$Result$map, _kirchner$elm_pat$Editor$RestoreSession, _p15)));
						};
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							model,
							{
								ctor: '::',
								_0: A2(
									_elm_lang$http$Http$send,
									handle,
									A2(_elm_lang$http$Http$get, _p14._0, _kirchner$elm_pat$File$decode)),
								_1: {ctor: '[]'}
							});
					case 'RestoreSession':
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							A2(_kirchner$elm_pat$File$load_, _p14._0, model),
							{ctor: '[]'});
					case 'LoadRemoteFileError':
						var _p17 = A2(_elm_lang$core$Debug$log, 'loadRemoteFileError', _p14._0);
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							model,
							{ctor: '[]'});
					case 'ClearSession':
						return A3(
							_kirchner$elm_pat$Editor$update,
							ports,
							_kirchner$elm_pat$Editor$RestoreSession(_kirchner$elm_pat$File$defaultFile),
							model);
					case 'FileBrowserMsg':
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{
									fileBrowser: A2(_kirchner$elm_pat$FileBrowser$update, _p14._0, model.fileBrowser)
								}),
							{ctor: '[]'});
					case 'UpdateTool':
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{tool: _p14._0}),
							{ctor: '[]'});
					case 'AddPoint':
						var _p18 = A2(_kirchner$elm_pat$Store$insert, _p14._0, model.store);
						var id = _p18._0;
						var newStore = _p18._1;
						var name = A2(
							_elm_lang$core$Basics_ops['++'],
							'point #',
							_elm_lang$core$Basics$toString(
								_kirchner$elm_pat$Store$toInt(id)));
						var storeWithNamedPoint = A3(
							_kirchner$elm_pat$Store$update,
							id,
							_elm_lang$core$Maybe$map(
								_kirchner$elm_pat$Point$setName(name)),
							newStore);
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{
									store: storeWithNamedPoint,
									tool: _kirchner$elm_pat$Model$None,
									cursorPosition: _elm_lang$core$Maybe$Nothing,
									focusedPoint: _elm_lang$core$Maybe$Nothing,
									selectedPoints: {
										ctor: '::',
										_0: id,
										_1: {ctor: '[]'}
									}
								}),
							{ctor: '[]'});
					case 'UpdatePoint':
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{
									store: A3(
										_kirchner$elm_pat$Store$update,
										_p14._0,
										function (_p19) {
											return _elm_lang$core$Maybe$Just(_p14._1);
										},
										model.store),
									tool: _kirchner$elm_pat$Model$None
								}),
							{ctor: '[]'});
					case 'DeletePoint':
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{
									store: A2(_kirchner$elm_pat$Store$remove, _p14._0, model.store)
								}),
							{ctor: '[]'});
					case 'NameUpdated':
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{
									newName: _kirchner$elm_pat$Expr$parseVariable(_p14._0)
								}),
							{ctor: '[]'});
					case 'ValueUpdated':
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{
									newValue: _kirchner$elm_pat$Expr$parse(_p14._0)
								}),
							{ctor: '[]'});
					case 'AddVariable':
						var _p20 = {ctor: '_Tuple2', _0: model.newName, _1: model.newValue};
						if (((_p20.ctor === '_Tuple2') && (_p20._0.ctor === 'Just')) && (_p20._1.ctor === 'Just')) {
							return A2(
								_elm_lang$core$Platform_Cmd_ops['!'],
								_elm_lang$core$Native_Utils.update(
									model,
									{
										variables: A3(_elm_lang$core$Dict$insert, _p20._0._0, _p20._1._0, model.variables),
										newName: _elm_lang$core$Maybe$Nothing,
										newValue: _elm_lang$core$Maybe$Nothing
									}),
								{ctor: '[]'});
						} else {
							return A2(
								_elm_lang$core$Platform_Cmd_ops['!'],
								model,
								{ctor: '[]'});
						}
					case 'Resize':
						var _p21 = _p14._0;
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{
									viewPort: {x: (_p21.width / -2) | 0, y: (_p21.height / -2) | 0, width: _p21.width, height: _p21.height}
								}),
							{ctor: '[]'});
					case 'DragStart':
						var _p22 = _p14._0;
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{
									drag: _elm_lang$core$Maybe$Just(
										A2(_kirchner$elm_pat$Model$Drag, _p22, _p22))
								}),
							{ctor: '[]'});
					case 'DragAt':
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{
									drag: A2(
										_elm_lang$core$Maybe$map,
										function (_p23) {
											var _p24 = _p23;
											return A2(_kirchner$elm_pat$Model$Drag, _p24.start, _p14._0);
										},
										model.drag)
								}),
							{ctor: '[]'});
					case 'DragStop':
						var selectedPoints = function () {
							var _p25 = model.drag;
							if (_p25.ctor === 'Just') {
								var _p26 = _p25._0;
								return _elm_lang$core$Native_Utils.eq(_p26.start, _p26.current) ? {ctor: '[]'} : model.selectedPoints;
							} else {
								return model.selectedPoints;
							}
						}();
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{
									drag: _elm_lang$core$Maybe$Nothing,
									viewPort: A2(_kirchner$elm_pat$Editor$getViewPort, model.viewPort, model.drag),
									selectedPoints: selectedPoints
								}),
							{ctor: '[]'});
					case 'UpdateCursorPosition':
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{
									cursorPosition: A2(
										_elm_lang$core$Maybe$map,
										_kirchner$elm_pat$Types$svgToCanvas(model.viewPort),
										_p14._0)
								}),
							{ctor: '[]'});
					case 'FocusPoint':
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{focusedPoint: _p14._0}),
							{ctor: '[]'});
					case 'KeyMsg':
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{
									pressedKeys: A2(_ohanhi$keyboard_extra$Keyboard_Extra$update, _p14._0, model.pressedKeys)
								}),
							{ctor: '[]'});
					case 'KeyDown':
						var _p27 = _p14._0;
						switch (_p27.ctor) {
							case 'CharP':
								var _p28 = A2(
									_elm_lang$core$Maybe$map,
									function (piece) {
										return _elm_lang$core$Tuple$second(
											A2(_kirchner$elm_pat$Store$insert, piece, model.pieceStore));
									},
									A3(_kirchner$elm_pat$Piece$fromList, model.store, model.variables, model.selectedPoints));
								if (_p28.ctor === 'Just') {
									return A2(
										_elm_lang$core$Platform_Cmd_ops['!'],
										_elm_lang$core$Native_Utils.update(
											model,
											{pieceStore: _p28._0}),
										{ctor: '[]'});
								} else {
									return A2(
										_elm_lang$core$Platform_Cmd_ops['!'],
										model,
										{ctor: '[]'});
								}
							case 'CharA':
								return A2(
									_elm_lang$core$Platform_Cmd_ops['!'],
									_elm_lang$core$Native_Utils.update(
										model,
										{
											tool: _kirchner$elm_pat$Model$Absolute(_kirchner$elm_pat$Tools_Absolute$init)
										}),
									{ctor: '[]'});
							case 'CharE':
								return A2(
									_elm_lang$core$Platform_Cmd_ops['!'],
									_elm_lang$core$Native_Utils.update(
										model,
										{
											tool: A2(_elm_lang$core$List$member, _ohanhi$keyboard_extra$Keyboard_Extra$Shift, model.pressedKeys) ? _kirchner$elm_pat$Model$Distance(
												_kirchner$elm_pat$Tools_Distance$init(
													_kirchner$elm_pat$Editor$data(model))) : _kirchner$elm_pat$Model$Relative(
												_kirchner$elm_pat$Tools_Relative$init(
													_kirchner$elm_pat$Editor$data(model)))
										}),
									{ctor: '[]'});
							case 'Escape':
								return A2(
									_elm_lang$core$Platform_Cmd_ops['!'],
									_elm_lang$core$Native_Utils.update(
										model,
										{tool: _kirchner$elm_pat$Model$None, cursorPosition: _elm_lang$core$Maybe$Nothing}),
									{ctor: '[]'});
							default:
								return A2(
									_elm_lang$core$Platform_Cmd_ops['!'],
									model,
									{ctor: '[]'});
						}
					case 'SelectPoint':
						var _p29 = _p14._0;
						if (_p29.ctor === 'Just') {
							var _p30 = _p29._0;
							return A2(_elm_lang$core$List$member, _ohanhi$keyboard_extra$Keyboard_Extra$Shift, model.pressedKeys) ? A2(
								_elm_lang$core$Platform_Cmd_ops['!'],
								_elm_lang$core$Native_Utils.update(
									model,
									{
										selectedPoints: A2(_elm_lang$core$List$member, _p30, model.selectedPoints) ? A2(
											_elm_lang$core$List$filter,
											F2(
												function (x, y) {
													return !_elm_lang$core$Native_Utils.eq(x, y);
												})(_p30),
											model.selectedPoints) : {ctor: '::', _0: _p30, _1: model.selectedPoints}
									}),
								{ctor: '[]'}) : A2(
								_elm_lang$core$Platform_Cmd_ops['!'],
								_elm_lang$core$Native_Utils.update(
									model,
									{
										selectedPoints: {
											ctor: '::',
											_0: _p30,
											_1: {ctor: '[]'}
										}
									}),
								{ctor: '[]'});
						} else {
							return A2(
								_elm_lang$core$Platform_Cmd_ops['!'],
								model,
								{ctor: '[]'});
						}
					case 'ClearSelection':
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{
									selectedPoints: {ctor: '[]'}
								}),
							{ctor: '[]'});
					default:
						var _p31 = _p14._2;
						if (_p31.ctor === 'Just') {
							var updatePiece = _elm_lang$core$Maybe$map(
								A4(_kirchner$elm_pat$Piece$insertAfter, model.store, model.variables, _p31._0, _p14._1));
							return A2(
								_elm_lang$core$Platform_Cmd_ops['!'],
								_elm_lang$core$Native_Utils.update(
									model,
									{
										pieceStore: A3(_kirchner$elm_pat$Store$update, _p14._0, updatePiece, model.pieceStore),
										tool: _kirchner$elm_pat$Model$None
									}),
								{ctor: '[]'});
						} else {
							return A2(
								_elm_lang$core$Platform_Cmd_ops['!'],
								_elm_lang$core$Native_Utils.update(
									model,
									{tool: _kirchner$elm_pat$Model$None}),
								{ctor: '[]'});
						}
				}
			}());
	});
var _kirchner$elm_pat$Editor$ClearSession = {ctor: 'ClearSession'};
var _kirchner$elm_pat$Editor$FileBrowserMsg = function (a) {
	return {ctor: 'FileBrowserMsg', _0: a};
};
var _kirchner$elm_pat$Editor$ExtendPieceMsg = F3(
	function (a, b, c) {
		return {ctor: 'ExtendPieceMsg', _0: a, _1: b, _2: c};
	});
var _kirchner$elm_pat$Editor$ClearSelection = {ctor: 'ClearSelection'};
var _kirchner$elm_pat$Editor$SelectPoint = function (a) {
	return {ctor: 'SelectPoint', _0: a};
};
var _kirchner$elm_pat$Editor$KeyDown = function (a) {
	return {ctor: 'KeyDown', _0: a};
};
var _kirchner$elm_pat$Editor$KeyMsg = function (a) {
	return {ctor: 'KeyMsg', _0: a};
};
var _kirchner$elm_pat$Editor$FocusPoint = function (a) {
	return {ctor: 'FocusPoint', _0: a};
};
var _kirchner$elm_pat$Editor$UpdateCursorPosition = function (a) {
	return {ctor: 'UpdateCursorPosition', _0: a};
};
var _kirchner$elm_pat$Editor$DragStop = function (a) {
	return {ctor: 'DragStop', _0: a};
};
var _kirchner$elm_pat$Editor$DragAt = function (a) {
	return {ctor: 'DragAt', _0: a};
};
var _kirchner$elm_pat$Editor$DragStart = function (a) {
	return {ctor: 'DragStart', _0: a};
};
var _kirchner$elm_pat$Editor$Resize = function (a) {
	return {ctor: 'Resize', _0: a};
};
var _kirchner$elm_pat$Editor$init = function (flags) {
	var restoredModel = function () {
		var _p32 = flags.file0;
		if (_p32.ctor === 'Just') {
			return A2(_kirchner$elm_pat$File$restore, _p32._0, _kirchner$elm_pat$Model$defaultModel);
		} else {
			return _kirchner$elm_pat$Model$defaultModel;
		}
	}();
	return A2(
		_elm_lang$core$Platform_Cmd_ops['!'],
		restoredModel,
		{
			ctor: '::',
			_0: A2(_elm_lang$core$Task$perform, _kirchner$elm_pat$Editor$Resize, _elm_lang$window$Window$size),
			_1: {ctor: '[]'}
		});
};
var _kirchner$elm_pat$Editor$subscriptions = function (model) {
	var _p33 = model.drag;
	if (_p33.ctor === 'Nothing') {
		return _elm_lang$core$Platform_Sub$batch(
			{
				ctor: '::',
				_0: _elm_lang$window$Window$resizes(_kirchner$elm_pat$Editor$Resize),
				_1: {
					ctor: '::',
					_0: A2(_elm_lang$core$Platform_Sub$map, _kirchner$elm_pat$Editor$KeyMsg, _ohanhi$keyboard_extra$Keyboard_Extra$subscriptions),
					_1: {
						ctor: '::',
						_0: _ohanhi$keyboard_extra$Keyboard_Extra$downs(_kirchner$elm_pat$Editor$KeyDown),
						_1: {ctor: '[]'}
					}
				}
			});
	} else {
		return _elm_lang$core$Platform_Sub$batch(
			{
				ctor: '::',
				_0: _elm_lang$window$Window$resizes(_kirchner$elm_pat$Editor$Resize),
				_1: {
					ctor: '::',
					_0: _elm_lang$mouse$Mouse$moves(_kirchner$elm_pat$Editor$DragAt),
					_1: {
						ctor: '::',
						_0: _elm_lang$mouse$Mouse$ups(_kirchner$elm_pat$Editor$DragStop),
						_1: {
							ctor: '::',
							_0: A2(_elm_lang$core$Platform_Sub$map, _kirchner$elm_pat$Editor$KeyMsg, _ohanhi$keyboard_extra$Keyboard_Extra$subscriptions),
							_1: {ctor: '[]'}
						}
					}
				}
			});
	}
};
var _kirchner$elm_pat$Editor$AddVariable = {ctor: 'AddVariable'};
var _kirchner$elm_pat$Editor$NameUpdated = function (a) {
	return {ctor: 'NameUpdated', _0: a};
};
var _kirchner$elm_pat$Editor$ValueUpdated = function (a) {
	return {ctor: 'ValueUpdated', _0: a};
};
var _kirchner$elm_pat$Editor$DeletePoint = function (a) {
	return {ctor: 'DeletePoint', _0: a};
};
var _kirchner$elm_pat$Editor$UpdatePoint = F2(
	function (a, b) {
		return {ctor: 'UpdatePoint', _0: a, _1: b};
	});
var _kirchner$elm_pat$Editor$AddPoint = function (a) {
	return {ctor: 'AddPoint', _0: a};
};
var _kirchner$elm_pat$Editor$callbacks = {addPoint: _kirchner$elm_pat$Editor$AddPoint, updateCursorPosition: _kirchner$elm_pat$Editor$UpdateCursorPosition, focusPoint: _kirchner$elm_pat$Editor$FocusPoint, selectPoint: _kirchner$elm_pat$Editor$SelectPoint, clearSelection: _kirchner$elm_pat$Editor$ClearSelection, extendPiece: _kirchner$elm_pat$Editor$ExtendPieceMsg};
var _kirchner$elm_pat$Editor$UpdateTool = function (a) {
	return {ctor: 'UpdateTool', _0: a};
};

var _kirchner$elm_pat$Styles_Editor$rem = _rtfeldman$elm_css$Css$rem;
var _kirchner$elm_pat$Styles_Editor$_p0 = _rtfeldman$elm_css_helpers$Html_CssHelpers$withNamespace('editor__');
var _kirchner$elm_pat$Styles_Editor$id = _kirchner$elm_pat$Styles_Editor$_p0.id;
var _kirchner$elm_pat$Styles_Editor$class = _kirchner$elm_pat$Styles_Editor$_p0.$class;
var _kirchner$elm_pat$Styles_Editor$classList = _kirchner$elm_pat$Styles_Editor$_p0.classList;
var _kirchner$elm_pat$Styles_Editor$ContainerTopRight = {ctor: 'ContainerTopRight'};
var _kirchner$elm_pat$Styles_Editor$ContainerBottomRight = {ctor: 'ContainerBottomRight'};
var _kirchner$elm_pat$Styles_Editor$ContainerBottomLeft = {ctor: 'ContainerBottomLeft'};
var _kirchner$elm_pat$Styles_Editor$ContainerTopLeft = {ctor: 'ContainerTopLeft'};
var _kirchner$elm_pat$Styles_Editor$ContainerTopLeftLeft = {ctor: 'ContainerTopLeftLeft'};
var _kirchner$elm_pat$Styles_Editor$Container = {ctor: 'Container'};
var _kirchner$elm_pat$Styles_Editor$MouseMove = {ctor: 'MouseMove'};
var _kirchner$elm_pat$Styles_Editor$Main = {ctor: 'Main'};
var _kirchner$elm_pat$Styles_Editor$css = function () {
	var $class = _rtfeldman$elm_css$Css$class;
	return function (_p1) {
		return _rtfeldman$elm_css$Css$stylesheet(
			A2(_rtfeldman$elm_css$Css_Namespace$namespace, 'editor__', _p1));
	}(
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Css_Elements$body(
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$margin(_rtfeldman$elm_css$Css$zero),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$overflow(_rtfeldman$elm_css$Css$hidden),
						_1: {ctor: '[]'}
					}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					$class,
					_kirchner$elm_pat$Styles_Editor$Main,
					{
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$relative),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						$class,
						_kirchner$elm_pat$Styles_Editor$MouseMove,
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$cursor(_rtfeldman$elm_css$Css$move),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							$class,
							_kirchner$elm_pat$Styles_Editor$Container,
							{
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$padding(
									_kirchner$elm_pat$Styles_Editor$rem(0.3)),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$borderRadius(
										_rtfeldman$elm_css$Css$px(4)),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$color(
											_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base0)),
										_1: {
											ctor: '::',
											_0: _rtfeldman$elm_css$Css$backgroundColor(
												_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base2)),
											_1: {
												ctor: '::',
												_0: A2(_rtfeldman$elm_css$Css$property, 'pointer-events', 'auto'),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								$class,
								_kirchner$elm_pat$Styles_Editor$ContainerTopLeftLeft,
								{
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$absolute),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$top(
											_kirchner$elm_pat$Styles_Editor$rem(1)),
										_1: {
											ctor: '::',
											_0: _rtfeldman$elm_css$Css$left(
												_kirchner$elm_pat$Styles_Editor$rem(1)),
											_1: {ctor: '[]'}
										}
									}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									$class,
									_kirchner$elm_pat$Styles_Editor$ContainerTopLeft,
									{
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$absolute),
										_1: {
											ctor: '::',
											_0: _rtfeldman$elm_css$Css$top(
												_kirchner$elm_pat$Styles_Editor$rem(1)),
											_1: {
												ctor: '::',
												_0: _rtfeldman$elm_css$Css$left(
													_kirchner$elm_pat$Styles_Editor$rem(5)),
												_1: {ctor: '[]'}
											}
										}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										$class,
										_kirchner$elm_pat$Styles_Editor$ContainerTopRight,
										{
											ctor: '::',
											_0: _rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$absolute),
											_1: {
												ctor: '::',
												_0: _rtfeldman$elm_css$Css$right(
													_kirchner$elm_pat$Styles_Editor$rem(1)),
												_1: {
													ctor: '::',
													_0: _rtfeldman$elm_css$Css$top(
														_kirchner$elm_pat$Styles_Editor$rem(1)),
													_1: {ctor: '[]'}
												}
											}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											$class,
											_kirchner$elm_pat$Styles_Editor$ContainerBottomLeft,
											{
												ctor: '::',
												_0: _rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$absolute),
												_1: {
													ctor: '::',
													_0: _rtfeldman$elm_css$Css$bottom(
														_kirchner$elm_pat$Styles_Editor$rem(1)),
													_1: {
														ctor: '::',
														_0: _rtfeldman$elm_css$Css$left(
															_kirchner$elm_pat$Styles_Editor$rem(1)),
														_1: {ctor: '[]'}
													}
												}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												$class,
												_kirchner$elm_pat$Styles_Editor$ContainerBottomRight,
												{
													ctor: '::',
													_0: _rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$absolute),
													_1: {
														ctor: '::',
														_0: _rtfeldman$elm_css$Css$bottom(
															_kirchner$elm_pat$Styles_Editor$rem(1)),
														_1: {
															ctor: '::',
															_0: _rtfeldman$elm_css$Css$right(
																_kirchner$elm_pat$Styles_Editor$rem(1)),
															_1: {ctor: '[]'}
														}
													}
												}),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				}
			}
		});
}();

var _kirchner$elm_pat$View_Canvas$pieceHelper = F5(
	function (extendPiece, _p0, rest, veryFirst, drawn) {
		pieceHelper:
		while (true) {
			var _p1 = _p0;
			var _p5 = _p1._0;
			var _p4 = _p1._1;
			var _p2 = rest;
			if (_p2.ctor === '::') {
				var _p3 = _p2._0._1;
				var _v2 = extendPiece,
					_v3 = {ctor: '_Tuple2', _0: _p2._0._0, _1: _p3},
					_v4 = _p2._1,
					_v5 = veryFirst,
					_v6 = {
					ctor: '::',
					_0: A3(
						_kirchner$elm_pat$Svg_Extra$drawLineSegmentWith,
						extendPiece(_p5),
						_p4,
						_p3),
					_1: drawn
				};
				extendPiece = _v2;
				_p0 = _v3;
				rest = _v4;
				veryFirst = _v5;
				drawn = _v6;
				continue pieceHelper;
			} else {
				return {
					ctor: '::',
					_0: A3(
						_kirchner$elm_pat$Svg_Extra$drawLineSegmentWith,
						extendPiece(_p5),
						_p4,
						_elm_lang$core$Tuple$second(veryFirst)),
					_1: drawn
				};
			}
		}
	});
var _kirchner$elm_pat$View_Canvas$piecePath = F2(
	function (_p6, rest) {
		var _p7 = _p6;
		var _p11 = _p7._1;
		var l = F2(
			function (_p8, restD) {
				var _p9 = _p8;
				var _p10 = _p9._1;
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'L ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(
							_elm_community$linear_algebra$Math_Vector2$getX(_p10)),
						A2(
							_elm_lang$core$Basics_ops['++'],
							' ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(
									_elm_community$linear_algebra$Math_Vector2$getY(_p10)),
								A2(_elm_lang$core$Basics_ops['++'], ' ', restD)))));
			});
		var restD = A3(_elm_lang$core$List$foldl, l, '', rest);
		return A2(
			_elm_lang$svg$Svg$path,
			{
				ctor: '::',
				_0: _elm_lang$svg$Svg_Attributes$d(
					A2(
						_elm_lang$core$Basics_ops['++'],
						'M ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(
								_elm_community$linear_algebra$Math_Vector2$getX(_p11)),
							A2(
								_elm_lang$core$Basics_ops['++'],
								' ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(
										_elm_community$linear_algebra$Math_Vector2$getY(_p11)),
									A2(_elm_lang$core$Basics_ops['++'], ' ', restD)))))),
				_1: {
					ctor: '::',
					_0: _elm_lang$svg$Svg_Attributes$fill(_kirchner$elm_pat$Styles_Colors$blue),
					_1: {
						ctor: '::',
						_0: _elm_lang$svg$Svg_Attributes$strokeWidth('0'),
						_1: {
							ctor: '::',
							_0: _elm_lang$svg$Svg_Attributes$opacity('0.2'),
							_1: {
								ctor: '::',
								_0: _elm_lang$svg$Svg_Attributes$pointerEvents('none'),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			},
			{ctor: '[]'});
	});
var _kirchner$elm_pat$View_Canvas$piece = F3(
	function (extendPiece, data, _p12) {
		var _p13 = _p12;
		var _p17 = _p13._1;
		var segments = A2(
			_elm_community$list_extra$List_Extra$zip,
			_kirchner$elm_pat$Piece$toList(_p17),
			A2(
				_elm_lang$core$List$filterMap,
				A2(_kirchner$elm_pat$Point$positionById, data.store, data.variables),
				_kirchner$elm_pat$Piece$toList(_p17)));
		var _p14 = segments;
		if (_p14.ctor === '::') {
			var _p16 = _p14._1;
			var _p15 = _p14._0;
			return {
				ctor: '::',
				_0: A2(_kirchner$elm_pat$View_Canvas$piecePath, _p15, _p16),
				_1: A5(
					_kirchner$elm_pat$View_Canvas$pieceHelper,
					extendPiece(_p13._0),
					_p15,
					_p16,
					_p15,
					{ctor: '[]'})
			};
		} else {
			return {ctor: '[]'};
		}
	});
var _kirchner$elm_pat$View_Canvas$pieces = F2(
	function (extendPiece, data) {
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$svg$Svg$g(
				{ctor: '[]'}),
			A2(
				_elm_lang$core$List$map,
				A2(_kirchner$elm_pat$View_Canvas$piece, extendPiece, data),
				_kirchner$elm_pat$Store$toList(data.pieceStore)));
	});
var _kirchner$elm_pat$View_Canvas$point = F2(
	function (data, point) {
		var handlers = {
			withAbsolute: F3(
				function (point, _p19, _p18) {
					return A2(
						_elm_lang$core$Maybe$map,
						_kirchner$elm_pat$Svg_Extra$drawPoint(_kirchner$elm_pat$Styles_Colors$base0),
						A3(_kirchner$elm_pat$Point$position, data.store, data.variables, point));
				}),
			withRelative: F4(
				function (point, anchorId, _p21, _p20) {
					var draw = F2(
						function (v, w) {
							return A2(
								_elm_lang$svg$Svg$g,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A2(_kirchner$elm_pat$Svg_Extra$drawPoint, _kirchner$elm_pat$Styles_Colors$base0, w),
									_1: {
										ctor: '::',
										_0: A2(_kirchner$elm_pat$Svg_Extra$drawRectArrow, v, w),
										_1: {ctor: '[]'}
									}
								});
						});
					return A3(
						_elm_lang$core$Maybe$map2,
						draw,
						A3(_kirchner$elm_pat$Point$positionById, data.store, data.variables, anchorId),
						A3(_kirchner$elm_pat$Point$position, data.store, data.variables, point));
				}),
			withDistance: F4(
				function (point, anchorId, _p23, _p22) {
					var draw = F2(
						function (v, w) {
							return A2(
								_elm_lang$svg$Svg$g,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A2(_kirchner$elm_pat$Svg_Extra$drawPoint, _kirchner$elm_pat$Styles_Colors$base0, w),
									_1: {
										ctor: '::',
										_0: A2(_kirchner$elm_pat$Svg_Extra$drawArrow, v, w),
										_1: {ctor: '[]'}
									}
								});
						});
					return A3(
						_elm_lang$core$Maybe$map2,
						draw,
						A3(_kirchner$elm_pat$Point$positionById, data.store, data.variables, anchorId),
						A3(_kirchner$elm_pat$Point$position, data.store, data.variables, point));
				}),
			withBetween: F4(
				function (_p27, _p26, _p25, _p24) {
					return _elm_lang$core$Maybe$Just(
						A2(
							_elm_lang$svg$Svg$g,
							{ctor: '[]'},
							{ctor: '[]'}));
				})
		};
		return A2(_kirchner$elm_pat$Point$dispatch, handlers, point);
	});
var _kirchner$elm_pat$View_Canvas$points = function (data) {
	return A2(
		_elm_lang$core$List$filterMap,
		_kirchner$elm_pat$View_Canvas$point(data),
		_kirchner$elm_pat$Store$values(data.store));
};
var _kirchner$elm_pat$View_Canvas$origin = A2(
	_elm_lang$svg$Svg$g,
	{ctor: '[]'},
	{
		ctor: '::',
		_0: A2(
			_elm_lang$svg$Svg$line,
			{
				ctor: '::',
				_0: _elm_lang$svg$Svg_Attributes$x1('-10'),
				_1: {
					ctor: '::',
					_0: _elm_lang$svg$Svg_Attributes$y1('0'),
					_1: {
						ctor: '::',
						_0: _elm_lang$svg$Svg_Attributes$x2('10'),
						_1: {
							ctor: '::',
							_0: _elm_lang$svg$Svg_Attributes$y2('0'),
							_1: {
								ctor: '::',
								_0: _elm_lang$svg$Svg_Attributes$stroke(_kirchner$elm_pat$Styles_Colors$green),
								_1: {
									ctor: '::',
									_0: _elm_lang$svg$Svg_Attributes$strokeWidth('1'),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			},
			{ctor: '[]'}),
		_1: {
			ctor: '::',
			_0: A2(
				_elm_lang$svg$Svg$line,
				{
					ctor: '::',
					_0: _elm_lang$svg$Svg_Attributes$x1('0'),
					_1: {
						ctor: '::',
						_0: _elm_lang$svg$Svg_Attributes$y1('-10'),
						_1: {
							ctor: '::',
							_0: _elm_lang$svg$Svg_Attributes$x2('0'),
							_1: {
								ctor: '::',
								_0: _elm_lang$svg$Svg_Attributes$y2('10'),
								_1: {
									ctor: '::',
									_0: _elm_lang$svg$Svg_Attributes$stroke(_kirchner$elm_pat$Styles_Colors$green),
									_1: {
										ctor: '::',
										_0: _elm_lang$svg$Svg_Attributes$strokeWidth('1'),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				},
				{ctor: '[]'}),
			_1: {ctor: '[]'}
		}
	});
var _kirchner$elm_pat$View_Canvas$viewSelectedPoint = F3(
	function (data, first, id) {
		var position = A2(
			_elm_lang$core$Maybe$andThen,
			A2(_kirchner$elm_pat$Point$position, data.store, data.variables),
			A2(_kirchner$elm_pat$Store$get, id, data.store));
		var _p28 = position;
		if (_p28.ctor === 'Just') {
			var _p29 = _p28._0;
			return _elm_lang$core$Maybe$Just(
				A2(
					_elm_lang$svg$Svg$g,
					{ctor: '[]'},
					first ? {
						ctor: '::',
						_0: A2(_kirchner$elm_pat$Svg_Extra$drawPoint, _kirchner$elm_pat$Styles_Colors$red, _p29),
						_1: {
							ctor: '::',
							_0: A3(_kirchner$elm_pat$Svg_Extra$drawSelector, _kirchner$elm_pat$Svg_Extra$Solid, _kirchner$elm_pat$Styles_Colors$red, _p29),
							_1: {ctor: '[]'}
						}
					} : {
						ctor: '::',
						_0: A2(_kirchner$elm_pat$Svg_Extra$drawPoint, _kirchner$elm_pat$Styles_Colors$yellow, _p29),
						_1: {
							ctor: '::',
							_0: A3(_kirchner$elm_pat$Svg_Extra$drawSelector, _kirchner$elm_pat$Svg_Extra$Solid, _kirchner$elm_pat$Styles_Colors$yellow, _p29),
							_1: {ctor: '[]'}
						}
					}));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _kirchner$elm_pat$View_Canvas$viewSelectedPoints = function (data) {
	var tail = function (list) {
		var _p30 = _elm_lang$core$List$tail(list);
		if (_p30.ctor === 'Just') {
			return _p30._0;
		} else {
			return {ctor: '[]'};
		}
	};
	return A2(
		_elm_lang$svg$Svg$g,
		{ctor: '[]'},
		A2(
			_elm_lang$core$List$filterMap,
			_elm_lang$core$Basics$identity,
			{
				ctor: '::',
				_0: A2(
					_elm_lang$core$Maybe$andThen,
					A2(_kirchner$elm_pat$View_Canvas$viewSelectedPoint, data, true),
					_elm_lang$core$List$head(data.selectedPoints)),
				_1: A2(
					_elm_lang$core$List$map,
					A2(_kirchner$elm_pat$View_Canvas$viewSelectedPoint, data, false),
					tail(data.selectedPoints))
			}));
};
var _kirchner$elm_pat$View_Canvas$dragArea = F2(
	function (startDrag, viewPort) {
		return A2(
			_elm_lang$svg$Svg$rect,
			{
				ctor: '::',
				_0: _elm_lang$svg$Svg_Attributes$x(
					_elm_lang$core$Basics$toString(viewPort.x)),
				_1: {
					ctor: '::',
					_0: _elm_lang$svg$Svg_Attributes$y(
						_elm_lang$core$Basics$toString(viewPort.y)),
					_1: {
						ctor: '::',
						_0: _elm_lang$svg$Svg_Attributes$width(
							_elm_lang$core$Basics$toString(viewPort.width)),
						_1: {
							ctor: '::',
							_0: _elm_lang$svg$Svg_Attributes$height(
								_elm_lang$core$Basics$toString(viewPort.height)),
							_1: {
								ctor: '::',
								_0: _elm_lang$svg$Svg_Attributes$fill('transparent'),
								_1: {
									ctor: '::',
									_0: _elm_lang$svg$Svg_Attributes$strokeWidth('0'),
									_1: {
										ctor: '::',
										_0: _kirchner$elm_pat$Events$onMouseDown(startDrag),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}
			},
			{ctor: '[]'});
	});
var _kirchner$elm_pat$View_Canvas$grid = F2(
	function (config, viewPort) {
		var color = function (k) {
			return _elm_lang$core$Native_Utils.eq(
				A2(_elm_lang$core$Basics_ops['%'], k, config.highlight),
				0) ? config.color2 : config.color1;
		};
		var dy = viewPort.y + ((viewPort.height / 2) | 0);
		var dx = viewPort.x + ((viewPort.width / 2) | 0);
		var translationOffset = A2(
			_elm_community$linear_algebra$Math_Vector2$vec2,
			_elm_lang$core$Basics$toFloat(dx),
			_elm_lang$core$Basics$toFloat(dy));
		var correctionOffset = A2(
			_elm_community$linear_algebra$Math_Vector2$vec2,
			_elm_lang$core$Basics$toFloat(
				A2(_elm_lang$core$Basics_ops['%'], 0 - dx, config.offset)),
			_elm_lang$core$Basics$toFloat(
				A2(_elm_lang$core$Basics_ops['%'], 0 - dy, config.offset)));
		var pr = function (u) {
			return A2(
				_elm_community$linear_algebra$Math_Vector2$add,
				correctionOffset,
				A2(_elm_community$linear_algebra$Math_Vector2$add, translationOffset, u));
		};
		var translation = pr(
			A2(_elm_community$linear_algebra$Math_Vector2$vec2, 0, 0));
		var tx = _elm_community$linear_algebra$Math_Vector2$getX(translation);
		var ty = _elm_community$linear_algebra$Math_Vector2$getY(translation);
		var n = A2(
			F2(
				function (x, y) {
					return x + y;
				}),
			4,
			(A2(_elm_lang$core$Basics$max, viewPort.height, viewPort.width) / config.offset) | 0);
		var nh = (n / 2) | 0;
		var y = _elm_lang$core$Basics$toFloat(viewPort.height + (2 * config.offset)) / 2;
		var x = _elm_lang$core$Basics$toFloat(viewPort.width + (2 * config.offset)) / 2;
		var line = F3(
			function (color, u, v) {
				return A2(
					_elm_lang$svg$Svg$line,
					{
						ctor: '::',
						_0: _elm_lang$svg$Svg_Attributes$x1(
							_elm_lang$core$Basics$toString(
								_elm_community$linear_algebra$Math_Vector2$getX(u))),
						_1: {
							ctor: '::',
							_0: _elm_lang$svg$Svg_Attributes$y1(
								_elm_lang$core$Basics$toString(
									_elm_community$linear_algebra$Math_Vector2$getY(u))),
							_1: {
								ctor: '::',
								_0: _elm_lang$svg$Svg_Attributes$x2(
									_elm_lang$core$Basics$toString(
										_elm_community$linear_algebra$Math_Vector2$getX(v))),
								_1: {
									ctor: '::',
									_0: _elm_lang$svg$Svg_Attributes$y2(
										_elm_lang$core$Basics$toString(
											_elm_community$linear_algebra$Math_Vector2$getY(v))),
									_1: {
										ctor: '::',
										_0: _elm_lang$svg$Svg_Attributes$stroke(color),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					},
					{ctor: '[]'});
			});
		return A2(
			_elm_lang$svg$Svg$g,
			{
				ctor: '::',
				_0: _elm_lang$svg$Svg_Attributes$transform(
					A2(
						_elm_lang$core$Basics_ops['++'],
						'translate(',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(tx),
							A2(
								_elm_lang$core$Basics_ops['++'],
								',',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(ty),
									')'))))),
				_1: {ctor: '[]'}
			},
			_elm_lang$core$List$concat(
				{
					ctor: '::',
					_0: A2(
						_elm_lang$core$List$map,
						function (k_) {
							var y = _elm_lang$core$Basics$toFloat((k_ - nh) * config.offset);
							var u = A2(_elm_community$linear_algebra$Math_Vector2$vec2, 0 - x, y);
							var k = (_elm_lang$core$Basics$floor(
								_elm_community$linear_algebra$Math_Vector2$getY(
									pr(u))) / config.offset) | 0;
							var v = A2(_elm_community$linear_algebra$Math_Vector2$vec2, x, y);
							return A3(
								line,
								color(k),
								u,
								v);
						},
						A2(_elm_lang$core$List$range, 0, n)),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$core$List$map,
							function (k_) {
								var x = _elm_lang$core$Basics$toFloat((k_ - nh) * config.offset);
								var u = A2(_elm_community$linear_algebra$Math_Vector2$vec2, x, 0 - y);
								var k = (_elm_lang$core$Basics$floor(
									_elm_community$linear_algebra$Math_Vector2$getX(
										pr(u))) / config.offset) | 0;
								var v = A2(_elm_community$linear_algebra$Math_Vector2$vec2, x, y);
								return A3(
									line,
									color(k),
									u,
									v);
							},
							A2(_elm_lang$core$List$range, 0, n)),
						_1: {ctor: '[]'}
					}
				}));
	});
var _kirchner$elm_pat$View_Canvas$defaultGridConfig = {offset: 50, unit: 'mm', color1: 'rgba(0,0,0,0.08)', color2: 'rgba(0,0,0,0.24)', highlight: 5};
var _kirchner$elm_pat$View_Canvas$view = F7(
	function (tool, startDrag, focusPoint, selectPoint, extendPiece, data, pieceStore) {
		var viewBoxString = A2(
			_elm_lang$core$String$join,
			' ',
			{
				ctor: '::',
				_0: _elm_lang$core$Basics$toString(data.viewPort.x),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Basics$toString(data.viewPort.y),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Basics$toString(data.viewPort.width),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Basics$toString(data.viewPort.height),
							_1: {ctor: '[]'}
						}
					}
				}
			});
		return A2(
			_elm_lang$svg$Svg$svg,
			{
				ctor: '::',
				_0: _elm_lang$svg$Svg_Attributes$viewBox(viewBoxString),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$style(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'background-color', _1: _kirchner$elm_pat$Styles_Colors$base3},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'width',
									_1: _elm_lang$core$Basics$toString(data.viewPort.width)
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'height',
										_1: _elm_lang$core$Basics$toString(data.viewPort.height)
									},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'user-select', _1: 'none'},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: '-moz-user-select', _1: 'none'},
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(_kirchner$elm_pat$View_Canvas$grid, _kirchner$elm_pat$View_Canvas$defaultGridConfig, data.viewPort),
				_1: {
					ctor: '::',
					_0: _kirchner$elm_pat$View_Canvas$origin,
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$svg$Svg$g,
							{ctor: '[]'},
							_kirchner$elm_pat$View_Canvas$points(data)),
						_1: {
							ctor: '::',
							_0: _kirchner$elm_pat$View_Canvas$viewSelectedPoints(data),
							_1: {
								ctor: '::',
								_0: A2(_kirchner$elm_pat$View_Canvas$dragArea, startDrag, data.viewPort),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$svg$Svg$g,
										{ctor: '[]'},
										A2(_kirchner$elm_pat$View_Canvas$pieces, extendPiece, data)),
									_1: {
										ctor: '::',
										_0: A3(_kirchner$elm_pat$Tools_Common$svgSelectPoint, focusPoint, selectPoint, data),
										_1: {
											ctor: '::',
											_0: tool,
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				}
			});
	});
var _kirchner$elm_pat$View_Canvas$GridConfig = F5(
	function (a, b, c, d, e) {
		return {unit: a, color1: b, color2: c, highlight: d, offset: e};
	});

var _kirchner$elm_pat$Styles_PointTable$rem = _rtfeldman$elm_css$Css$rem;
var _kirchner$elm_pat$Styles_PointTable$_p0 = _rtfeldman$elm_css_helpers$Html_CssHelpers$withNamespace('point-table__');
var _kirchner$elm_pat$Styles_PointTable$id = _kirchner$elm_pat$Styles_PointTable$_p0.id;
var _kirchner$elm_pat$Styles_PointTable$class = _kirchner$elm_pat$Styles_PointTable$_p0.$class;
var _kirchner$elm_pat$Styles_PointTable$classList = _kirchner$elm_pat$Styles_PointTable$_p0.classList;
var _kirchner$elm_pat$Styles_PointTable$Icon = {ctor: 'Icon'};
var _kirchner$elm_pat$Styles_PointTable$IconButton = {ctor: 'IconButton'};
var _kirchner$elm_pat$Styles_PointTable$CellAction = {ctor: 'CellAction'};
var _kirchner$elm_pat$Styles_PointTable$CellType = {ctor: 'CellType'};
var _kirchner$elm_pat$Styles_PointTable$CellCoordinate = {ctor: 'CellCoordinate'};
var _kirchner$elm_pat$Styles_PointTable$CellName = {ctor: 'CellName'};
var _kirchner$elm_pat$Styles_PointTable$CellId = {ctor: 'CellId'};
var _kirchner$elm_pat$Styles_PointTable$RowSelectedLast = {ctor: 'RowSelectedLast'};
var _kirchner$elm_pat$Styles_PointTable$RowSelected = {ctor: 'RowSelected'};
var _kirchner$elm_pat$Styles_PointTable$Row = {ctor: 'Row'};
var _kirchner$elm_pat$Styles_PointTable$Table = {ctor: 'Table'};
var _kirchner$elm_pat$Styles_PointTable$css = function () {
	var $class = _rtfeldman$elm_css$Css$class;
	return function (_p1) {
		return _rtfeldman$elm_css$Css$stylesheet(
			A2(_rtfeldman$elm_css$Css_Namespace$namespace, 'point-table__', _p1));
	}(
		{
			ctor: '::',
			_0: A2(
				$class,
				_kirchner$elm_pat$Styles_PointTable$Table,
				{
					ctor: '::',
					_0: A2(_rtfeldman$elm_css$Css$property, 'pointer-events', 'auto'),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$fontFamily(_rtfeldman$elm_css$Css$monospace),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$fontSize(
								_rtfeldman$elm_css$Css$px(16)),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$lineHeight(
									_kirchner$elm_pat$Styles_PointTable$rem(1)),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$borderCollapse(_rtfeldman$elm_css$Css$collapse),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$children(
											{
												ctor: '::',
												_0: _rtfeldman$elm_css$Css_Elements$tr(
													{
														ctor: '::',
														_0: _rtfeldman$elm_css$Css$children(
															{
																ctor: '::',
																_0: _rtfeldman$elm_css$Css_Elements$th(
																	{
																		ctor: '::',
																		_0: _rtfeldman$elm_css$Css$paddingLeft(
																			_kirchner$elm_pat$Styles_PointTable$rem(0.3)),
																		_1: {
																			ctor: '::',
																			_0: _rtfeldman$elm_css$Css$paddingRight(
																				_kirchner$elm_pat$Styles_PointTable$rem(0.3)),
																			_1: {
																				ctor: '::',
																				_0: _rtfeldman$elm_css$Css$paddingTop(
																					_kirchner$elm_pat$Styles_PointTable$rem(0.5)),
																				_1: {
																					ctor: '::',
																					_0: _rtfeldman$elm_css$Css$paddingBottom(
																						_kirchner$elm_pat$Styles_PointTable$rem(0.5)),
																					_1: {
																						ctor: '::',
																						_0: A3(
																							_rtfeldman$elm_css$Css$borderBottom3,
																							_rtfeldman$elm_css$Css$px(1),
																							_rtfeldman$elm_css$Css$solid,
																							_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base3)),
																						_1: {
																							ctor: '::',
																							_0: _rtfeldman$elm_css$Css$fontWeight(_rtfeldman$elm_css$Css$bold),
																							_1: {ctor: '[]'}
																						}
																					}
																				}
																			}
																		}
																	}),
																_1: {
																	ctor: '::',
																	_0: _rtfeldman$elm_css$Css_Elements$td(
																		{
																			ctor: '::',
																			_0: _rtfeldman$elm_css$Css$paddingLeft(
																				_kirchner$elm_pat$Styles_PointTable$rem(0.3)),
																			_1: {
																				ctor: '::',
																				_0: _rtfeldman$elm_css$Css$paddingRight(
																					_kirchner$elm_pat$Styles_PointTable$rem(0.3)),
																				_1: {
																					ctor: '::',
																					_0: _rtfeldman$elm_css$Css$paddingTop(
																						_kirchner$elm_pat$Styles_PointTable$rem(0.5)),
																					_1: {
																						ctor: '::',
																						_0: _rtfeldman$elm_css$Css$paddingBottom(
																							_kirchner$elm_pat$Styles_PointTable$rem(0.5)),
																						_1: {ctor: '[]'}
																					}
																				}
																			}
																		}),
																	_1: {ctor: '[]'}
																}
															}),
														_1: {ctor: '[]'}
													}),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					$class,
					_kirchner$elm_pat$Styles_PointTable$RowSelected,
					{
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$color(
							_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$yellow)),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						$class,
						_kirchner$elm_pat$Styles_PointTable$RowSelectedLast,
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$color(
								_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$orange)),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							$class,
							_kirchner$elm_pat$Styles_PointTable$CellId,
							{
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$width(
									_kirchner$elm_pat$Styles_PointTable$rem(1)),
								_1: {
									ctor: '::',
									_0: A3(
										_rtfeldman$elm_css$Css$borderRight3,
										_rtfeldman$elm_css$Css$px(1),
										_rtfeldman$elm_css$Css$solid,
										_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base3)),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$textAlign(_rtfeldman$elm_css$Css$right),
										_1: {ctor: '[]'}
									}
								}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								$class,
								_kirchner$elm_pat$Styles_PointTable$CellName,
								{
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$width(
										_kirchner$elm_pat$Styles_PointTable$rem(5)),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$textAlign(_rtfeldman$elm_css$Css$left),
										_1: {ctor: '[]'}
									}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									$class,
									_kirchner$elm_pat$Styles_PointTable$CellCoordinate,
									{
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$width(
											_kirchner$elm_pat$Styles_PointTable$rem(3)),
										_1: {
											ctor: '::',
											_0: _rtfeldman$elm_css$Css$textAlign(_rtfeldman$elm_css$Css$right),
											_1: {ctor: '[]'}
										}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										$class,
										_kirchner$elm_pat$Styles_PointTable$CellType,
										{
											ctor: '::',
											_0: _rtfeldman$elm_css$Css$width(
												_kirchner$elm_pat$Styles_PointTable$rem(6)),
											_1: {
												ctor: '::',
												_0: _rtfeldman$elm_css$Css$textAlign(_rtfeldman$elm_css$Css$center),
												_1: {ctor: '[]'}
											}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											$class,
											_kirchner$elm_pat$Styles_PointTable$CellAction,
											{
												ctor: '::',
												_0: _rtfeldman$elm_css$Css$width(
													_kirchner$elm_pat$Styles_PointTable$rem(1)),
												_1: {
													ctor: '::',
													_0: _rtfeldman$elm_css$Css$textAlign(_rtfeldman$elm_css$Css$center),
													_1: {ctor: '[]'}
												}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												$class,
												_kirchner$elm_pat$Styles_PointTable$IconButton,
												{
													ctor: '::',
													_0: _rtfeldman$elm_css$Css$width(
														_kirchner$elm_pat$Styles_PointTable$rem(1)),
													_1: {
														ctor: '::',
														_0: _rtfeldman$elm_css$Css$height(
															_kirchner$elm_pat$Styles_PointTable$rem(1)),
														_1: {
															ctor: '::',
															_0: _rtfeldman$elm_css$Css$borderRadius(
																_rtfeldman$elm_css$Css$pct(50)),
															_1: {
																ctor: '::',
																_0: _rtfeldman$elm_css$Css$color(
																	_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base0)),
																_1: {
																	ctor: '::',
																	_0: _rtfeldman$elm_css$Css$backgroundColor(_rtfeldman$elm_css$Css$transparent),
																	_1: {
																		ctor: '::',
																		_0: _rtfeldman$elm_css$Css$cursor(_rtfeldman$elm_css$Css$pointer),
																		_1: {
																			ctor: '::',
																			_0: _rtfeldman$elm_css$Css$hover(
																				{
																					ctor: '::',
																					_0: _rtfeldman$elm_css$Css$backgroundColor(
																						_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base3)),
																					_1: {ctor: '[]'}
																				}),
																			_1: {
																				ctor: '::',
																				_0: _rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$relative),
																				_1: {ctor: '[]'}
																			}
																		}
																	}
																}
															}
														}
													}
												}),
											_1: {
												ctor: '::',
												_0: A2(
													$class,
													_kirchner$elm_pat$Styles_PointTable$Icon,
													{
														ctor: '::',
														_0: _rtfeldman$elm_css$Css$important(
															_rtfeldman$elm_css$Css$fontSize(
																_kirchner$elm_pat$Styles_PointTable$rem(0.6))),
														_1: {
															ctor: '::',
															_0: _rtfeldman$elm_css$Css$important(
																_rtfeldman$elm_css$Css$lineHeight(
																	_kirchner$elm_pat$Styles_PointTable$rem(0.6))),
															_1: {
																ctor: '::',
																_0: _rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$absolute),
																_1: {
																	ctor: '::',
																	_0: _rtfeldman$elm_css$Css$top(
																		_rtfeldman$elm_css$Css$pct(50)),
																	_1: {
																		ctor: '::',
																		_0: _rtfeldman$elm_css$Css$left(
																			_rtfeldman$elm_css$Css$pct(50)),
																		_1: {
																			ctor: '::',
																			_0: _rtfeldman$elm_css$Css$transform(
																				A2(
																					_rtfeldman$elm_css$Css$translate2,
																					_rtfeldman$elm_css$Css$pct(-50),
																					_rtfeldman$elm_css$Css$pct(-50))),
																			_1: {ctor: '[]'}
																		}
																	}
																}
															}
														}
													}),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		});
}();

var _kirchner$elm_pat$Views_PointTable$printPoint = F2(
	function (variables, point) {
		var handlers = {
			withAbsolute: F3(
				function (_p2, _p1, _p0) {
					return 'absolute';
				}),
			withRelative: F4(
				function (_p6, _p5, _p4, _p3) {
					return 'relative';
				}),
			withDistance: F4(
				function (_p10, _p9, _p8, _p7) {
					return 'distance';
				}),
			withBetween: F4(
				function (_p14, _p13, _p12, _p11) {
					return 'between';
				})
		};
		return A2(_kirchner$elm_pat$Point$dispatch, handlers, point);
	});
var _kirchner$elm_pat$Views_PointTable$viewPointEntry = F2(
	function (data, _p15) {
		var _p16 = _p15;
		var _p18 = _p16._1;
		var _p17 = _p16._0;
		var isSelectedLast = _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$Maybe$Just(_p17),
			_elm_lang$core$List$head(data.selectedPoints));
		var isSelected = A2(_elm_lang$core$List$member, _p17, data.selectedPoints);
		var v = A3(_kirchner$elm_pat$Point$position, data.store, data.variables, _p18);
		var x = A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			A2(
				_elm_lang$core$Maybe$map,
				_elm_lang$core$Basics$toString,
				A2(
					_elm_lang$core$Maybe$map,
					function (x) {
						return _elm_lang$core$Basics$toFloat(
							_elm_lang$core$Basics$floor(100 * x)) / 100;
					},
					A2(_elm_lang$core$Maybe$map, _elm_community$linear_algebra$Math_Vector2$getX, v))));
		var y = A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			A2(
				_elm_lang$core$Maybe$map,
				_elm_lang$core$Basics$toString,
				A2(
					_elm_lang$core$Maybe$map,
					function (y) {
						return _elm_lang$core$Basics$toFloat(
							_elm_lang$core$Basics$floor(100 * y)) / 100;
					},
					A2(_elm_lang$core$Maybe$map, _elm_community$linear_algebra$Math_Vector2$getY, v))));
		return A2(
			_elm_lang$html$Html$tr,
			{
				ctor: '::',
				_0: _kirchner$elm_pat$Styles_PointTable$class(
					A2(
						_elm_lang$core$List$filterMap,
						_elm_lang$core$Basics$identity,
						{
							ctor: '::',
							_0: _elm_lang$core$Maybe$Just(_kirchner$elm_pat$Styles_PointTable$Row),
							_1: {
								ctor: '::',
								_0: isSelected ? _elm_lang$core$Maybe$Just(_kirchner$elm_pat$Styles_PointTable$RowSelected) : _elm_lang$core$Maybe$Nothing,
								_1: {
									ctor: '::',
									_0: isSelectedLast ? _elm_lang$core$Maybe$Just(_kirchner$elm_pat$Styles_PointTable$RowSelectedLast) : _elm_lang$core$Maybe$Nothing,
									_1: {ctor: '[]'}
								}
							}
						})),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$td,
					{
						ctor: '::',
						_0: _kirchner$elm_pat$Styles_PointTable$class(
							{
								ctor: '::',
								_0: _kirchner$elm_pat$Styles_PointTable$CellId,
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(
							_elm_lang$core$Basics$toString(
								_kirchner$elm_pat$Store$toInt(_p17))),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$td,
						{
							ctor: '::',
							_0: _kirchner$elm_pat$Styles_PointTable$class(
								{
									ctor: '::',
									_0: _kirchner$elm_pat$Styles_PointTable$CellName,
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text(
								_kirchner$elm_pat$Point$name(_p18)),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$td,
							{
								ctor: '::',
								_0: _kirchner$elm_pat$Styles_PointTable$class(
									{
										ctor: '::',
										_0: _kirchner$elm_pat$Styles_PointTable$CellCoordinate,
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(x),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$td,
								{
									ctor: '::',
									_0: _kirchner$elm_pat$Styles_PointTable$class(
										{
											ctor: '::',
											_0: _kirchner$elm_pat$Styles_PointTable$CellCoordinate,
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text(y),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$td,
									{
										ctor: '::',
										_0: _kirchner$elm_pat$Styles_PointTable$class(
											{
												ctor: '::',
												_0: _kirchner$elm_pat$Styles_PointTable$CellType,
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text(
											A2(_kirchner$elm_pat$Views_PointTable$printPoint, data.variables, _p18)),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$td,
										{
											ctor: '::',
											_0: _kirchner$elm_pat$Styles_PointTable$class(
												{
													ctor: '::',
													_0: _kirchner$elm_pat$Styles_PointTable$CellAction,
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: A2(
												_kirchner$elm_pat$Views_Common$iconSmall,
												'delete',
												_kirchner$elm_pat$Editor$DeletePoint(_p17)),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			});
	});
var _kirchner$elm_pat$Views_PointTable$view = function (data) {
	return A2(
		_elm_lang$html$Html$table,
		{
			ctor: '::',
			_0: _kirchner$elm_pat$Styles_PointTable$class(
				{
					ctor: '::',
					_0: _kirchner$elm_pat$Styles_PointTable$Table,
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$tr,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$th,
						{
							ctor: '::',
							_0: _kirchner$elm_pat$Styles_PointTable$class(
								{
									ctor: '::',
									_0: _kirchner$elm_pat$Styles_PointTable$CellId,
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('#'),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$th,
							{
								ctor: '::',
								_0: _kirchner$elm_pat$Styles_PointTable$class(
									{
										ctor: '::',
										_0: _kirchner$elm_pat$Styles_PointTable$CellName,
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('name'),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$th,
								{
									ctor: '::',
									_0: _kirchner$elm_pat$Styles_PointTable$class(
										{
											ctor: '::',
											_0: _kirchner$elm_pat$Styles_PointTable$CellCoordinate,
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text('x'),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$th,
									{
										ctor: '::',
										_0: _kirchner$elm_pat$Styles_PointTable$class(
											{
												ctor: '::',
												_0: _kirchner$elm_pat$Styles_PointTable$CellCoordinate,
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('y'),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$th,
										{
											ctor: '::',
											_0: _kirchner$elm_pat$Styles_PointTable$class(
												{
													ctor: '::',
													_0: _kirchner$elm_pat$Styles_PointTable$CellType,
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										},
										{ctor: '[]'}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$th,
											{
												ctor: '::',
												_0: _kirchner$elm_pat$Styles_PointTable$class(
													{
														ctor: '::',
														_0: _kirchner$elm_pat$Styles_PointTable$CellAction,
														_1: {ctor: '[]'}
													}),
												_1: {ctor: '[]'}
											},
											{ctor: '[]'}),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}),
			_1: A2(
				_elm_lang$core$List$map,
				_kirchner$elm_pat$Views_PointTable$viewPointEntry(data),
				_kirchner$elm_pat$Store$toList(data.store))
		});
};

var _kirchner$elm_pat$Styles_ToolBox$rem = _rtfeldman$elm_css$Css$rem;
var _kirchner$elm_pat$Styles_ToolBox$_p0 = _rtfeldman$elm_css_helpers$Html_CssHelpers$withNamespace('tool-box__');
var _kirchner$elm_pat$Styles_ToolBox$id = _kirchner$elm_pat$Styles_ToolBox$_p0.id;
var _kirchner$elm_pat$Styles_ToolBox$class = _kirchner$elm_pat$Styles_ToolBox$_p0.$class;
var _kirchner$elm_pat$Styles_ToolBox$classList = _kirchner$elm_pat$Styles_ToolBox$_p0.classList;
var _kirchner$elm_pat$Styles_ToolBox$Container = {ctor: 'Container'};
var _kirchner$elm_pat$Styles_ToolBox$css = function () {
	var $class = _rtfeldman$elm_css$Css$class;
	return function (_p1) {
		return _rtfeldman$elm_css$Css$stylesheet(
			A2(_rtfeldman$elm_css$Css_Namespace$namespace, 'tool-box__', _p1));
	}(
		{
			ctor: '::',
			_0: A2(
				$class,
				_kirchner$elm_pat$Styles_ToolBox$Container,
				{
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$displayFlex,
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$flexFlow1(_rtfeldman$elm_css$Css$column),
						_1: {
							ctor: '::',
							_0: A2(_rtfeldman$elm_css$Css$property, 'pointer-events', 'auto'),
							_1: {ctor: '[]'}
						}
					}
				}),
			_1: {ctor: '[]'}
		});
}();

var _kirchner$elm_pat$Views_ToolBox$view = function (data) {
	var button = function (tool) {
		return A2(
			_kirchner$elm_pat$Views_Common$iconBig,
			'edit',
			_kirchner$elm_pat$Editor$UpdateTool(tool));
	};
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _kirchner$elm_pat$Styles_ToolBox$class(
				{
					ctor: '::',
					_0: _kirchner$elm_pat$Styles_ToolBox$Container,
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		},
		A2(
			_elm_lang$core$List$map,
			button,
			_kirchner$elm_pat$Editor$allTools(data)));
};

var _kirchner$elm_pat$Styles_VariableTable$rem = _rtfeldman$elm_css$Css$rem;
var _kirchner$elm_pat$Styles_VariableTable$_p0 = _rtfeldman$elm_css_helpers$Html_CssHelpers$withNamespace('variable-table__');
var _kirchner$elm_pat$Styles_VariableTable$id = _kirchner$elm_pat$Styles_VariableTable$_p0.id;
var _kirchner$elm_pat$Styles_VariableTable$class = _kirchner$elm_pat$Styles_VariableTable$_p0.$class;
var _kirchner$elm_pat$Styles_VariableTable$classList = _kirchner$elm_pat$Styles_VariableTable$_p0.classList;
var _kirchner$elm_pat$Styles_VariableTable$InputBad = {ctor: 'InputBad'};
var _kirchner$elm_pat$Styles_VariableTable$Input = {ctor: 'Input'};
var _kirchner$elm_pat$Styles_VariableTable$Icon = {ctor: 'Icon'};
var _kirchner$elm_pat$Styles_VariableTable$IconButton = {ctor: 'IconButton'};
var _kirchner$elm_pat$Styles_VariableTable$CellAction = {ctor: 'CellAction'};
var _kirchner$elm_pat$Styles_VariableTable$CellValue = {ctor: 'CellValue'};
var _kirchner$elm_pat$Styles_VariableTable$CellFormula = {ctor: 'CellFormula'};
var _kirchner$elm_pat$Styles_VariableTable$CellName = {ctor: 'CellName'};
var _kirchner$elm_pat$Styles_VariableTable$CellSign = {ctor: 'CellSign'};
var _kirchner$elm_pat$Styles_VariableTable$Table = {ctor: 'Table'};
var _kirchner$elm_pat$Styles_VariableTable$css = function () {
	var $class = _rtfeldman$elm_css$Css$class;
	return function (_p1) {
		return _rtfeldman$elm_css$Css$stylesheet(
			A2(_rtfeldman$elm_css$Css_Namespace$namespace, 'variable-table__', _p1));
	}(
		{
			ctor: '::',
			_0: A2(
				$class,
				_kirchner$elm_pat$Styles_VariableTable$Table,
				{
					ctor: '::',
					_0: A2(_rtfeldman$elm_css$Css$property, 'pointer-events', 'auto'),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$fontFamily(_rtfeldman$elm_css$Css$monospace),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$fontSize(
								_rtfeldman$elm_css$Css$px(16)),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$lineHeight(
									_kirchner$elm_pat$Styles_VariableTable$rem(1)),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$borderCollapse(_rtfeldman$elm_css$Css$collapse),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$children(
											{
												ctor: '::',
												_0: _rtfeldman$elm_css$Css_Elements$tr(
													{
														ctor: '::',
														_0: _rtfeldman$elm_css$Css$children(
															{
																ctor: '::',
																_0: _rtfeldman$elm_css$Css_Elements$th(
																	{
																		ctor: '::',
																		_0: _rtfeldman$elm_css$Css$paddingLeft(
																			_kirchner$elm_pat$Styles_VariableTable$rem(0.3)),
																		_1: {
																			ctor: '::',
																			_0: _rtfeldman$elm_css$Css$paddingRight(
																				_kirchner$elm_pat$Styles_VariableTable$rem(0.3)),
																			_1: {
																				ctor: '::',
																				_0: _rtfeldman$elm_css$Css$paddingTop(
																					_kirchner$elm_pat$Styles_VariableTable$rem(0.5)),
																				_1: {
																					ctor: '::',
																					_0: _rtfeldman$elm_css$Css$paddingBottom(
																						_kirchner$elm_pat$Styles_VariableTable$rem(0.5)),
																					_1: {
																						ctor: '::',
																						_0: A3(
																							_rtfeldman$elm_css$Css$borderTop3,
																							_rtfeldman$elm_css$Css$px(1),
																							_rtfeldman$elm_css$Css$solid,
																							_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base3)),
																						_1: {ctor: '[]'}
																					}
																				}
																			}
																		}
																	}),
																_1: {
																	ctor: '::',
																	_0: _rtfeldman$elm_css$Css_Elements$td(
																		{
																			ctor: '::',
																			_0: _rtfeldman$elm_css$Css$paddingLeft(
																				_kirchner$elm_pat$Styles_VariableTable$rem(0.3)),
																			_1: {
																				ctor: '::',
																				_0: _rtfeldman$elm_css$Css$paddingRight(
																					_kirchner$elm_pat$Styles_VariableTable$rem(0.3)),
																				_1: {
																					ctor: '::',
																					_0: _rtfeldman$elm_css$Css$paddingTop(
																						_kirchner$elm_pat$Styles_VariableTable$rem(0.5)),
																					_1: {
																						ctor: '::',
																						_0: _rtfeldman$elm_css$Css$paddingBottom(
																							_kirchner$elm_pat$Styles_VariableTable$rem(0.5)),
																						_1: {
																							ctor: '::',
																							_0: _rtfeldman$elm_css$Css$verticalAlign(_rtfeldman$elm_css$Css$top),
																							_1: {ctor: '[]'}
																						}
																					}
																				}
																			}
																		}),
																	_1: {ctor: '[]'}
																}
															}),
														_1: {ctor: '[]'}
													}),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					$class,
					_kirchner$elm_pat$Styles_VariableTable$CellSign,
					{
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$width(
							_kirchner$elm_pat$Styles_VariableTable$rem(2)),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$textAlign(_rtfeldman$elm_css$Css$center),
							_1: {ctor: '[]'}
						}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						$class,
						_kirchner$elm_pat$Styles_VariableTable$CellName,
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Css$width(
								_kirchner$elm_pat$Styles_VariableTable$rem(5)),
							_1: {
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$textAlign(_rtfeldman$elm_css$Css$right),
								_1: {ctor: '[]'}
							}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							$class,
							_kirchner$elm_pat$Styles_VariableTable$CellFormula,
							{
								ctor: '::',
								_0: _rtfeldman$elm_css$Css$width(
									_kirchner$elm_pat$Styles_VariableTable$rem(8)),
								_1: {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$textAlign(_rtfeldman$elm_css$Css$left),
									_1: {ctor: '[]'}
								}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								$class,
								_kirchner$elm_pat$Styles_VariableTable$CellValue,
								{
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$width(
										_kirchner$elm_pat$Styles_VariableTable$rem(3)),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$textAlign(_rtfeldman$elm_css$Css$left),
										_1: {ctor: '[]'}
									}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									$class,
									_kirchner$elm_pat$Styles_VariableTable$CellAction,
									{
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$width(
											_kirchner$elm_pat$Styles_VariableTable$rem(1)),
										_1: {
											ctor: '::',
											_0: _rtfeldman$elm_css$Css$textAlign(_rtfeldman$elm_css$Css$center),
											_1: {ctor: '[]'}
										}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										$class,
										_kirchner$elm_pat$Styles_VariableTable$IconButton,
										{
											ctor: '::',
											_0: _rtfeldman$elm_css$Css$width(
												_kirchner$elm_pat$Styles_VariableTable$rem(1)),
											_1: {
												ctor: '::',
												_0: _rtfeldman$elm_css$Css$height(
													_kirchner$elm_pat$Styles_VariableTable$rem(1)),
												_1: {
													ctor: '::',
													_0: _rtfeldman$elm_css$Css$borderRadius(
														_rtfeldman$elm_css$Css$pct(50)),
													_1: {
														ctor: '::',
														_0: _rtfeldman$elm_css$Css$color(
															_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base0)),
														_1: {
															ctor: '::',
															_0: _rtfeldman$elm_css$Css$backgroundColor(_rtfeldman$elm_css$Css$transparent),
															_1: {
																ctor: '::',
																_0: _rtfeldman$elm_css$Css$cursor(_rtfeldman$elm_css$Css$pointer),
																_1: {
																	ctor: '::',
																	_0: _rtfeldman$elm_css$Css$hover(
																		{
																			ctor: '::',
																			_0: _rtfeldman$elm_css$Css$backgroundColor(
																				_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base3)),
																			_1: {ctor: '[]'}
																		}),
																	_1: {
																		ctor: '::',
																		_0: _rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$relative),
																		_1: {ctor: '[]'}
																	}
																}
															}
														}
													}
												}
											}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											$class,
											_kirchner$elm_pat$Styles_VariableTable$Icon,
											{
												ctor: '::',
												_0: _rtfeldman$elm_css$Css$important(
													_rtfeldman$elm_css$Css$fontSize(
														_kirchner$elm_pat$Styles_VariableTable$rem(0.6))),
												_1: {
													ctor: '::',
													_0: _rtfeldman$elm_css$Css$important(
														_rtfeldman$elm_css$Css$lineHeight(
															_kirchner$elm_pat$Styles_VariableTable$rem(0.6))),
													_1: {
														ctor: '::',
														_0: _rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$absolute),
														_1: {
															ctor: '::',
															_0: _rtfeldman$elm_css$Css$top(
																_rtfeldman$elm_css$Css$pct(50)),
															_1: {
																ctor: '::',
																_0: _rtfeldman$elm_css$Css$left(
																	_rtfeldman$elm_css$Css$pct(50)),
																_1: {
																	ctor: '::',
																	_0: _rtfeldman$elm_css$Css$transform(
																		A2(
																			_rtfeldman$elm_css$Css$translate2,
																			_rtfeldman$elm_css$Css$pct(-50),
																			_rtfeldman$elm_css$Css$pct(-50))),
																	_1: {ctor: '[]'}
																}
															}
														}
													}
												}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												$class,
												_kirchner$elm_pat$Styles_VariableTable$Input,
												{
													ctor: '::',
													_0: _rtfeldman$elm_css$Css$backgroundColor(
														_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base03)),
													_1: {
														ctor: '::',
														_0: _rtfeldman$elm_css$Css$borderColor(_rtfeldman$elm_css$Css$transparent),
														_1: {
															ctor: '::',
															_0: _rtfeldman$elm_css$Css$border(_rtfeldman$elm_css$Css$zero),
															_1: {
																ctor: '::',
																_0: _rtfeldman$elm_css$Css$fontFamily(_rtfeldman$elm_css$Css$monospace),
																_1: {
																	ctor: '::',
																	_0: _rtfeldman$elm_css$Css$fontSize(
																		_rtfeldman$elm_css$Css$px(16)),
																	_1: {
																		ctor: '::',
																		_0: _rtfeldman$elm_css$Css$lineHeight(
																			_kirchner$elm_pat$Styles_VariableTable$rem(1)),
																		_1: {
																			ctor: '::',
																			_0: _rtfeldman$elm_css$Css$width(
																				_kirchner$elm_pat$Styles_VariableTable$rem(6)),
																			_1: {
																				ctor: '::',
																				_0: _rtfeldman$elm_css$Css$backgroundColor(_rtfeldman$elm_css$Css$transparent),
																				_1: {
																					ctor: '::',
																					_0: _rtfeldman$elm_css$Css$color(
																						_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base0)),
																					_1: {
																						ctor: '::',
																						_0: _rtfeldman$elm_css$Css$focus(
																							{
																								ctor: '::',
																								_0: _rtfeldman$elm_css$Css$outline(_rtfeldman$elm_css$Css$none),
																								_1: {
																									ctor: '::',
																									_0: _rtfeldman$elm_css$Css$borderColor(
																										_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$base02)),
																									_1: {ctor: '[]'}
																								}
																							}),
																						_1: {ctor: '[]'}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}),
											_1: {
												ctor: '::',
												_0: A2(
													$class,
													_kirchner$elm_pat$Styles_VariableTable$InputBad,
													{
														ctor: '::',
														_0: _rtfeldman$elm_css$Css$color(
															_rtfeldman$elm_css$Css$hex(_kirchner$elm_pat$Styles_Colors$red)),
														_1: {ctor: '[]'}
													}),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		});
}();

var _kirchner$elm_pat$Views_VariableTable$cellSign = function (sign) {
	return A2(
		_elm_lang$html$Html$td,
		{
			ctor: '::',
			_0: _kirchner$elm_pat$Styles_VariableTable$class(
				{
					ctor: '::',
					_0: _kirchner$elm_pat$Styles_VariableTable$CellSign,
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(sign),
			_1: {ctor: '[]'}
		});
};
var _kirchner$elm_pat$Views_VariableTable$viewVariable = F2(
	function (variables, _p0) {
		var _p1 = _p0;
		var _p2 = _p1._1;
		return A2(
			_elm_lang$html$Html$tr,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$td,
					{
						ctor: '::',
						_0: _kirchner$elm_pat$Styles_VariableTable$class(
							{
								ctor: '::',
								_0: _kirchner$elm_pat$Styles_VariableTable$CellName,
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(_p1._0),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: _kirchner$elm_pat$Views_VariableTable$cellSign('='),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$td,
							{
								ctor: '::',
								_0: _kirchner$elm_pat$Styles_VariableTable$class(
									{
										ctor: '::',
										_0: _kirchner$elm_pat$Styles_VariableTable$CellFormula,
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(
									_kirchner$elm_pat$Expr$print(_p2)),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: _kirchner$elm_pat$Views_VariableTable$cellSign('='),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$td,
									{
										ctor: '::',
										_0: _kirchner$elm_pat$Styles_VariableTable$class(
											{
												ctor: '::',
												_0: _kirchner$elm_pat$Styles_VariableTable$CellValue,
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text(
											A2(
												_elm_lang$core$Maybe$withDefault,
												'',
												A2(
													_elm_lang$core$Maybe$map,
													_elm_lang$core$Basics$toString,
													A2(_kirchner$elm_pat$Expr$compute, variables, _p2)))),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$td,
										{
											ctor: '::',
											_0: _kirchner$elm_pat$Styles_VariableTable$class(
												{
													ctor: '::',
													_0: _kirchner$elm_pat$Styles_VariableTable$CellAction,
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										},
										{ctor: '[]'}),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			});
	});
var _kirchner$elm_pat$Views_VariableTable$view = F3(
	function (variables, newName, newValue) {
		return A2(
			_elm_lang$html$Html$table,
			{
				ctor: '::',
				_0: _kirchner$elm_pat$Styles_VariableTable$class(
					{
						ctor: '::',
						_0: _kirchner$elm_pat$Styles_VariableTable$Table,
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			},
			A2(
				_elm_lang$core$Basics_ops['++'],
				A2(
					_elm_lang$core$List$map,
					_kirchner$elm_pat$Views_VariableTable$viewVariable(variables),
					_elm_lang$core$Dict$toList(variables)),
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$tr,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$th,
								{
									ctor: '::',
									_0: _kirchner$elm_pat$Styles_VariableTable$class(
										{
											ctor: '::',
											_0: _kirchner$elm_pat$Styles_VariableTable$CellName,
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$input,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Events$onInput(_kirchner$elm_pat$Editor$NameUpdated),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$placeholder('name'),
												_1: {
													ctor: '::',
													_0: _kirchner$elm_pat$Styles_VariableTable$class(
														{
															ctor: '::',
															_0: _kirchner$elm_pat$Styles_VariableTable$Input,
															_1: {ctor: '[]'}
														}),
													_1: {
														ctor: '::',
														_0: _kirchner$elm_pat$Styles_VariableTable$classList(
															{
																ctor: '::',
																_0: {
																	ctor: '_Tuple2',
																	_0: _kirchner$elm_pat$Styles_VariableTable$InputBad,
																	_1: _elm_lang$core$Native_Utils.eq(newName, _elm_lang$core$Maybe$Nothing)
																},
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													}
												}
											}
										},
										{ctor: '[]'}),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$th,
									{
										ctor: '::',
										_0: _kirchner$elm_pat$Styles_VariableTable$class(
											{
												ctor: '::',
												_0: _kirchner$elm_pat$Styles_VariableTable$CellSign,
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('='),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$th,
										{
											ctor: '::',
											_0: _kirchner$elm_pat$Styles_VariableTable$class(
												{
													ctor: '::',
													_0: _kirchner$elm_pat$Styles_VariableTable$CellFormula,
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$input,
												{
													ctor: '::',
													_0: _elm_lang$html$Html_Events$onInput(_kirchner$elm_pat$Editor$ValueUpdated),
													_1: {
														ctor: '::',
														_0: _elm_lang$html$Html_Attributes$placeholder('value'),
														_1: {
															ctor: '::',
															_0: _kirchner$elm_pat$Styles_VariableTable$class(
																{
																	ctor: '::',
																	_0: _kirchner$elm_pat$Styles_VariableTable$Input,
																	_1: {ctor: '[]'}
																}),
															_1: {
																ctor: '::',
																_0: _kirchner$elm_pat$Styles_VariableTable$classList(
																	{
																		ctor: '::',
																		_0: {
																			ctor: '_Tuple2',
																			_0: _kirchner$elm_pat$Styles_VariableTable$InputBad,
																			_1: _elm_lang$core$Native_Utils.eq(newValue, _elm_lang$core$Maybe$Nothing)
																		},
																		_1: {ctor: '[]'}
																	}),
																_1: {ctor: '[]'}
															}
														}
													}
												},
												{ctor: '[]'}),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$th,
											{
												ctor: '::',
												_0: _kirchner$elm_pat$Styles_VariableTable$class(
													{
														ctor: '::',
														_0: _kirchner$elm_pat$Styles_VariableTable$CellSign,
														_1: {ctor: '[]'}
													}),
												_1: {ctor: '[]'}
											},
											{ctor: '[]'}),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$th,
												{
													ctor: '::',
													_0: _kirchner$elm_pat$Styles_VariableTable$class(
														{
															ctor: '::',
															_0: _kirchner$elm_pat$Styles_VariableTable$CellValue,
															_1: {ctor: '[]'}
														}),
													_1: {ctor: '[]'}
												},
												{ctor: '[]'}),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$th,
													{
														ctor: '::',
														_0: _kirchner$elm_pat$Styles_VariableTable$class(
															{
																ctor: '::',
																_0: _kirchner$elm_pat$Styles_VariableTable$CellAction,
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													},
													{
														ctor: '::',
														_0: A2(_kirchner$elm_pat$Views_Common$iconSmall, 'add', _kirchner$elm_pat$Editor$AddVariable),
														_1: {ctor: '[]'}
													}),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}),
					_1: {ctor: '[]'}
				}));
	});

var _kirchner$elm_pat$View$drawTool = F3(
	function (callbacks, data, tool) {
		var _p0 = tool;
		switch (_p0.ctor) {
			case 'Absolute':
				return A4(
					_kirchner$elm_pat$Tools_Absolute$svg,
					callbacks,
					function (_p1) {
						return _kirchner$elm_pat$Editor$UpdateTool(
							_kirchner$elm_pat$Model$Absolute(_p1));
					},
					data,
					_p0._0);
			case 'Relative':
				return A4(
					_kirchner$elm_pat$Tools_Relative$svg,
					callbacks,
					function (_p2) {
						return _kirchner$elm_pat$Editor$UpdateTool(
							_kirchner$elm_pat$Model$Relative(_p2));
					},
					data,
					_p0._0);
			case 'Distance':
				return A4(
					_kirchner$elm_pat$Tools_Distance$svg,
					callbacks,
					function (_p3) {
						return _kirchner$elm_pat$Editor$UpdateTool(
							_kirchner$elm_pat$Model$Distance(_p3));
					},
					data,
					_p0._0);
			case 'ExtendPiece':
				return A3(_kirchner$elm_pat$Tools_ExtendPiece$svg, callbacks, data, _p0._0);
			default:
				return A2(
					_elm_lang$svg$Svg$g,
					{ctor: '[]'},
					{ctor: '[]'});
		}
	});
var _kirchner$elm_pat$View$viewCanvas = function (model) {
	return A7(
		_kirchner$elm_pat$View_Canvas$view,
		A3(
			_kirchner$elm_pat$View$drawTool,
			_kirchner$elm_pat$Editor$callbacks,
			_kirchner$elm_pat$Editor$data(model),
			model.tool),
		_kirchner$elm_pat$Editor$DragStart,
		_kirchner$elm_pat$Editor$FocusPoint,
		_kirchner$elm_pat$Editor$SelectPoint,
		F2(
			function (id, segment) {
				return _kirchner$elm_pat$Editor$UpdateTool(
					_kirchner$elm_pat$Model$ExtendPiece(
						A2(_kirchner$elm_pat$Tools_ExtendPiece$init, id, segment)));
			}),
		_kirchner$elm_pat$Editor$data(model),
		model.pieceStore);
};
var _kirchner$elm_pat$View$viewToolInfo = F3(
	function (callbacks, data, tool) {
		var _p4 = tool;
		switch (_p4.ctor) {
			case 'Absolute':
				return _elm_lang$core$Maybe$Just(
					A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _kirchner$elm_pat$Styles_Editor$class(
								{
									ctor: '::',
									_0: _kirchner$elm_pat$Styles_Editor$Container,
									_1: {
										ctor: '::',
										_0: _kirchner$elm_pat$Styles_Editor$ContainerTopLeft,
										_1: {ctor: '[]'}
									}
								}),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A4(
								_kirchner$elm_pat$Tools_Absolute$view,
								callbacks,
								function (_p5) {
									return _kirchner$elm_pat$Editor$UpdateTool(
										_kirchner$elm_pat$Model$Absolute(_p5));
								},
								data,
								_p4._0),
							_1: {ctor: '[]'}
						}));
			case 'Relative':
				return _elm_lang$core$Maybe$Just(
					A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _kirchner$elm_pat$Styles_Editor$class(
								{
									ctor: '::',
									_0: _kirchner$elm_pat$Styles_Editor$Container,
									_1: {
										ctor: '::',
										_0: _kirchner$elm_pat$Styles_Editor$ContainerTopLeft,
										_1: {ctor: '[]'}
									}
								}),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A4(
								_kirchner$elm_pat$Tools_Relative$view,
								callbacks,
								function (_p6) {
									return _kirchner$elm_pat$Editor$UpdateTool(
										_kirchner$elm_pat$Model$Relative(_p6));
								},
								data,
								_p4._0),
							_1: {ctor: '[]'}
						}));
			case 'Distance':
				return _elm_lang$core$Maybe$Just(
					A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _kirchner$elm_pat$Styles_Editor$class(
								{
									ctor: '::',
									_0: _kirchner$elm_pat$Styles_Editor$Container,
									_1: {
										ctor: '::',
										_0: _kirchner$elm_pat$Styles_Editor$ContainerTopLeft,
										_1: {ctor: '[]'}
									}
								}),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A4(
								_kirchner$elm_pat$Tools_Distance$view,
								callbacks,
								function (_p7) {
									return _kirchner$elm_pat$Editor$UpdateTool(
										_kirchner$elm_pat$Model$Distance(_p7));
								},
								data,
								_p4._0),
							_1: {ctor: '[]'}
						}));
			case 'ExtendPiece':
				return _elm_lang$core$Maybe$Nothing;
			default:
				return _elm_lang$core$Maybe$Nothing;
		}
	});
var _kirchner$elm_pat$View$view = function (model) {
	var data = _kirchner$elm_pat$Editor$data(model);
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _kirchner$elm_pat$Styles_Editor$class(
				{
					ctor: '::',
					_0: _kirchner$elm_pat$Styles_Editor$Main,
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: _kirchner$elm_pat$Styles_Editor$classList(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: _kirchner$elm_pat$Styles_Editor$MouseMove,
							_1: !_elm_lang$core$Native_Utils.eq(model.drag, _elm_lang$core$Maybe$Nothing)
						},
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}
		},
		A2(
			_elm_lang$core$List$filterMap,
			_elm_lang$core$Basics$identity,
			{
				ctor: '::',
				_0: _elm_lang$core$Maybe$Just(
					A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _kirchner$elm_pat$Styles_Editor$class(
								{
									ctor: '::',
									_0: _kirchner$elm_pat$Styles_Editor$Container,
									_1: {
										ctor: '::',
										_0: _kirchner$elm_pat$Styles_Editor$ContainerTopLeftLeft,
										_1: {ctor: '[]'}
									}
								}),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _kirchner$elm_pat$Views_ToolBox$view(data),
							_1: {ctor: '[]'}
						})),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Maybe$Just(
						A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _kirchner$elm_pat$Styles_Editor$class(
									{
										ctor: '::',
										_0: _kirchner$elm_pat$Styles_Editor$Container,
										_1: {
											ctor: '::',
											_0: _kirchner$elm_pat$Styles_Editor$ContainerTopRight,
											_1: {ctor: '[]'}
										}
									}),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: A2(
									_kirchner$elm_pat$FileBrowser$view,
									{
										lift: _kirchner$elm_pat$Editor$FileBrowserMsg,
										clearSession: _elm_lang$core$Maybe$Just(_kirchner$elm_pat$Editor$ClearSession),
										loadRemoteFile: _elm_lang$core$Maybe$Just(_kirchner$elm_pat$Editor$LoadRemoteFile)
									},
									data),
								_1: {ctor: '[]'}
							})),
					_1: {
						ctor: '::',
						_0: A3(_kirchner$elm_pat$View$viewToolInfo, _kirchner$elm_pat$Editor$callbacks, data, model.tool),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Maybe$Just(
								A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _kirchner$elm_pat$Styles_Editor$class(
											{
												ctor: '::',
												_0: _kirchner$elm_pat$Styles_Editor$Container,
												_1: {
													ctor: '::',
													_0: _kirchner$elm_pat$Styles_Editor$ContainerBottomLeft,
													_1: {ctor: '[]'}
												}
											}),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _kirchner$elm_pat$Views_PointTable$view(data),
										_1: {ctor: '[]'}
									})),
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Maybe$Just(
									A2(
										_elm_lang$html$Html$div,
										{
											ctor: '::',
											_0: _kirchner$elm_pat$Styles_Editor$class(
												{
													ctor: '::',
													_0: _kirchner$elm_pat$Styles_Editor$Container,
													_1: {
														ctor: '::',
														_0: _kirchner$elm_pat$Styles_Editor$ContainerBottomRight,
														_1: {ctor: '[]'}
													}
												}),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: A3(_kirchner$elm_pat$Views_VariableTable$view, model.variables, model.newName, model.newValue),
											_1: {ctor: '[]'}
										})),
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Maybe$Just(
										_kirchner$elm_pat$View$viewCanvas(model)),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			}));
};

var _kirchner$elm_pat$App$autofocus = _elm_lang$core$Native_Platform.outgoingPort(
	'autofocus',
	function (v) {
		return null;
	});
var _kirchner$elm_pat$App$serialize = _elm_lang$core$Native_Platform.outgoingPort(
	'serialize',
	function (v) {
		return v;
	});
var _kirchner$elm_pat$App$ports = {autofocus: _kirchner$elm_pat$App$autofocus, serialize: _kirchner$elm_pat$App$serialize};
var _kirchner$elm_pat$App$main = _elm_lang$html$Html$programWithFlags(
	{
		init: _kirchner$elm_pat$Editor$init,
		update: _kirchner$elm_pat$Editor$update(_kirchner$elm_pat$App$ports),
		subscriptions: _kirchner$elm_pat$Editor$subscriptions,
		view: _kirchner$elm_pat$View$view
	})(
	A2(
		_elm_lang$core$Json_Decode$andThen,
		function (file0) {
			return _elm_lang$core$Json_Decode$succeed(
				{file0: file0});
		},
		A2(
			_elm_lang$core$Json_Decode$field,
			'file0',
			_elm_lang$core$Json_Decode$oneOf(
				{
					ctor: '::',
					_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
					_1: {
						ctor: '::',
						_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, _elm_lang$core$Json_Decode$value),
						_1: {ctor: '[]'}
					}
				}))));

var Elm = {};
Elm['App'] = Elm['App'] || {};
if (typeof _kirchner$elm_pat$App$main !== 'undefined') {
    _kirchner$elm_pat$App$main(Elm['App'], 'App', undefined);
}

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);
