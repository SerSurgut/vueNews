import mutation from "../mutation";

const {SET_NEWS, SET_LIVE_NEWS, SET_POLITIC_NEWS, SET_INCINDENT, SET_PUBLIC} = mutation;

const state = {
  newsList: [],
  politicsNews: [],
  liveNews: [],
  publicNews: [],
  incidentNews: []
};
const getters = {
  getNewsList: state => state.newsList,
  getNewsPolitic: state => state.politicsNews,
  getNewsLive: state => state.liveNews,
  getNewsPublic: state => state.publicNews,
  getNewsIncident: state => state.incidentNews,
  getThemes: state => {
    const arrString = state.newsList.map(el => {
      return JSON.stringify({cat: el.cat, cat_id: el.cat_id});
    });
    return JSON.parse(new Set(arrString));
  }
};
const actions = {
  async fetchNewsList({commit}) {
    const {news} = await fetch("http://data.24smi.net/informer?object=15639&output=json&num=100")
      .then(res => res.json())
      .then(news => news);
    commit(SET_NEWS, {key: "newsList", value: news});
    const publicNews = news.filter(item => item.cat == "Общество");
    commit(SET_NEWS, {key: "publicNews", value: publicNews});
    const incidentNews = news.filter(item => item.cat == "Происшествия");
    commit(SET_NEWS, {key: "incidentNews", value: incidentNews});
    const liveNews = news.filter(item => item.cat == "Жизнь");
    commit(SET_NEWS, {key: "liveNews", value: liveNews});
    const politicsNews = news.filter(item => item.cat == "Политика");
    commit(SET_NEWS, {key: "politicsNews", value: politicsNews});
  }
};
const mutations = {
  [SET_NEWS](state, {key, value}) {
    state[key] = value;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
