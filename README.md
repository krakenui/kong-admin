# Kong React Admin Template

Key goals:

- ReactJs + Typescript
- Ant design components + Ant design icons
- Redux for React + Redux thunk
- RxJs
- Axios
- React hook + Rxjs for React hook
- LESS style with `lessc`

## Quick start develop

- Prerequisite:

  - NodeJs 10 or above
  - Yarn latest

- Install depedencies

  ```bash
    yarn
  ```

- Start dev server:

  - Using mock json server:

    ```bash
        yarn dev
    ```

  - Or without mock server:

    ```bash
        yarn start
    ```

## Customize configurations

- Enviroment matching with your stage, refer [official documents](https://create-react-app.dev/docs/adding-custom-environment-variables/).

- Development proxy, default API proxy pass though for [http://localhost:5000](http://localhost:5000). Update the development proxy at `package.json`. See more details from [official documents](https://create-react-app.dev/docs/proxying-api-requests-in-development).

- Quick implement Front-end with mock json server. Update to `mock/db.json`. See more details from [official documents](https://github.com/typicode/json-server#getting-started).

## Multiple languages

Because [i18next is too big](https://www.i18next.com/overview/comparison-to-others#i-18-next-is-to-big) and it's must a wrapper for ReactJs.

So We use a general internationalization library for ReactJs (pure ReactJs). It's `react-intl` from [`formatjs`](https://formatjs.io/)(origin from Yahoo).

Before using that should be read [official documents](https://formatjs.io/docs/getting-started/application-workflow).

- Update lang messages into `locale/{YOUR_LANG}/*.json`

- Display this message with

  ```javascript
  import IntlMessages from 'components/IntlMessages';

  <IntlMessages id="{MESSAGE_KEY}" />;
  ```

- Using utils format functions:
  - FormattedDate
  - FormattedTime
  - FormattedNumber
  - FormattedList
  - FormattedDisplayName
  - FormattedDateParts
  - FormattedTimeParts
  - FormattedDateTimeRange
    ...
    See more from [official public interface](https://github.com/formatjs/formatjs/blob/main/packages/react-intl/index.ts)
