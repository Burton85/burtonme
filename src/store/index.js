import { createStore } from 'vuex';
import dataGetter from '../js/dataGetter.js';

export default createStore({
    state: {
        projectList: [
            { name: 'projectList', checkItems: [{ name: 'nodata' }, { name: 'nodata' }, { name: 'nodata' }] },
        ],
        noteList: [{ name: 'noteList', checkItems: [{ name: 'nodata' }, { name: 'nodata' }, { name: 'nodata' }] }],
        photoList: [{ name: 'photoList', checkItems: [{ name: 'nodata' }, { name: 'nodata' }, { name: 'nodata' }] }],
        profileList: [{ name: 'profileList', checkItems: [{ name: 'this is state' }] }],
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
        profile(state, result) {
            state.profileList = result.checklists;
        },
    },
    actions: {
        async getTrelloJson(context, { name }) {
            let url;
            switch (name) {
                case 'profile':
                    url = 'https://trello.com/card/6050ab3aa208a214a60ec671/profile.json';
                    break;
                case 'project':
                    url = 'https://trello.com/card/6039ba08a42519571404ac57/works.json';
                    break;
                case 'note':
                    url = 'https://trello.com/card/604c450e91d264252a292a53/learning-note.json';
                    break;
                case 'photo':
                    url = 'https://trello.com/card/604cdbf30e33fd4ce668d982/photos.json';
                    break;
            }
            const result = await dataGetter.getData(url);
            console.log(result);
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
        getProfileList(state) {
            return state.profileList;
        },
    },
});
