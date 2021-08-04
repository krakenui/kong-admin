import { LAYOUT_TYPE, NAV_STYLE, SWITCH_LANGUAGE, TOGGLE_COLLAPSED_NAV, WINDOW_WIDTH } from '../ActionTypes';

export function toggleCollapsedSideNav(navCollapsed: boolean) {
  return { type: TOGGLE_COLLAPSED_NAV, navCollapsed };
}

export function updateWindowWidth(width: number) {
  return (dispatch: any) => {
    dispatch({ type: WINDOW_WIDTH, width });
  };
}

export function onNavStyleChange(navStyle: any) {
  return (dispatch: any) => {
    dispatch({ type: NAV_STYLE, navStyle });
  };
}

export function onLayoutTypeChange(layoutType: any) {
  return (dispatch: any) => {
    dispatch({ type: LAYOUT_TYPE, layoutType });
  };
}

export function switchLanguage(locale: any) {
  return (dispatch: any) => {
    dispatch({
      type: SWITCH_LANGUAGE,
      payload: locale,
    });
  };
}
