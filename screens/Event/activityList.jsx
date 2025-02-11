import React, { useState, useEffect } from 'react';
import {
  ScrollView, RefreshControl, Image, Dimensions,
  Pressable,
} from 'react-native';
import {
  Title, Card,
} from 'react-native-paper';
import {
  Ionicons, AntDesign,
} from '@expo/vector-icons';
import {
  Box, Divider, HStack, Text,
} from 'native-base';
import { getAuth, signOut } from 'firebase/auth';
import styles from './style_folder/Styles_activityList';
import ActiveController from '../../controller/Active';
import { SearchHeader } from './components/SearchHeader';

function List({ navigation }) {
  const auth = getAuth();
  const [active1, setActive1] = useState([]);
  const [active2, setActive2] = useState([]);
  const SearchBarHeader = () => SearchHeader({ navigation });
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    ActiveController.getHangOutActive().then((res) => {
      setActive1(res);
    }).then().catch((err) => {
      throw err;
    });
    ActiveController.getEventActive().then((res) => {
      setActive2(res);
    }).catch((err) => {
      throw err;
    });
    setRefreshing(false);
  };

  useEffect(() => {
    const focusHandler = navigation.addListener('focus', () => {
      onRefresh();
    });
    return focusHandler;
  }, [navigation]);
  return (
    <Box style={styles.container} safeArea>
      <SearchBarHeader />

      <Box style={styles.body}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={(
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          )}
        >
          <Box>
            <Box style={{ flex: 1 }}>
              <Box style={styles.more}>
                <Box style={{ width: '100%' }}>
                  <HStack style={{ flexDirection: 'row' }}>
                    <Text style={styles.title}>近期揪人</Text>
                    <Text style={styles.showMore} onPress={() => { navigation.navigate('moreHang'); }}>顯示更多</Text>
                  </HStack>
                </Box>
                <Divider style={{ marginTop: 5 }} bg="#BFBFBF" /* my=margin-top and margin-bottom */ />
              </Box>
              <Box style={styles.cardArea}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                >
                  <Box style={{
                    marginRight: Dimensions.get('window').width * 0.0694,
                    flexDirection: 'row',
                  }}
                  >
                    {active1.map(({
                      id, name, imageUri1, place, startTimeWeekday,
                    }) => (
                      <Card
                        key={id}
                        style={styles.Card}
                        onPress={() => {
                          navigation.navigate('details', { Cd: id, prepage: 'list' });
                        }}
                      >
                        <Card.Content>
                          <Box style={{ flexDirection: 'column', margin: -15 }}>
                            <Box style={{ aspectRatio: 1 }}>
                              <Image
                                style={styles.pic}
                                source={{
                                  uri: imageUri1,
                                }}
                              />
                            </Box>
                            <Title style={styles.CardTitle}>
                              {name}
                            </Title>
                            <Box>
                              <Box style={styles.CardDetails}>
                                <AntDesign
                                  name="clockcircleo"
                                  size={12}
                                  color="rgba(40, 82, 122, 0.65)"
                                />
                                <Text style={styles.CardText}>
                                  {'  '}
                                  {startTimeWeekday}
                                </Text>
                              </Box>
                              <Box style={styles.CardDetails}>
                                <Ionicons
                                  name="location-outline"
                                  size={15}
                                  color="rgba(40, 82, 122, 0.65)"
                                />
                                <Text style={styles.CardText}>
                                  {' '}
                                  {place}
                                </Text>
                              </Box>
                            </Box>
                          </Box>
                        </Card.Content>
                      </Card>
                    ))}
                  </Box>
                </ScrollView>
              </Box>
            </Box>
            <Box>
              <Box style={{ flex: 1 }}>
                <Box style={styles.more}>
                  <Box style={{ width: '100%' }}>
                    <HStack style={{ flexDirection: 'row' }}>
                      <Text style={styles.title}>熱門活動</Text>
                      <Text style={styles.showMore} onPress={() => { navigation.navigate('more'); }}>顯示更多</Text>
                    </HStack>
                  </Box>
                  <Divider style={{ marginTop: 5 }} bg="#BFBFBF" /* my=margin-top and margin-bottom */ />
                </Box>
                <Box style={styles.cardArea}>
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  >
                    <Box style={{
                      marginRight: Dimensions.get('window').width * 0.0694,
                      flexDirection: 'row',
                    }}
                    >
                      {active2.map(({
                        id, name, imageUri1, place, startTimeWeekday,
                      }) => (
                        <Card
                          key={id}
                          style={styles.Card}
                          onPress={() => {
                            navigation.navigate('details', { Cd: id, prepage: 'list' });
                          }}
                        >
                          <Card.Content>
                            <Box style={{ flexDirection: 'column', margin: -15 }}>
                              <Box style={{ aspectRatio: 1 }}>
                                <Image
                                  style={styles.pic}
                                  source={{
                                    uri: imageUri1,
                                  }}
                                />
                              </Box>
                              <Title style={styles.CardTitle}>
                                {name}
                              </Title>
                              <Box style={styles.CardDetails}>
                                <AntDesign
                                  name="clockcircleo"
                                  size={12}
                                  color="rgba(40, 82, 122, 0.65)"
                                />
                                <Text style={styles.CardText}>
                                  {'  '}
                                  {startTimeWeekday}
                                </Text>
                              </Box>
                              <Box style={styles.CardDetails}>
                                <Ionicons
                                  name="location-outline"
                                  size={15}
                                  color="rgba(40, 82, 122, 0.65)"
                                />
                                <Text style={styles.CardText}>
                                  {' '}
                                  {place}
                                </Text>
                              </Box>
                            </Box>
                          </Card.Content>
                        </Card>
                      ))}
                    </Box>
                  </ScrollView>
                </Box>
              </Box>
            </Box>
          </Box>
          <Pressable
            style={{
              margin: 50, backgroundColor: 'yellow', height: 100, justifyContent: 'center',
            }}
            onPress={() => {
              signOut(auth).then(() => {
                // Sign-out successful.
                console.log('Sign-out successful.');
              }).catch((error) => {
                throw error;
              });
            }}
          >
            <Text style={{ alignSelf: 'center' }}>
              登出
            </Text>
          </Pressable>
        </ScrollView>
      </Box>

    </Box>
  );
}

export default List;
