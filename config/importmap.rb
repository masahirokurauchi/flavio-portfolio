# Pin npm packages by running ./bin/importmap

pin "application", preload: true

# NOTE: pin jquery to jsdelivr instead of jspm
pin "jquery", to: "https://ga.jspm.io/npm:jquery@3.6.4/dist/jquery.js"
