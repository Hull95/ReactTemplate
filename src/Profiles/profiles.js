import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllProfiles, previewProfileData, removeProfileData} from "../action/profilesAction";
import {Breadcrumb, Card, Col, Row, Layout, Drawer} from "antd";
import {EditOutlined, EllipsisOutlined, SettingOutlined, EyeOutlined} from '@ant-design/icons';
import ProfileForm from "./profileDrawerForm";

const {Meta} = Card;
const {Header, Content, Footer} = Layout;

export const Profiles = () => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [profileInfo, setProfileInfo] = useState([]);
    const allProfiles = useSelector(state => state.profiles)

    useEffect(() => {
        dispatch(getAllProfiles())
    }, []);

    useEffect(() => {
        if (visible) {
            dispatch(previewProfileData(profileInfo));
        } else {
            dispatch(removeProfileData())
        }
    }, [visible])

    const showDrawer = (profileData) => {
        setVisible(true)
        setProfileInfo(profileData)
    }
    const onClose = () => {
        setVisible(false);
    };

    console.log(profileInfo)
    return (
        <>
            <Content className="site-layout">
                <div className="site-layout-background" style={{padding: 24, minHeight: 380}}>
                    <Row gutter={[16, 24]}>
                        {allProfiles.data?.map((item, key) => (
                            <Col className="gutter-row" xs={12} sm={6} md={6} lg={8} xl={6}>
                                <Card
                                    actions={[
                                        <EyeOutlined key="preview" onClick={() => showDrawer(item)}/>,
                                        <EditOutlined key="edit"/>,
                                    ]}
                                >
                                    <Meta
                                        title={`${item.first_name} ${item.last_name}`}
                                        description="This is the description"
                                    />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Content>
            <ProfileForm show={visible} close={onClose}/>
        </>
    );
};

