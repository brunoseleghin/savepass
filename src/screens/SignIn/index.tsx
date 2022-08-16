import React from 'react';
import { Platform, Alert } from 'react-native';
import {
  Container,
  TitleWrapper,
  Logo,
  Header,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from './styles';

import LogoSavePass from '../../assets/logo.png';
import GoogleSvg from '../../assets/google.svg';
import AppleSvg from '../../assets/apple.svg';

import { SignInSocialButton } from '../../components/SignInSocialButton';
import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const { signInWithGoogle } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();

    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível conectar a conta Google');
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Logo source={LogoSavePass} />

          <Title>
            Salve seus {'\n'}
            logins de forma {'\n'}
            simples e segura
          </Title>

          <SignInTitle>
            Faça seu login com {'\n'}
            uma das contas abaixo
          </SignInTitle>
        </TitleWrapper>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            title='Entrar com Google'
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />

          {/*Platform.OS === 'ios' &&*/
            <SignInSocialButton
              title='Entrar com Apple'
              svg={AppleSvg}
            />
          }
        </FooterWrapper>
      </Footer>
    </Container>
  );
}