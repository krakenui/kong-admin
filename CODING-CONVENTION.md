# Coding convetion definitions

- Typescript file follow standard definition from [Google](https://google.github.io/styleguide/tsguide.html).

- RxJs coding convention:

  - Naming conventions for observables
    Because Angular applications are mostly written in TypeScript, you will typically know when a variable is an observable. Although the Angular framework does not enforce a naming convention for observables, you will often see observables named with a trailing “$” sign.

    This can be useful when scanning through code and looking for observable values. Also, if you want a property to store the most recent value from an observable, it can be convenient to use the same name with or without the “$”.

    Ex:

    ```javascript

        stopwatchValue$: Observable<number>;

        start() {
            this.stopwatchValue$.subscribe(num =>
                this.stopwatchValue = num
            );
        }
    ```

- Styles convention:

  - Using mixins first
  - Using variables for color, not hardset
  - Reponsive need using variable with from antd, [read more](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)
  - Follow standard definition from [Google](https://google.github.io/styleguide/htmlcssguide.html)

- Refer standard definition for JSX from [airBnb](https://github.com/airbnb/javascript/tree/master/react) for ReactJs codes.
