import { StyleSheet } from 'react-native';

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
  small: 10,
  medium: 15,
  large: 20
};

export const typography = {
  small: 16,
  medium: 18,
  large: 20
};

export const styles = StyleSheet.create({
  // Componentes base
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.white,
  },

  contentArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 5
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
    color: colors.black,
    marginTop: 5
  },

  titulo: {
    fontSize: typography.medium,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: spacing.medium,
  },

  logo: {
    width: 200,
    height: 200,
    marginBottom: spacing.large,
    borderRadius: 8,
  },

  cabecalhoImg: {
    height: 60,
    width: 160
  },

  cabecalhoArea: {
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: spacing.medium
  },

  // Componentes de formulário
  inputArea: {
    width: '90%',
    marginBottom: spacing.small,
  },

  pickerContainer: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    overflow: 'hidden',
    height: 40,
    justifyContent: 'center'
  },

  input: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    height: 40,
    paddingHorizontal: spacing.small,
    color: colors.white,
  },

  mobilePicker: {
    width: '100%', 
    borderRadius: 8, 
    borderWidth: 1, 
    alignItems: 'center', 
    marginTop: 5, 
    marginBottom: 5,
    backgroundColor: colors.primary
  },

  desktopPicker: {
    height: 40,
    width: '100%', 
    borderRadius: 8, 
    borderWidth: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5, 
    marginBottom: 10,
    color: colors.white
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
    width: '50%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.small,
  },

  teste: {
    backgroundColor: colors.secondary,
    borderRadius: 8,
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.medium,
    marginBottom: spacing.small,
  },

  buttonText: {
    fontSize: typography.large,
    color: colors.white,
  },
});