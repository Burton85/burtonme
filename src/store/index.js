import { createStore } from 'vuex';
import dataGetter from '../js/dataGetter.js';

export default createStore({
    state: {
        projectList: [{ name: 'nodata' }, { name: 'nodata' }, { name: 'nodata' }],
        noteList: [{ name: 'nodata' }, { name: 'nodata' }, { name: 'nodata' }],
        photoList: [{ name: 'nodata' }, { name: 'nodata' }, { name: 'nodata' }],
    },
    mutations: {
        project(state, result) {
            state.projectList = result.checklists;
        },
        note(state, result) {
            state.noteList = result.checklists;
        },
        photo(state, result) {
            state.photoList = result.checklists;
        },
    },
    actions: {
        async getTrelloJson(context, { name, url }) {
            const result = await dataGetter.getData(url);
            context.commit(name, result);
        },
    },
    getters: {
        getProjectList(state) {
            return state.projectList;
        },
        getNoteList(state) {
            return state.noteList;
        },
        getPhotoList(state) {
            return state.photoList;
        },
    },
});
