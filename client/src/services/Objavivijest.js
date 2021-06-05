import Api from "./Api";

export default {
  objaviVijest(vijest) {
    return Api().post("objavivijest", vijest);
  },
};
