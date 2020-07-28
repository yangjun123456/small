module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  plugins: [
    "vue",
    "@typescript-eslint"
  ],
  rules: {
    'one-var': 2, // 禁止变量申明时用逗号一次申明多个
    'arrow-parens': 0, // 箭头函数只有一个参数的时候，必须加括号
    'generator-star-spacing': 0, // generator 的 * 前面禁止有空格，后面必须有空格
    semi: [0, 'always'], // 结尾必须有分号
    'no-extra-semi': 2, // 禁止出现多余的分号
    'space-before-function-paren': 0, // function 的小括号之前必须要有空格
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore'
      }],  // 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
    'spaced-comment': [
      'error',
      'always',
      {
        block: {
          exceptions: [
            '*'
          ],
          balanced: true
        }
      }
    ], // 注释的斜线或 * 后必须有空格
    'no-useless-escape': 0, // 转义可以使代码更易懂
    'no-tabs': 2, // 禁止使用 tabs
    'no-mixed-spaces-and-tabs': 2, // 禁止混用空格和缩进
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
        properties: true
      }
    ], // new 后面的类名必须首字母大写
    camelcase: 0, // 变量名必须是 camelcase 风格的 // @off 很多 api 或文件名都不是 camelcase
    'no-new': 2, // 禁止直接 new 一个类而不赋值
    indent: [
      0,
      2
    ],


    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",

    "consistent-return": "off",
    "no-else-return": 1,
    "space-unary-ops": 2,
    "quotes": [2, "single"],//引号类型 `` "" ''
    "quote-props": [0, "always"],//对象字面量中的属性名是否强制双引号


    // "@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: "no-public" }],
    // "@typescript-eslint/explicit-function-return-type": [
    //   // "warn",
    //   "off",
    //   {
    //     allowExpressions: true,
    //     allowTypedFunctionExpressions: true,
    //   }
    // ],
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/member-ordering": [2, {
      "default": [
        "public-static-field",
        "protected-static-field",
        "private-static-field",
        "public-instance-field",
        "protected-instance-field",
        "private-instance-field",
        "constructor",
        "public-static-method",
        "protected-static-method",
        "private-static-method",
        "public-instance-method",
        "protected-instance-method",
        "private-instance-method"
      ]
    }],
    // "@typescript-eslint/no-use-before-define": "off",
    // "@typescript-eslint/camelcase": ["off", { properties: "always" }],
    // "@typescript-eslint/no-unused-vars": ["error", {
    //   "vars": "all",
    //   "args": "none",
    //   "ignoreRestSiblings": true,
    // }],
    // '@typescript-eslint/indent': [0, 2],
    // '@typescript-eslint/explicit-function-return-type': 0,

    "prettier/prettier": [
      "error",
      {
        // semi: false,
        // printWidth: 200,

        // tabWidth: 2,
        // useTabs: false,
        // semi: true,
        // singleQuote: true,
        // //   quoteProps: "as-needed", // quoteProps: "<as-needed|consistent|preserve>"
        // //   jsxSingleQuote: true, // 在JSX中使用单引号而不是双引号
        // //   trailingComma: "none", // <es5|none|all>  多行时尽可能打印尾随逗号。 （例如，单行数组永远不会出现逗号结尾。）
        // //   bracketSpacing: true, // 在对象文字中的括号之间打印空格
        // //   jsxBracketSameLine: true, // 将多行JSX元素的>放在最后一行的末尾，而不是单独放在下一行（不适用于自闭元素）。
        // //   arrowParens: "avoid", //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
        // //   proseWrap: "never", // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
        // endOfLine: "lf", // <lf|crlf|cr|auto>


        // 一行最多 100 字符
        printWidth: 200,
        // 使用 4 个空格缩进
        tabWidth: 2,
        // 不使用缩进符，而使用空格
        useTabs: false,
        // 行尾需要有分号
        semi: true,
        // 使用单引号
        singleQuote: true,
        // 对象的 key 仅在必要时用引号
        quoteProps: 'as-needed',
        // jsx 不使用单引号，而使用双引号
        jsxSingleQuote: false,
        // 末尾不需要逗号
        trailingComma: 'none',
        // 大括号内的首尾需要空格
        bracketSpacing: true,
        // jsx 标签的反尖括号需要换行
        jsxBracketSameLine: false,
        // 箭头函数，只有一个参数的时候，也需要括号
        arrowParens: 'always',
        // 每个文件格式化的范围是文件的全部内容
        rangeStart: 0,
        rangeEnd: Infinity,
        // 不需要写文件开头的 @prettier
        requirePragma: false,
        // 不需要自动在文件开头插入 @prettier
        insertPragma: false,
        // 使用默认的折行标准
        proseWrap: 'preserve',
        // 根据显示样式决定 html 要不要折行
        htmlWhitespaceSensitivity: 'css',
        // 换行符使用 lf
        endOfLine: 'lf'
      }
    ]
  },
  // ignorePatterns: ["src/**/*.ts"],
};
