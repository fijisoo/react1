import * as React from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class AddUserForm extends React.Component {
    render() {
        const formLayout = 'horizontal';
        const formItemLayout = formLayout === 'horizontal' ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 20 },
        } : null;
        const buttonItemLayout = formLayout === 'horizontal' ? {
            wrapperCol: { span: 14 },
        } : null;
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 py-5 mx-auto">
                            <section className="section-form">
                                <Form layout={formLayout}>
                                    <FormItem
                                        label="Name"
                                        {...formItemLayout}
                                    >
                                        <Input placeholder="Type user name" />
                                    </FormItem>
                                    <FormItem
                                        label="Surname"
                                        {...formItemLayout}
                                    >
                                        <Input placeholder="Type user surname" />
                                    </FormItem>
                                    <FormItem
                                        label="Location"
                                        {...formItemLayout}
                                    >
                                        <Input placeholder="Type user location" />
                                    </FormItem>
                                    <FormItem {...buttonItemLayout}>
                                        <Button type="primary">Submit</Button>
                                    </FormItem>
                                </Form>
                            </section>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AddUserForm;