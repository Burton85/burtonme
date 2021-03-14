import { createStore } from 'vuex';
import dataGetter from '../js/dataGetter.js';

export default createStore({
    state: {
        projectList: { name: 'nodata', checkItems: [{ name: 'nodata' }, { name: 'nodata' }, { name: 'nodata' }] },
        noteList: { name: 'nodata', checkItems: [{ name: 'nodata' }, { name: 'nodata' }, { name: 'nodata' }] },
        photoList: { name: 'nodata', checkItems: [{ name: 'nodata' }, { name: 'nodata' }, { name: 'nodata' }] },
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
            console.log('1', state.projectList);
            return state.projectList;
        },
        getNoteList(state) {
            console.log('2', state.noteList);

            return state.noteList;
        },
        getPhotoList(state) {
            console.log('3', state.photoList);

            return state.photoList;
        },
    },
});
