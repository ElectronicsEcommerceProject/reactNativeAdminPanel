import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import { addEditBannerStyles } from './banners.styles.screens';

const AddEditBannerScreen = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [isActive, setIsActive] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);

  const pickFile = () => {
    // Simulate file selection
    setSelectedFile({ name: 'selected-image.jpg' });
  };

  const onSubmit = (data) => {
    console.log({ ...data, isActive, file: selectedFile });
    navigation.goBack();
  };

  return (
    <View style={addEditBannerStyles.container}>
      <View style={addEditBannerStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ fontSize: 18, color: '#007AFF' }}>←</Text>
        </TouchableOpacity>
        <Text style={addEditBannerStyles.headerTitle}>Banner Management</Text>
      </View>
      
      <ScrollView style={addEditBannerStyles.scrollContainer}>
        <View style={addEditBannerStyles.formContainer}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>Add New Banner</Text>
          
          <View style={addEditBannerStyles.section}>
            <Text style={addEditBannerStyles.inputLabel}>Title</Text>
            <Controller
              control={control}
              name="title"
              rules={{ required: 'Title is required' }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={addEditBannerStyles.textInput}
                  placeholder="Enter Banner Title"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            {errors.title && <Text style={{ color: 'red' }}>{errors.title.message}</Text>}
            
            <Text style={addEditBannerStyles.inputLabel}>Button Text</Text>
            <Controller
              control={control}
              name="buttonText"
              rules={{ required: 'Button text is required' }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={addEditBannerStyles.textInput}
                  placeholder="Enter Button Text"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            {errors.buttonText && <Text style={{ color: 'red' }}>{errors.buttonText.message}</Text>}
            
            <Text style={addEditBannerStyles.inputLabel}>Description</Text>
            <Controller
              control={control}
              name="description"
              rules={{ required: 'Description is required' }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={addEditBannerStyles.textInput}
                  placeholder="Enter Banner Description"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            {errors.description && <Text style={{ color: 'red' }}>{errors.description.message}</Text>}
            
            <Text style={addEditBannerStyles.inputLabel}>Price</Text>
            <Controller
              control={control}
              name="price"
              rules={{ required: 'Price is required' }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={addEditBannerStyles.textInput}
                  placeholder="e.g., Starting ₹1,999"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            {errors.price && <Text style={{ color: 'red' }}>{errors.price.message}</Text>}
            
            <Text style={addEditBannerStyles.inputLabel}>Discount</Text>
            <Controller
              control={control}
              name="discount"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={addEditBannerStyles.textInput}
                  placeholder="e.g., Up to 40% off"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            
            <Text style={addEditBannerStyles.inputLabel}>Background Style</Text>
            <Controller
              control={control}
              name="backgroundStyle"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={addEditBannerStyles.textInput}
                  placeholder="Blue to Purple"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            
            <Text style={addEditBannerStyles.inputLabel}>Banner Image</Text>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
              <TouchableOpacity 
                style={{ backgroundColor: '#007AFF', padding: 10, borderRadius: 5, marginRight: 10 }}
                onPress={pickFile}
              >
                <Text style={{ color: 'white' }}>Choose File</Text>
              </TouchableOpacity>
              <Text style={{ alignSelf: 'center', color: '#666' }}>
                {selectedFile ? selectedFile.name : 'No File Chosen'}
              </Text>
            </View>
            
            <View style={addEditBannerStyles.switchContainer}>
              <Text style={addEditBannerStyles.switchLabel}>✓ Active</Text>
              <Switch
                value={isActive}
                onValueChange={setIsActive}
              />
            </View>
          </View>
          
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <TouchableOpacity 
              style={{ backgroundColor: '#007AFF', padding: 15, borderRadius: 5, flex: 1, marginRight: 10 }}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{ backgroundColor: '#ccc', padding: 15, borderRadius: 5, flex: 1 }}
              onPress={() => navigation.goBack()}
            >
              <Text style={{ color: '#333', textAlign: 'center' }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddEditBannerScreen;