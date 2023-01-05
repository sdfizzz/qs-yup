# qs-yup

Example of using [yup](https://www.npmjs.com/package/yup) schema validation with query string parameters ([qs](https://github.com/ljharb/qs)). 
Preview page build on React+TypeScript with webpack.

https://sdfizzz.github.io/qs-yup/

Solved issues:
* Prevent errors after manually edit params, if schema failed – used default params
* Validation date params by [dayjs](https://www.npmjs.com/package/dayjs)
* Array serialization with qs `arrayFormat: 'comma'` have an [issue](https://github.com/ljharb/qs/issues/315), parsing array with single element returns string instead of array. This serializing method is more preferable because make shortest version.
* Validation enums
* Validation objects and default value ([pagination](https://github.com/sdfizzz/qs-yup/blob/main/src/components/ControlsPanel/components/PaginationControl.tsx))
* Project includes base settings for webpack, babel, eslint, less.
