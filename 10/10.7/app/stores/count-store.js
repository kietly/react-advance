import constants from '../constants/app-constants'
import dispatcher from '../dispatcher/dispatcher'
import {EventEmitter} from 'events'

let _count = 0

function getCount() {
    return _count
}

function setCount() {
    _count = _count + 1
}

let TodoStore = Object.assign({}, EventEmitter.prototype, {
    getCount: getCount,

    emitChange: function() {
        this.emit('CHANGE_EVENT')
    },

    addChangeListener: function(callback) {
        this.on('CHANGE_EVENT', callback)
    },

    removeChangeListener: function(callback) {
        this.removeChangeListener('CHANGE_EVENT',callback)
    }
})
export default TodoStore

//TODO register with the dispatcher
dispatcher.register(action => {
    console.log(action)
    switch(action.actionType) {
        case 'INCREMENT':
            incrementCount()
            TodoStore.emitChange()
            break;
    }
})