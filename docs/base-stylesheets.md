# Base stylesheet and mixins for all pages

## Responsive

- Screen sizes: based on Ant design screen size.

- Grid system official documents. [https://ant.design/components/grid/](https://ant.design/components/grid/).

- [Global Ant Design variables for stylesheets.](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)

## Mixins

_Prefix base class with `kdr-` (Kongd React - kdr)_

### Margin - padding classess

- Width ranges:

  - 0 -> 0
  - 1 -> 0.25rem
  - 2 -> 0.5rem
  - 3 -> 1rem
  - 4 -> 1.5rem
  - 5 -> 3rem

- Margin: `m[t/r/b/l]-[?sm/md/lg/xl/xxl]-[0-5]` (syntax the same with bootstrap)
  - `m[t/r/b/l]`: position with top/right/bottom/left. Ex: `<div className="kdr-mt-1"></div>`: margin top 0.25rem.
  - `[?sm/md/lg/xl/xxl]`: screen size based on Ant design screen size, ex: `kdr-mt-sm-1` is margin-top set to 0.25rem for `sm` screen. Default screen size is empty that apply for all screen sizes, ex: `kdr-mt-1`.
  - `[0-5]`: width sizes
- Padding: `p[t/r/b/l]-[sm/md/lg/xl/xxl]-[0-5]` (syntax the same with bootstrap)
- `p[t/r/b/l]`: position with top/right/bottom/left. Ex: `<div className="kdr-pt-2"></div>`: padding top 0.5rem.
- `[?sm/md/lg/xl/xxl]`: screen size based on Ant design screen size, ex: `kdr-pt-sm-1` is padding-top set to 0.25rem for `sm` screen. Default screen size is empty that apply for all screen sizes, ex: `kdr-pt-1`.
- `[0-5]`: width sizes

### Text styles classes

- Transform classess: `text-[lowercase/uppercase/capitalize]`, ex: `kdr-text-lowercase`.

- Font weight: `font-weight-[light/normal/medium/semi-bold/bold/heavy]`, ex: `kdr-font-weight-bold`.

  - Width ranges:
    - `light` -> 300
    - `normal` -> 400
    - `medium` -> 500
    - `semi-bold` -> 600
    - `bold` -> 700
    - `heavy` -> 900

- Text align: `text-[justify/left/right/center]`, ex: `kdr-text-center`.

- Text truncate: `kdr-text-truncate`.

- Letter spacing: `letter-spacing-[base/lg/xl]`, ex: `kdr-letter-spacing-lg`.
  - Width ranges:
    - `base` -> 3px
    - `lg` -> 6px
    - `xl` -> 8px

### Flexbox classes

- Display: `d-[flex/none/inline-block/block/inline-flex]`, ex: `kdr-d-flex` -> `display: flex`.

- Flex have many classes, refer below defines:

  ```css
  .kdr-flex-row {
    .flex-display(flex, row, wrap) !important;
  }

  .kdr-flex-column {
    .flex-display(flex, column, nowrap) !important;
  }

  .kdr-flex-nowrap {
    flex-wrap: nowrap !important;
  }

  .kdr-flex-row-reverse {
    flex-direction: row-reverse !important;
  }

  .kdr-flex-column-reverse {
    flex-direction: column-reverse !important;
  }

  .kdr-justify-content-start {
    .justify-content(flex-start) !important;
  }

  .kdr-justify-content-end {
    .justify-content(flex-end) !important;
  }

  .kdr-justify-content-center {
    .justify-content(center) !important;
  }

  .kdr-justify-content-between {
    .justify-content(space-between) !important;
  }

  .kdr-justify-content-around {
    .justify-content(space-around) !important;
  }

  .kdr-align-items-start {
    .align-items(flex-start) !important;
  }

  .kdr-align-items-end {
    .align-items(flex-end) !important;
  }

  .kdr-align-items-center {
    .align-items(center) !important;
  }

  .kdr-align-items-stretch {
    .align-items(stretch) !important;
  }

  .kdr-align-content-start {
    .align-content(flex-start) !important;
  }

  .kdr-align-content-end {
    .align-content(flex-end) !important;
  }

  .kdr-align-content-center {
    .align-content(center) !important;
  }

  .kdr-align-content-between {
    .align-content(space-between) !important;
  }

  .kdr-align-content-around {
    .align-content(space-around) !important;
  }

  .kdr-align-content-stretch {
    .align-content(stretch) !important;
  }

  .kdr-align-self-auto {
    .align-self(auto) !important;
  }

  .kdr-align-self-start {
    .align-self(flex-start) !important;
  }

  .kdr-align-self-end {
    .align-self(flex-end) !important;
  }

  .kdr-align-self-center {
    .align-self(center) !important;
  }

  .kdr-align-self-baseline {
    .align-self(baseline) !important;
  }

  .kdr-align-self-stretch {
    .align-self(stretch) !important;
  }

  .kdr-order-first {
    -ms-flex-order: -1;
    order: -1;
  }

  .kdr-order-1 {
    -ms-flex-order: 1;
    order: 1;
  }

  .kdr-order-2 {
    -ms-flex-order: 2;
    order: 2;
  }

  .kdr-order-3 {
    -ms-flex-order: 3;
    order: 3;
  }

  .kdr-order-4 {
    -ms-flex-order: 4;
    order: 4;
  }

  .kdr-order-5 {
    -ms-flex-order: 5;
    order: 5;
  }

  .kdr-order-6 {
    -ms-flex-order: 6;
    order: 6;
  }

  .kdr-order-7 {
    -ms-flex-order: 7;
    order: 7;
  }

  .kdr-order-8 {
    -ms-flex-order: 8;
    order: 8;
  }

  .kdr-order-9 {
    -ms-flex-order: 9;
    order: 9;
  }

  .kdr-order-10 {
    -ms-flex-order: 10;
    order: 10;
  }

  .kdr-order-11 {
    -ms-flex-order: 11;
    order: 11;
  }

  .kdr-order-12 {
    -ms-flex-order: 12;
    order: 12;
  }

  .kdr-offset-1 {
    margin-left: 8.333333%;
  }

  .kdr-offset-2 {
    margin-left: 16.666667%;
  }

  .kdr-offset-3 {
    margin-left: 25%;
  }

  .kdr-offset-4 {
    margin-left: 33.333333%;
  }

  .kdr-offset-5 {
    margin-left: 41.666667%;
  }

  .kdr-offset-6 {
    margin-left: 50%;
  }

  .kdr-offset-7 {
    margin-left: 58.333333%;
  }

  .kdr-offset-8 {
    margin-left: 66.666667%;
  }

  .kdr-offset-9 {
    margin-left: 75%;
  }

  .kdr-offset-10 {
    margin-left: 83.333333%;
  }

  .kdr-offset-11 {
    margin-left: 91.666667%;
  }

  @media screen and (min-width: @screen-sm-min) {
    .kdr-d-sm-none {
      display: none !important;
    }

    .kdr-d-sm-inline-block {
      display: inline-block !important;
    }

    .kdr-d-sm-block {
      display: block !important;
    }

    .kdr-d-sm-flex {
      display: flex !important;
    }

    .kdr-d-sm-inline-flex {
      display: inline-flex !important;
    }

    .kdr-flex-sm-row {
      flex-direction: row !important;
    }

    .kdr-flex-sm-column {
      flex-direction: column !important;
    }

    .kdr-flex-sm-row-reverse {
      flex-direction: row-reverse !important;
    }

    .kdr-flex-sm-column-reverse {
      flex-direction: column-reverse !important;
    }

    .kdr-flex-sm-wrap {
      flex-wrap: wrap !important;
    }

    .kdr-flex-sm-nowrap {
      flex-wrap: nowrap !important;
    }

    .kdr-flex-sm-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }

    .kdr-justify-content-sm-start {
      justify-content: flex-start !important;
    }

    .kdr-justify-content-sm-end {
      justify-content: flex-end !important;
    }

    .kdr-justify-content-sm-center {
      justify-content: center !important;
    }

    .kdr-justify-content-sm-between {
      justify-content: space-between !important;
    }

    .kdr-justify-content-sm-around {
      justify-content: space-around !important;
    }

    .kdr-align-items-sm-start {
      align-items: flex-start !important;
    }

    .kdr-align-items-sm-end {
      align-items: flex-end !important;
    }

    .kdr-align-items-sm-center {
      align-items: center !important;
    }

    .kdr-align-items-sm-baseline {
      align-items: baseline !important;
    }

    .kdr-align-items-sm-stretch {
      align-items: stretch !important;
    }

    .kdr-align-content-sm-start {
      align-content: flex-start !important;
    }

    .kdr-align-content-sm-end {
      align-content: flex-end !important;
    }

    .kdr-align-content-sm-center {
      align-content: center !important;
    }

    .kdr-align-content-sm-between {
      align-content: space-between !important;
    }

    .kdr-align-content-sm-around {
      align-content: space-around !important;
    }

    .kdr-align-content-sm-stretch {
      align-content: stretch !important;
    }

    .kdr-align-self-sm-auto {
      align-self: auto !important;
    }

    .kdr-align-self-sm-start {
      align-self: flex-start !important;
    }

    .kdr-align-self-sm-end {
      align-self: flex-end !important;
    }

    .kdr-align-self-sm-center {
      align-self: center !important;
    }

    .kdr-align-self-sm-baseline {
      align-self: baseline !important;
    }

    .kdr-align-self-sm-stretch {
      align-self: stretch !important;
    }

    .kdr-order-sm-first {
      -ms-flex-order: -1;
      order: -1;
    }

    .kdr-order-sm-1 {
      -ms-flex-order: 1;
      order: 1;
    }

    .kdr-order-sm-2 {
      -ms-flex-order: 2;
      order: 2;
    }

    .kdr-order-sm-3 {
      -ms-flex-order: 3;
      order: 3;
    }

    .kdr-order-sm-4 {
      -ms-flex-order: 4;
      order: 4;
    }

    .kdr-order-sm-5 {
      -ms-flex-order: 5;
      order: 5;
    }

    .kdr-order-sm-6 {
      -ms-flex-order: 6;
      order: 6;
    }

    .kdr-order-sm-7 {
      -ms-flex-order: 7;
      order: 7;
    }

    .kdr-order-sm-8 {
      -ms-flex-order: 8;
      order: 8;
    }

    .kdr-order-sm-9 {
      -ms-flex-order: 9;
      order: 9;
    }

    .kdr-order-sm-10 {
      -ms-flex-order: 10;
      order: 10;
    }

    .kdr-order-sm-11 {
      -ms-flex-order: 11;
      order: 11;
    }

    .kdr-order-sm-12 {
      -ms-flex-order: 12;
      order: 12;
    }

    .kdr-offset-sm-0 {
      margin-left: 0;
    }

    .kdr-offset-sm-1 {
      margin-left: 8.333333%;
    }

    .kdr-offset-sm-2 {
      margin-left: 16.666667%;
    }

    .kdr-offset-sm-3 {
      margin-left: 25%;
    }

    .kdr-offset-sm-4 {
      margin-left: 33.333333%;
    }

    .kdr-offset-sm-5 {
      margin-left: 41.666667%;
    }

    .kdr-offset-sm-6 {
      margin-left: 50%;
    }

    .kdr-offset-sm-7 {
      margin-left: 58.333333%;
    }

    .kdr-offset-sm-8 {
      margin-left: 66.666667%;
    }

    .kdr-offset-sm-9 {
      margin-left: 75%;
    }

    .kdr-offset-sm-10 {
      margin-left: 83.333333%;
    }

    .kdr-offset-sm-11 {
      margin-left: 91.666667%;
    }
  }

  @media screen and (min-width: @screen-md-min) {
    .kdr-d-md-none {
      display: none !important;
    }

    .kdr-d-md-inline-block {
      display: inline-block !important;
    }

    .kdr-d-md-block {
      display: block !important;
    }

    .kdr-d-md-flex {
      display: flex !important;
    }

    .kdr-d-md-inline-flex {
      display: inline-flex !important;
    }

    .kdr-flex-md-row {
      flex-direction: row !important;
    }

    .kdr-flex-md-column {
      flex-direction: column !important;
    }

    .kdr-flex-md-row-reverse {
      flex-direction: row-reverse !important;
    }

    .kdr-flex-md-column-reverse {
      flex-direction: column-reverse !important;
    }

    .kdr-flex-md-wrap {
      flex-wrap: wrap !important;
    }

    .kdr-flex-md-nowrap {
      flex-wrap: nowrap !important;
    }

    .kdr-flex-md-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }

    .kdr-justify-content-md-start {
      justify-content: flex-start !important;
    }

    .kdr-justify-content-md-end {
      justify-content: flex-end !important;
    }

    .kdr-justify-content-md-center {
      justify-content: center !important;
    }

    .kdr-justify-content-md-between {
      justify-content: space-between !important;
    }

    .kdr-justify-content-md-around {
      justify-content: space-around !important;
    }

    .kdr-align-items-md-start {
      align-items: flex-start !important;
    }

    .kdr-align-items-md-end {
      align-items: flex-end !important;
    }

    .kdr-align-items-md-center {
      align-items: center !important;
    }

    .kdr-align-items-md-baseline {
      align-items: baseline !important;
    }

    .kdr-align-items-md-stretch {
      align-items: stretch !important;
    }

    .kdr-align-content-md-start {
      align-content: flex-start !important;
    }

    .kdr-align-content-md-end {
      align-content: flex-end !important;
    }

    .kdr-align-content-md-center {
      align-content: center !important;
    }

    .kdr-align-content-md-between {
      align-content: space-between !important;
    }

    .kdr-align-content-md-around {
      align-content: space-around !important;
    }

    .kdr-align-content-md-stretch {
      align-content: stretch !important;
    }

    .kdr-align-self-md-auto {
      align-self: auto !important;
    }

    .kdr-align-self-md-start {
      align-self: flex-start !important;
    }

    .kdr-align-self-md-end {
      align-self: flex-end !important;
    }

    .kdr-align-self-md-center {
      align-self: center !important;
    }

    .kdr-align-self-md-baseline {
      align-self: baseline !important;
    }

    .kdr-align-self-md-stretch {
      align-self: stretch !important;
    }

    .kdr-order-md-first {
      -ms-flex-order: -1;
      order: -1;
    }

    .kdr-order-md-1 {
      -ms-flex-order: 1;
      order: 1;
    }

    .kdr-order-md-2 {
      -ms-flex-order: 2;
      order: 2;
    }

    .kdr-order-md-3 {
      -ms-flex-order: 3;
      order: 3;
    }

    .kdr-order-md-4 {
      -ms-flex-order: 4;
      order: 4;
    }

    .kdr-order-md-5 {
      -ms-flex-order: 5;
      order: 5;
    }

    .kdr-order-md-6 {
      -ms-flex-order: 6;
      order: 6;
    }

    .kdr-order-md-7 {
      -ms-flex-order: 7;
      order: 7;
    }

    .kdr-order-md-8 {
      -ms-flex-order: 8;
      order: 8;
    }

    .kdr-order-md-9 {
      -ms-flex-order: 9;
      order: 9;
    }

    .kdr-order-md-10 {
      -ms-flex-order: 10;
      order: 10;
    }

    .kdr-order-md-11 {
      -ms-flex-order: 11;
      order: 11;
    }

    .kdr-order-md-12 {
      -ms-flex-order: 12;
      order: 12;
    }

    .kdr-offset-md-0 {
      margin-left: 0;
    }

    .kdr-offset-md-1 {
      margin-left: 8.333333%;
    }

    .kdr-offset-md-2 {
      margin-left: 16.666667%;
    }

    .kdr-offset-md-3 {
      margin-left: 25%;
    }

    .kdr-offset-md-4 {
      margin-left: 33.333333%;
    }

    .kdr-offset-md-5 {
      margin-left: 41.666667%;
    }

    .kdr-offset-md-6 {
      margin-left: 50%;
    }

    .kdr-offset-md-7 {
      margin-left: 58.333333%;
    }

    .kdr-offset-md-8 {
      margin-left: 66.666667%;
    }

    .kdr-offset-md-9 {
      margin-left: 75%;
    }

    .kdr-offset-md-10 {
      margin-left: 83.333333%;
    }

    .kdr-offset-md-11 {
      margin-left: 91.666667%;
    }
  }

  @media screen and (min-width: @screen-lg-min) {
    .kdr-d-lg-none {
      display: none !important;
    }

    .kdr-d-lg-inline-block {
      display: inline-block !important;
    }

    .kdr-d-lg-block {
      display: block !important;
    }

    .kdr-d-lg-flex {
      display: flex !important;
    }

    .kdr-d-lg-inline-flex {
      display: inline-flex !important;
    }

    .kdr-flex-lg-row {
      flex-direction: row !important;
    }

    .kdr-flex-lg-column {
      flex-direction: column !important;
    }

    .kdr-flex-lg-row-reverse {
      flex-direction: row-reverse !important;
    }

    .kdr-flex-lg-column-reverse {
      flex-direction: column-reverse !important;
    }

    .kdr-flex-lg-wrap {
      flex-wrap: wrap !important;
    }

    .kdr-flex-lg-nowrap {
      flex-wrap: nowrap !important;
    }

    .kdr-flex-lg-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }

    .kdr-justify-content-lg-start {
      justify-content: flex-start !important;
    }

    .kdr-justify-content-lg-end {
      justify-content: flex-end !important;
    }

    .kdr-justify-content-lg-center {
      justify-content: center !important;
    }

    .kdr-justify-content-lg-between {
      justify-content: space-between !important;
    }

    .kdr-justify-content-lg-around {
      justify-content: space-around !important;
    }

    .kdr-align-items-lg-start {
      align-items: flex-start !important;
    }

    .kdr-align-items-lg-end {
      align-items: flex-end !important;
    }

    .kdr-align-items-lg-center {
      align-items: center !important;
    }

    .kdr-align-items-lg-baseline {
      align-items: baseline !important;
    }

    .kdr-align-items-lg-stretch {
      align-items: stretch !important;
    }

    .kdr-align-content-lg-start {
      align-content: flex-start !important;
    }

    .kdr-align-content-lg-end {
      align-content: flex-end !important;
    }

    .kdr-align-content-lg-center {
      align-content: center !important;
    }

    .kdr-align-content-lg-between {
      align-content: space-between !important;
    }

    .kdr-align-content-lg-around {
      align-content: space-around !important;
    }

    .kdr-align-content-lg-stretch {
      align-content: stretch !important;
    }

    .kdr-align-self-lg-auto {
      align-self: auto !important;
    }

    .kdr-align-self-lg-start {
      align-self: flex-start !important;
    }

    .kdr-align-self-lg-end {
      align-self: flex-end !important;
    }

    .kdr-align-self-lg-center {
      align-self: center !important;
    }

    .kdr-align-self-lg-baseline {
      align-self: baseline !important;
    }

    .kdr-align-self-lg-stretch {
      align-self: stretch !important;
    }

    .kdr-order-lg-first {
      -ms-flex-order: -1;
      order: -1;
    }

    .kdr-order-lg-1 {
      -ms-flex-order: 1;
      order: 1;
    }

    .kdr-order-lg-2 {
      -ms-flex-order: 2;
      order: 2;
    }

    .kdr-order-lg-3 {
      -ms-flex-order: 3;
      order: 3;
    }

    .kdr-order-lg-4 {
      -ms-flex-order: 4;
      order: 4;
    }

    .kdr-order-lg-5 {
      -ms-flex-order: 5;
      order: 5;
    }

    .kdr-order-lg-6 {
      -ms-flex-order: 6;
      order: 6;
    }

    .kdr-order-lg-7 {
      -ms-flex-order: 7;
      order: 7;
    }

    .kdr-order-lg-8 {
      -ms-flex-order: 8;
      order: 8;
    }

    .kdr-order-lg-9 {
      -ms-flex-order: 9;
      order: 9;
    }

    .kdr-order-lg-10 {
      -ms-flex-order: 10;
      order: 10;
    }

    .kdr-order-lg-11 {
      -ms-flex-order: 11;
      order: 11;
    }

    .kdr-order-lg-12 {
      -ms-flex-order: 12;
      order: 12;
    }

    .kdr-offset-lg-0 {
      margin-left: 0;
    }

    .kdr-offset-lg-1 {
      margin-left: 8.333333%;
    }

    .kdr-offset-lg-2 {
      margin-left: 16.666667%;
    }

    .kdr-offset-lg-3 {
      margin-left: 25%;
    }

    .kdr-offset-lg-4 {
      margin-left: 33.333333%;
    }

    .kdr-offset-lg-5 {
      margin-left: 41.666667%;
    }

    .kdr-offset-lg-6 {
      margin-left: 50%;
    }

    .kdr-offset-lg-7 {
      margin-left: 58.333333%;
    }

    .kdr-offset-lg-8 {
      margin-left: 66.666667%;
    }

    .kdr-offset-lg-9 {
      margin-left: 75%;
    }

    .kdr-offset-lg-10 {
      margin-left: 83.333333%;
    }

    .kdr-offset-lg-11 {
      margin-left: 91.666667%;
    }
  }

  @media screen and (min-width: @screen-xl-min) {
    .kdr-d-xl-none {
      display: none !important;
    }

    .kdr-d-xl-inline-block {
      display: inline-block !important;
    }

    .kdr-d-xl-block {
      display: block !important;
    }

    .kdr-d-xl-flex {
      display: flex !important;
    }

    .kdr-d-xl-inline-flex {
      display: inline-flex !important;
    }

    .kdr-flex-xl-row {
      flex-direction: row !important;
    }

    .kdr-flex-xl-column {
      flex-direction: column !important;
    }

    .kdr-flex-xl-row-reverse {
      flex-direction: row-reverse !important;
    }

    .kdr-flex-xl-column-reverse {
      flex-direction: column-reverse !important;
    }

    .kdr-flex-xl-wrap {
      flex-wrap: wrap !important;
    }

    .kdr-flex-xl-nowrap {
      flex-wrap: nowrap !important;
    }

    .kdr-flex-xl-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }

    .kdr-justify-content-xl-start {
      justify-content: flex-start !important;
    }

    .kdr-justify-content-xl-end {
      justify-content: flex-end !important;
    }

    .kdr-justify-content-xl-center {
      justify-content: center !important;
    }

    .justify-content-xl-between {
      justify-content: space-between !important;
    }

    .kdr-justify-content-xl-around {
      justify-content: space-around !important;
    }

    .kdr-align-items-xl-start {
      align-items: flex-start !important;
    }

    .kdr-align-items-xl-end {
      align-items: flex-end !important;
    }

    .kdr-align-items-xl-center {
      align-items: center !important;
    }

    .kdr-align-items-xl-baseline {
      align-items: baseline !important;
    }

    .kdr-align-items-xl-stretch {
      align-items: stretch !important;
    }

    .kdr-align-content-xl-start {
      align-content: flex-start !important;
    }

    .kdr-align-content-xl-end {
      align-content: flex-end !important;
    }

    .kdr-align-content-xl-center {
      align-content: center !important;
    }

    .kdr-align-content-xl-between {
      align-content: space-between !important;
    }

    .kdr-align-content-xl-around {
      align-content: space-around !important;
    }

    .kdr-align-content-xl-stretch {
      align-content: stretch !important;
    }

    .kdr-align-self-xl-auto {
      align-self: auto !important;
    }

    .kdr-align-self-xl-start {
      align-self: flex-start !important;
    }

    .kdr-align-self-xl-end {
      align-self: flex-end !important;
    }

    .kdr-align-self-xl-center {
      align-self: center !important;
    }

    .kdr-align-self-xl-baseline {
      align-self: baseline !important;
    }

    .kdr-align-self-xl-stretch {
      align-self: stretch !important;
    }

    .kdr-order-xl-first {
      -ms-flex-order: -1;
      order: -1;
    }

    .kdr-order-xl-1 {
      -ms-flex-order: 1;
      order: 1;
    }

    .kdr-order-xl-2 {
      -ms-flex-order: 2;
      order: 2;
    }

    .kdr-order-xl-3 {
      -ms-flex-order: 3;
      order: 3;
    }

    .kdr-order-xl-4 {
      -ms-flex-order: 4;
      order: 4;
    }

    .kdr-order-xl-5 {
      -ms-flex-order: 5;
      order: 5;
    }

    .kdr-order-xl-6 {
      -ms-flex-order: 6;
      order: 6;
    }

    .kdr-order-xl-7 {
      -ms-flex-order: 7;
      order: 7;
    }

    .kdr-order-xl-8 {
      -ms-flex-order: 8;
      order: 8;
    }

    .kdr-order-xl-9 {
      -ms-flex-order: 9;
      order: 9;
    }

    .kdr-order-xl-10 {
      -ms-flex-order: 10;
      order: 10;
    }

    .kdr-order-xl-11 {
      -ms-flex-order: 11;
      order: 11;
    }

    .kdr-order-xl-12 {
      -ms-flex-order: 12;
      order: 12;
    }

    .kdr-offset-xl-0 {
      margin-left: 0;
    }

    .kdr-offset-xl-1 {
      margin-left: 8.333333%;
    }

    .kdr-offset-xl-2 {
      margin-left: 16.666667%;
    }

    .kdr-offset-xl-3 {
      margin-left: 25%;
    }

    .kdr-offset-xl-4 {
      margin-left: 33.333333%;
    }

    .kdr-offset-xl-5 {
      margin-left: 41.666667%;
    }

    .kdr-offset-xl-6 {
      margin-left: 50%;
    }

    .kdr-offset-xl-7 {
      margin-left: 58.333333%;
    }

    .kdr-offset-xl-8 {
      margin-left: 66.666667%;
    }

    .kdr-offset-xl-9 {
      margin-left: 75%;
    }

    .kdr-offset-xl-10 {
      margin-left: 83.333333%;
    }

    .kdr-offset-xl-11 {
      margin-left: 91.666667%;
    }
  }
  ```
