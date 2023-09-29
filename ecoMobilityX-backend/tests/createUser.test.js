import firebase from 'firebase/app';
import 'firebase/auth';
import { crearUsuario } from './auth';

// Mock de la función createUserWithEmailAndPassword de Firebase
jest.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: jest.fn(),
}));

describe('crearUsuario', () => {
  it('crea un usuario correctamente', async () => {
    // Configura el mock para que devuelva una promesa resuelta
    firebase.auth().createUserWithEmailAndPassword.mockResolvedValueOnce({
      user: {
        uid: 'usuario-id-123',
        email: 'ejemplo@correo.com',
      },
    });

    // Llama a la función que quieres probar
    const usuario = await crearUsuario('ejemplo@correo.com', 'contraseña123');

    // Verifica si la función de Firebase fue llamada correctamente
    expect(firebase.auth().createUserWithEmailAndPassword).toHaveBeenCalledWith(
      'ejemplo@correo.com',
      'contraseña123'
    );

    // Verifica si la función devuelve el usuario esperado
    expect(usuario).toEqual({
      uid: 'usuario-id-123',
      email: 'ejemplo@correo.com',
    });
  });

  it('maneja errores al crear un usuario', async () => {
    // Configura el mock para que devuelva una promesa rechazada
    firebase.auth().createUserWithEmailAndPassword.mockRejectedValueOnce(new Error('Error al crear usuario'));

    // Llama a la función que quieres probar y maneja el error
    await expect(crearUsuario('ejemplo@correo.com', 'contraseña123')).rejects.toThrow('Error al crear usuario');

    // Verifica si la función de Firebase fue llamada correctamente
    expect(firebase.auth().createUserWithEmailAndPassword).toHaveBeenCalledWith(
      'ejemplo@correo.com',
      'contraseña123'
    );
  });
});