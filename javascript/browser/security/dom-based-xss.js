const qs = window.location.search;
const hash = window.location.hash;

// ruleid:dom-based-xss
document.write(qs);
document.write(hash);

// ok:dom-based-xss
document.write("<OPTION value=2>English</OPTION>");

// ng
const e1 = document.createElement('p');
e1.innerHTML = qs;

// ng
const e2 = document.createElement('p');
e2.innerHTML = hash;

// ok
const e3 = document.createElement('p');
e3.innerHTML = "test"

// ok
$("div.test").html("test")

// ng
$("div.test").html(hash)

// ng
$("div.test").add(qs)

// ng
const referer = document.referrer
$("div.test").add(referer.substring(1,2))

// ng
const searchParams = new URLSearchParams(window.location.search)
const firstname = searchParams.get('firstname')
$("div.test").add(firstname)

// ng
const names = [searchParams.get('firstname'), searchParams.get('lastname')]
$("div.test").add(names.join(' '))

// ng
const arr = []
arr.push(searchParams.get('firstname'))
arr.push(searchParams.get('lastname'))
$("div.test2").html(arr.join(' '))