export const storageController = {
  setLocal(name: string, dados: Object) {
    const setElement = `__${window.btoa(name)}`;
    const output = window.btoa(
      window.encodeURIComponent(JSON.stringify({ data: dados }))
    );
    localStorage.setItem(setElement, output);
  },
  getLocal(name: string) {
    const getElement = `__${window.btoa(name)}`;
    if (getElement in localStorage) {
      return JSON.parse(
        window.decodeURIComponent(
          window.atob(localStorage.getItem(getElement)!)
        )
      ).data;
    }
    return false;
  },
};
