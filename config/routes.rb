Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "home#home"

  get "about_me", to: "home#about_me"

  get "work", to: "work#index"
end
