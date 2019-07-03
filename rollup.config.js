import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import svg from 'rollup-plugin-svg';
import json from 'rollup-plugin-json';
import alias from 'rollup-plugin-alias';
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-preset-env';
import cssnano from 'cssnano';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/build/index.js',
      format: 'cjs'
    },
    {
      file: 'dist/build/index.es.js',
      format: 'es'
    }
  ],
  plugins: [
    external(),
    alias(),
    postcss({
      extract: true,
      extensions: ['.css'],
      plugins: [
        simplevars(),
        nested(),
        cssnext({
          warnForDuplicates: false
        }),
        cssnano()
      ]
    }),
    svg(),
    json(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      browser: true
    }),
    commonjs({
      include: [/node_modules\/create-react-context/],
      extensions: ['.js'],
      namedExports: {
        'node_modules/create-react-context/lib/index.js': [
          'createReactContext'
        ],
        'node_modules/gud/index.js': [
          'gud'
        ],
        'node_modules/fbjs/lib/warning.js': [
          'warning'
        ]
      }
    })
  ],
  external: [
    '@lingui/macro',
    '@lingui/react',
    'lodash/isEmpty',
    'loglevel',
    'styled-components',
    '@dhx-react-components/SVGIcons'
  ]
};