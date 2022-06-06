import React, {useState} from 'react';
import {Drawer, Form, Input} from "antd";
import {useSelector} from "react-redux";

const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 8},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
    },
};

const ProfileForm = ({show, close}) => {
    const [form] = Form.useForm();
    const profileData = useSelector(state => state.profiles.itemDetail)

    return (
        <>
            <Drawer title="Basic Drawer" placement="right" onClose={close} visible={show}>

            </Drawer>
        </>
    );
};

export default ProfileForm;
