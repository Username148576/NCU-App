import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  IconButton,
} from 'react-native-paper';
import Styles from '../Styles';

function First({ navigation }) {
  return (
    <SafeAreaView style={Styles.background}>
      <ScrollView>
        <View>
          <Text style={{
            textAlign: 'center', backgroundColor: '#476685', color: 'white', height: 50, width: '100%', fontSize: 20, textAlignVertical: 'center', lineHeight: 50,
          }}
          >
            公車動態
          </Text>
          <IconButton
            onPress={() => navigation.navigate('地圖')}
            icon="close"
            size={20}
            style={{
              left: 320,
              top: 0,
              position: 'absolute',
            }}
          />
        </View>

        <Text style={{ fontSize: 5 }}>{'\n'}</Text>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Bus132')}
            style={{ width: '100%', backgroundColor: 'white' }}
          >
            <View>
              <Text style={{
                textAlign: 'center', top: 15, fontSize: 28, color: '#476685',
              }}
              >
                132
              </Text>
            </View>
            <Text style={{ fontSize: 10 }}>{'\n'}</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 5 }}>{'\n'}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Bus133')}
            style={{ width: '100%', backgroundColor: 'white' }}
          >
            <View>
              <Text style={{
                textAlign: 'center', top: 15, fontSize: 28, color: '#476685',
              }}
              >
                133
              </Text>
            </View>
            <Text style={{ fontSize: 10 }}>{'\n'}</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 5 }}>{'\n'}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Bus172')}
            style={{ width: '100%', backgroundColor: 'white' }}
          >
            <View>
              <Text style={{
                textAlign: 'center', top: 15, fontSize: 28, color: '#476685',
              }}
              >
                172
              </Text>
            </View>
            <Text style={{ fontSize: 10 }}>{'\n'}</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 5 }}>{'\n'}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Bus173')}
            style={{ width: '100%', backgroundColor: 'white' }}
          >
            <View>
              <Text style={{
                textAlign: 'center', top: 15, fontSize: 28, color: '#476685',
              }}
              >
                173
              </Text>
            </View>
            <Text style={{ fontSize: 10 }}>{'\n'}</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 5 }}>{'\n'}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Bus216')}
            style={{ width: '100%', backgroundColor: 'white' }}
          >
            <View>
              <Text style={{
                textAlign: 'center', top: 15, fontSize: 28, color: '#476685',
              }}
              >
                216
              </Text>
            </View>
            <Text style={{ fontSize: 10 }}>{'\n'}</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 5 }}>{'\n'}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Bus9025A')}
            style={{ width: '100%', backgroundColor: 'white' }}
          >
            <View>
              <Text style={{
                textAlign: 'center', top: 15, fontSize: 28, color: '#476685',
              }}
              >
                9025A
              </Text>
            </View>
            <Text style={{ fontSize: 10 }}>{'\n'}</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 5 }}>{'\n'}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('UST')}
            style={{ width: '100%', backgroundColor: 'white' }}
          >
            <View>
              <Text style={{
                textAlign: 'center', top: 15, fontSize: 28, color: '#476685',
              }}
              >
                台聯大專車
              </Text>
            </View>
            <Text style={{ fontSize: 10 }}>{'\n'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default First;
