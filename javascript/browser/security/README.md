Semgrep rule for DOM-Based XSS.

## scan javascript file

```bash
$ semgrep --config dom-based-xss.yaml dom-based-xss.js
```

```
Scanning 1 file.

Findings:

  dom-based-xss.js
     dom-based-xss
        dom-xss

          5┆ document.write(qs);
          ⋮┆----------------------------------------
          6┆ document.write(hash);
          ⋮┆----------------------------------------
         13┆ e1.innerHTML = qs;
          ⋮┆----------------------------------------
         17┆ e2.innerHTML = hash;
          ⋮┆----------------------------------------
         27┆ $("div.test").html(hash)
          ⋮┆----------------------------------------
         30┆ $("div.test").add(qs)
          ⋮┆----------------------------------------
         34┆ $("div.test").add(referer.substring(1,2))
          ⋮┆----------------------------------------
         39┆ $("div.test").add(firstname)
          ⋮┆----------------------------------------
         43┆ $("div.test").add(names.join(' '))
          ⋮┆----------------------------------------
         49┆ $("div.test2").html(arr.join(' '))


Ran 1 rule on 1 file: 10 findings.
```

## scan html file

```bash
$ semgrep --config dom-based-xss.yaml --config extract-html-to-javascript.yaml dom-based-xss.html
```

```
Scanning 1 file.

Findings:

  dom-based-xss.html
     dom-based-xss
        dom-xss

          8┆ document.write(qs);
          ⋮┆----------------------------------------
          9┆ document.write(hash);


Ran 2 rules on 1 file: 2 findings.
```

## Scan ERB file

```bash
$ semgrep --config dom-based-xss.yaml --config extract-erb-to-javascript.yaml dom-based-xss.erb
```

```
Scanning 1 file.

Findings:

  dom-based-xss.erb
     dom-based-xss
        dom-xss

         12┆ document.write("ng" + qs);
          ⋮┆----------------------------------------
         13┆ document.writeln("ng" + hash);


Ran 2 rules on 1 file: 2 findings.
```