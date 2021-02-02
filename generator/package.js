module.exports = (name) => {
    const template = `
    {
        "name": "${name}",
        "version": "1.0.0",
        "private": true,
        "description": "x",
        "templateInfo": {
          "name": "taro-ui",
          "typescript": false,
          "css": "sass"
        },
        "scripts": {
          "build:weapp": "taro build --type weapp",
          "build:swan": "taro build --type swan",
          "build:alipay": "taro build --type alipay",
          "build:tt": "taro build --type tt",
          "build:h5": "taro build --type h5",
          "build:rn": "taro build --type rn",
          "build:qq": "taro build --type qq",
          "build:jd": "taro build --type jd",
          "build:quickapp": "taro build --type quickapp",
          "dev:weapp": "npm run build:weapp -- --watch",
          "dev:swan": "npm run build:swan -- --watch",
          "dev:alipay": "npm run build:alipay -- --watch",
          "dev:tt": "npm run build:tt -- --watch",
          "dev:h5": "npm run build:h5 -- --watch",
          "dev:rn": "npm run build:rn -- --watch",
          "dev:qq": "npm run build:qq -- --watch",
          "dev:jd": "npm run build:jd -- --watch",
          "dev:quickapp": "npm run build:quickapp -- --watch"
        },
        "browserslist": [
          "last 3 versions",
          "Android >= 4.1",
          "ios >= 8"
        ],
        "author": "",
        "dependencies": {
          "@babel/runtime": "^7.7.7",
          "@tarojs/cli": "3.0.14",
          "@tarojs/components": "3.0.14",
          "@tarojs/react": "3.0.14",
          "@tarojs/runtime": "3.0.14",
          "@tarojs/taro": "3.0.14",
          "accounting": "^0.4.1",
          "go-sha256": "^0.0.1",
          "lodash": "4.17.15",
          "qqmap-wx-jssdk": "^1.0.0",
          "qs": "^6.9.4",
          "query-string": "^6.13.6",
          "react": "^16.10.0",
          "react-dom": "^16.10.0",
          "storeon": "^3.0.4",
          "stylelint": "^13.7.2",
          "stylelint-config-standard": "^20.0.0",
          "stylelint-scss": "^3.18.0",
          "taro-ui": "^3.0.0-alpha.3"
        },
        "devDependencies": {
          "@babel/core": "^7.8.0",
          "@tarojs/mini-runner": "3.0.14",
          "@tarojs/webpack-runner": "3.0.14",
          "@types/react": "^16.0.0",
          "@types/webpack-env": "^1.13.6",
          "babel-preset-taro": "3.0.14",
          "eslint": "^6.8.0",
          "eslint-config-taro": "3.0.14",
          "eslint-plugin-import": "^2.12.0",
          "eslint-plugin-react": "^7.8.2",
          "eslint-plugin-react-hooks": "^1.6.1"
        }
      }
    `
return {template,dir:'',fileName:'package.json'}
}