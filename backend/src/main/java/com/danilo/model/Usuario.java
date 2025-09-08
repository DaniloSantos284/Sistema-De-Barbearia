package com.danilo.model;

import jakarta.persistence.*;

@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String senha;

    public Usuario() {
        // Construtor padrão
    }

    public Usuario (String name, String email, String senha) {
        this.name = name; // construtor com parâmetros
        this.email = email;
        this.senha = senha;
    }

    // Getters obrigatórios
    public Integer getId() { return id; }
    public String getName() { return name; }
    public String getEmail() { return email; }
    public String getSenha() { return senha; }

    // Setters obrigatórios
    public void setName(String name) { this.name = name; }
    public void setEmail(String email) { this.email = email; }
    public void setSenha(String senha) { this.senha = senha; }

    @Override
    public String toString() {
        return "Usuario{" +
                "id{" + id +
                ", nome ='" + name + '\'' +
                ", email ='" + email +'\'' +
                '}'; // não mostra a senha por segurança
    }
}
