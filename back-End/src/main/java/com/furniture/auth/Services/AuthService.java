package com.furniture.auth.Services;

import com.furniture.auth.entities.User;
import com.furniture.auth.entities.UserRole;
import com.furniture.auth.repositories.UserRepository;
import com.furniture.auth.utils.AuthResponse;
import com.furniture.auth.utils.LoginRequest;
import com.furniture.auth.utils.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final RefreshTokenService refreshTokenService;
    private final AuthenticationManager authenticationManager;

    public AuthResponse register(RegisterRequest registerRequest) {
        var user = User.builder()
                .email(registerRequest.getEmail())
                .username(registerRequest.getUsername())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .role(UserRole.USER)
                .build();

        User savedUser = userRepository.save(user);

        // Generate JWT token with userRole and email ID
        var accessToken = jwtService.generateToken(savedUser);
        var refreshToken = refreshTokenService.createRefreshToken(savedUser.getEmail());

        return AuthResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken.getRefreshToken())
                .build();
    }



    public ResponseEntity<?> login(LoginRequest loginRequest) {
        // Find user by email
        Optional<User> optionalUser = userRepository.findByEmail(loginRequest.getEmail());

        // Check if user exists
        if (optionalUser.isEmpty()) {
            String message = "Email not registered.";
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(message);
        }

        User user = optionalUser.get();

        // Authenticate user
        try {
            // Authenticate user
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequest.getEmail(),
                            loginRequest.getPassword()
                    )
            );
        } catch (BadCredentialsException e) {
            String message = "Invalid email or password.";
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(message);
        }

        // Check if user is verified
        if (!user.isVerified()) {
            String message = "User is not verified! Please verify your email.";
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(message);
        }




        // Generate tokens
        String accessToken = jwtService.generateToken(user);
        String refreshToken = refreshTokenService.createRefreshToken(loginRequest.getEmail()).getRefreshToken();

        // Return AuthResponse
        return ResponseEntity.ok(AuthResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build());
    }

}
