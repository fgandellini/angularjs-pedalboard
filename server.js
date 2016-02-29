'use strict';

var express = require('express');
var https = require('https');
var morgan = require('morgan');
var path = require('path');
var app = express();

app.use(morgan('dev'));

var options = {
  key: '-----BEGIN RSA PRIVATE KEY-----\n' +
    'MIICXAIBAAKBgQDMw2LuAxSsAdXRtXO12O0gzeVw23bs3fZfVtNls8tplvwi4ri/\n' +
    'ZgugDlsU4nR7CuvG1QXMTzIUL5v+Rdbv+NHn+my1Kd4jy3Nnei7UMzrASo2MU74w\n' +
    'Sy8fo6rP8DXOsKVkcyS1E6qkfgbNh9GkTA+fnZwYLW8t9EvjSBqs2vJLZQIDAQAB\n' +
    'AoGAEHMt8nMa6Qqos9VA+3325ujDowJulm7qiRQ/nW8JS21OyjqununCy1P76zya\n' +
    'IPxqnqmkcpp2Knr8rDvOHa8+paCCszB9m3cbSPBSxNHEjACa3mnfL3ZLRBLG6niT\n' +
    'EydUi9sDAQJMXvalUStUEzPnYtVfbMGvmiMUvdv5VoqB/o0CQQDrUAsGDi3JI/Gj\n' +
    'YTzA68QWI++ht8FPBuVHSAk/X1Ibtn/0GnmAS4ireOaWoPglBQ/qMr4btQdehFRD\n' +
    'V0QKh4M/AkEA3sPL3/5Aj90xsE7TFLEFMU6TqgWXOLS7A+R9fUVcOlCEuv+6qVSk\n' +
    'WuEnVhIo9/6D/pHyG6D4/fwGmKoym2RcWwJAfws1GGzZTWpJkLLz8RiZQnbebspd\n' +
    '5MPNT+HVlFBrbSjoBiuxA5JEVIeuvw5jSuFjyUbiGuVu+BmrwLvBsYmeUwJAD1Ru\n' +
    'DUYT71KLftSN1hiwgMolg0fLNk3JqOTqddp2FFVCLRQ4Jjr67H4eFOA/DYHoV3Z3\n' +
    'sMsNF31mfs8HmIX5jQJBANMtTF1nCT1b+vaHPV5vO+IfIjAZIYuo0M3cWZ5j7/n6\n' +
    'NAlhtxxPc4ogP7iZpnaot2EuxQS39Gz+vFuzUkw/wpQ=\n' +
    '-----END RSA PRIVATE KEY-----',
  cert: '-----BEGIN CERTIFICATE-----\n' +
    'MIIB6DCCAVGgAwIBAgIJAOjWKGymx8gdMA0GCSqGSIb3DQEBCwUAMA0xCzAJBgNV\n' +
    'BAYTAklUMB4XDTE2MDExNTE0MTUyOFoXDTE2MDIxNDE0MTUyOFowDTELMAkGA1UE\n' +
    'BhMCSVQwgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAMzDYu4DFKwB1dG1c7XY\n' +
    '7SDN5XDbduzd9l9W02Wzy2mW/CLiuL9mC6AOWxTidHsK68bVBcxPMhQvm/5F1u/4\n' +
    '0ef6bLUp3iPLc2d6LtQzOsBKjYxTvjBLLx+jqs/wNc6wpWRzJLUTqqR+Bs2H0aRM\n' +
    'D5+dnBgtby30S+NIGqza8ktlAgMBAAGjUDBOMB0GA1UdDgQWBBQ6PP3DRSzvq2RU\n' +
    'LTXesy5bCAdB3TAfBgNVHSMEGDAWgBQ6PP3DRSzvq2RULTXesy5bCAdB3TAMBgNV\n' +
    'HRMEBTADAQH/MA0GCSqGSIb3DQEBCwUAA4GBABTp64BedtLOJd5VzJw1sJxF/7mK\n' +
    'L4Or8OHjFeMiJjilyYdcOaDuETW+RvpV0Kqy6ey3wLd6E5iYEjB4LEE0Upq/Hk34\n' +
    'P1OwK/ZQQRdFRc1i+YPG3oR2VmNUF+qtRaOipE7Ds+47Crr0Tz4FNeyuJY38b+Rz\n' +
    'shaKkgIrTERy5yuz\n' +
    '-----END CERTIFICATE-----'
};

var presets = {
  clean: {
    level: 1,
    tone: 0,
    drive: 0
  },
  soft: {
    level: 0.7,
    tone: 0.2,
    drive: 0.1
  },
  heavy: {
    level: 0.4,
    tone: 0.6,
    drive: 0.9
  }
};

app.get('/presets', function(req, res) {
  res.json(Object.keys(presets));
});

app.get('/presets/:name', function(req, res) {
  res.json(presets[req.params.name]);
});

app.use(express.static(path.join(__dirname, 'src')));
app.use('/vendors', express.static(path.join(__dirname, 'vendors')));

https.createServer(options, app).listen(10443, '0.0.0.0');
console.log('angularjs-pedalboard server active on 0.0.0.0:10443');
