import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';

const PostEdit = (props) => {
    return (
        <Edit title={'Edit Post'} {...props}>
            <SimpleForm>
                <TextInput source={'id'} disabled />
                <TextInput source={'body'} multiline />
                <DateInput label={'Published'} source={'publishedAt'} />
            </SimpleForm>
        </Edit>
    );
}

export default PostEdit;