import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Switch, Alert, Modal, Image, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { launchImageLibrary } from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';

import { addEditBannerStyles, bannerPreviewStyles } from './banners.styles.screens';

const AddEditBannerScreen = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors }, watch } = useForm();
  const [isActive, setIsActive] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  
  const formData = watch();

  const pickFile = () => {
    console.log('pickFile called');
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      console.log('Image picker response:', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error:', response.error);
        Alert.alert('Error', response.error);
      } else if (response.assets && response.assets.length > 0) {
        console.log('Image selected:', response.assets[0]);
        setSelectedFile(response.assets[0]);
      }
    });
  };

  const onSubmit = (data) => {
    console.log({ ...data, isActive, file: selectedFile });
    navigation.goBack();
  };

  const gradientOptions = [
    { label: 'Blue + Purple', value: 'Blue + Purple', colors: ['#667eea', '#764ba2'] },
    { label: 'Pink + Orange', value: 'Pink + Orange', colors: ['#f093fb', '#f5576c'] },
    { label: 'Green + Blue', value: 'Green + Blue', colors: ['#4facfe', '#00f2fe'] },
    { label: 'Orange + Red', value: 'Orange + Red', colors: ['#fa709a', '#fee140'] },
    { label: 'Purple + Pink', value: 'Purple + Pink', colors: ['#a8edea', '#fed6e3'] },
    { label: 'Blue + Teal', value: 'Blue + Teal', colors: ['#30cfd0', '#330867'] },
  ];

  const getGradientColors = (style) => {
    const gradient = gradientOptions.find(g => g.value === style);
    return gradient ? gradient.colors : ['#667eea', '#764ba2'];
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
                <View>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 15 }}>
                    {gradientOptions.map((option) => (
                      <TouchableOpacity
                        key={option.value}
                        onPress={() => onChange(option.value)}
                        style={[
                          bannerPreviewStyles.gradientOption,
                          { borderColor: value === option.value ? '#007AFF' : '#ddd' }
                        ]}
                      >
                        <LinearGradient
                          colors={option.colors}
                          style={bannerPreviewStyles.gradientOptionInner}
                          start={{x: 0, y: 0}}
                          end={{x: 1, y: 1}}
                        >
                          <Text style={bannerPreviewStyles.gradientOptionText}>
                            {option.label}
                          </Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              )}
            />
            
            <Text style={addEditBannerStyles.inputLabel}>Banner Image</Text>
            <View style={bannerPreviewStyles.filePickerContainer}>
              <TouchableOpacity 
                style={bannerPreviewStyles.filePickerButton}
                onPress={pickFile}
              >
                <Text style={bannerPreviewStyles.filePickerButtonText}>Choose File</Text>
              </TouchableOpacity>
              <Text style={bannerPreviewStyles.filePickerText}>
                {selectedFile ? selectedFile.fileName || 'Image Selected' : 'No File Chosen'}
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
          
          <View style={bannerPreviewStyles.actionButtonsContainer}>
            <TouchableOpacity 
              style={bannerPreviewStyles.previewActionButton}
              onPress={() => {
                console.log('Preview button pressed');
                setShowPreview(true);
              }}
            >
              <Text style={bannerPreviewStyles.actionButtonText}>Preview Banner</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={bannerPreviewStyles.saveActionButton}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={bannerPreviewStyles.actionButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={bannerPreviewStyles.cancelActionButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={bannerPreviewStyles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Modal
        visible={showPreview}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowPreview(false)}
      >
        <View style={bannerPreviewStyles.modalOverlay}>
          <View style={bannerPreviewStyles.modalContainer}>
            <Text style={bannerPreviewStyles.modalTitle}>Banner Preview</Text>
            
            <LinearGradient
              colors={getGradientColors(formData.backgroundStyle)}
              style={bannerPreviewStyles.previewBanner}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
            >
              {formData.discount && (
                <View style={bannerPreviewStyles.discountBadgePreview}>
                  <Text style={bannerPreviewStyles.discountTextPreview}>
                    {formData.discount}
                  </Text>
                </View>
              )}
              
              <View style={[
                bannerPreviewStyles.previewTextContainer,
                { paddingTop: formData.discount ? 25 : 0 }
              ]}>
                <Text style={bannerPreviewStyles.previewTitle}>
                  {formData.title || 'Banner Title'}
                </Text>
                
                <Text style={bannerPreviewStyles.previewDescription}>
                  {formData.description || 'Banner Description'}
                </Text>
                
                <Text style={bannerPreviewStyles.previewPrice}>
                  {formData.price || 'Starting ₹1,999'}
                </Text>
                
                <TouchableOpacity style={bannerPreviewStyles.previewButton}>
                  <Text style={bannerPreviewStyles.previewButtonText}>
                    {formData.buttonText || 'Shop Now'}
                  </Text>
                </TouchableOpacity>
              </View>
              
              {selectedFile ? (
                <View style={bannerPreviewStyles.previewImageContainer}>
                  <Image 
                    source={{ uri: selectedFile.uri }} 
                    style={bannerPreviewStyles.previewImage}
                    resizeMode="cover"
                  />
                </View>
              ) : (
                <View style={bannerPreviewStyles.previewImagePlaceholder}>
                  <Text style={bannerPreviewStyles.placeholderImageText}>No Image</Text>
                </View>
              )}
            </LinearGradient>
            
            <TouchableOpacity 
              style={bannerPreviewStyles.closeButton}
              onPress={() => setShowPreview(false)}
            >
              <Text style={bannerPreviewStyles.closeButtonText}>Close Preview</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddEditBannerScreen;