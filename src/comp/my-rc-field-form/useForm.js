
// 定义状态管理库

import { useRef } from 'react'

class FormStore {
    constructor() {
        this.store = {}; // 状态值管理   name: value

        this.fieldEntities = [];


        this.callbacks = {};
    }


    setCallBacks = (callbacks) => {
        this.callbacks = {
            ...this.callbacks,
            ...callbacks
        };
    }


    registerFieldEntities = (entity) => {
        this.fieldEntities.push(entity);

        return () => {
            this.unregisterFieldEntities(entity);
        }
    }

    unregisterFieldEntities = (entity) => {
        this.fieldEntities = this.fieldEntities.filter(item => item!== entity);

        delete this.store[entity.props.name];
    }

    // get

    getFieldsValue = () => {
        return {
            ...this.store
        };
    }

    getFieldValue = (name) => {
        return this.store[name];
    }

    // set

    setFieldValue = (newStore) => {
        // 1、update store
        this.store = {
            ...this.store,
            ...newStore
        }
        console.log('this.store', this.store);
        // 2、update field
        this.fieldEntities.forEach(entity => {
            // 找到和当前对象 相关的实例，然后更新
            Object.keys(newStore).forEach(key => {
                if (key === entity.props.name) {
                    entity.onStoreChange();
                }
            });
        });
    }

    validate = () => {
        let err = [];

        // todo 校验
        
        return err;
    }

    submit = () => {
        console.log('submit');
        let err = this.validate()

        const { onFinish, onFinishFailed } = this.callbacks;

        if (err.length) {
            // 校验不通过
            onFinishFailed(err, this.getFieldsValue());
        } else {
            // 校验通过
            onFinish(this.getFieldsValue());
        }
    }

    getForm = () => {
        return {
            getFieldsValue: this.getFieldsValue,
            getFieldValue: this.getFieldValue,
            setFieldValue:　this.setFieldValue,
            registerFieldEntities: this.registerFieldEntities,
            submit: this.submit,
            setCallBacks: this.setCallBacks
        };
    }

}


export default function useForm() {
    // 存值，在组件卸载以前，都是同一个值（存在了fiber上）
    const formRef = useRef();
    if (!formRef.current) {
        const formStore = new FormStore();
        formRef.current = formStore.getForm();
    }
    return [formRef.current];
};
