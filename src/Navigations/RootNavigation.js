var navigationRef = null;

export const setNavigationRef = ref => {
  navigationRef = ref;
};

export const navigate = (name, params) => {
  if (navigationRef?.isReady()) {
    navigationRef?.navigate(name, params);
  }
};

export const resetNavigation = name => {
  if (navigationRef?.isReady()) {
    navigationRef?.reset({
      index: 0,
      routes: [{name: name}],
    });
  }
};

export const canGoBack = () => {
  if (navigationRef?.isReady()) {
    return navigationRef.canGoBack();
  }
};

export const goBack = () => {
  if (navigationRef?.isReady()) {
    navigationRef?.goBack();
  }
};
