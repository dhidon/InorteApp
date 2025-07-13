import { StyleSheet, Platform, Dimensions } from 'react-native';

// Detectar se está em web ou mobile
const isWeb = Platform.OS === 'web';
const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';
const { width, height } = Dimensions.get('window');

// Variáveis globais
export const colors = {
  primary: '#00B1AC',
  secondary: '#007C7C',
  white: '#FFF',
  black: '#000',
  gray: '#666',
  lightGray: '#EEE'
};

export const spacing = {
  small: isWeb ? 15 : 10,
  medium: isWeb ? 20 : 15,
  large: isWeb ? 25 : 20
};

export const typography = {
  small: isWeb ? 18 : 16,
  medium: isWeb ? 20 : 18,
  large: isWeb ? 22 : 20
};

// Estilos condicionais baseados na plataforma
const getPlatformStyles = () => {
  if (isWeb) {
    return {
      container: {
        width: 800,
        marginHorizontal: 'auto',
      },
      contentArea: {
        paddingHorizontal: 30,
        gap: 10,
      },
      inputArea: {
        width: '100%',
        maxWidth: 600,
        marginBottom: spacing.medium,
      },
      buttonArea: {
        width: '30%',
        minWidth: 200,
        height: 50,
        cursor: 'pointer',
      },
      teste: {
        width: '100%',
        maxWidth: 400,
        height: 50,
        cursor: 'pointer',
      }
    };
  } else {
    return {
      container: {
        width: '100%',
        marginTop: 35
      },
      contentArea: {
        width: '100%',
        gap: 5,
      },
      inputArea: {
        width: '90%',
        marginBottom: spacing.small,
      },
      buttonArea: {
        width: '50%',
        height: 40,
      },
      teste: {
        width: '100%',
        height: 40,
      }
    };
  }
};

const platformStyles = getPlatformStyles();

export const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    ...platformStyles.container,
    paddingBottom: 20,
    alignItems: 'center'
  },

  contentArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...platformStyles.contentArea
  },

  userInfoArea:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },

  // Estilos para tela de login
  loginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },

  normal: {
    fontSize: typography.medium,
    color: '#FFF',
    marginTop: 5
  },

  titulo: {
    fontSize: typography.medium,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: spacing.small,
  },

  logo: {
    width: isWeb ? 250 : 200,
    height: isWeb ? 250 : 200,
    marginBottom: spacing.large,
    borderRadius: 8,
  },

  cabecalhoImg: {
    height: isWeb ? 80 : 60,
    width: isWeb ? 200 : 160
  },

  cabecalhoArea: {
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: spacing.medium
  },

  // Componentes de formulário
  inputArea: {
    marginBottom: spacing.small,
    ...platformStyles.inputArea,
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 10
  },

  pickerContainer: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    overflow: 'hidden',
    height: isWeb ? 40 : 40,
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center'
  },

  input: {
    backgroundColor: colors.secondary,
    borderRadius: 8,
    height: isWeb ? 50 : 40,
    paddingHorizontal: spacing.small,
    color: colors.white,
  },

  // Componentes de navegação
  linkArea: {
    // Estilos vazios mantidos para referência
  },

  link: {
    fontSize: typography.small,
    color: colors.black,
  },

  // Componentes de botão
  buttonArea: {
    backgroundColor: colors.secondary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.small,
    ...platformStyles.buttonArea,
  },

  buttonText: {
    fontSize: typography.large,
    color: colors.white,
  },
});

// Exportar variáveis úteis para uso em componentes
export const platformInfo = {
  isWeb,
  isMobile,
  screenWidth: width,
  screenHeight: height
};