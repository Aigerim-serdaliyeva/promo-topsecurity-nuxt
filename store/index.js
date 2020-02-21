export const state = () => ({
    workAnimation: true
});

export const getters = {
    workAnimationStatus(state) {
        return state.workAnimation;
    }
};

export const mutations = {
    completeWorkAnimation(state) {
        state.workAnimation = true;
    }
};
