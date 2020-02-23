export const state = () => ({
    workAnimation: true,
    workOpenedSide: ''
});

export const getters = {
    workAnimationStatus(state) {
        return state.workAnimation;
    },
    workShownSide(state) {
        console.log(state.workOpenedSide);
        return state.workOpenedSide;
    }
};

export const mutations = {
    completeWorkAnimation(state) {
        state.workAnimation = true;
    },
    showWorkSide(state, payload) {
        state.workOpenedSide = payload;
        console.log(payload, state);
    }
};
