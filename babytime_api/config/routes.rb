Rails.application.routes.draw do
  # get 'sessions/new'
  # get 'sessions/create'
  # get 'sessions/destroy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # 

  root "welcome#index"
  resources :welcome
  resources :diapers, only: [:new, :create, :destroy, :edit, :update, :show]
  resources :sleeps, only: [:new, :create, :destroy, :edit, :update, :show]
  resources :formulas, only: [:new, :create, :destroy, :edit, :update, :show]
  resources :activities
  resource :session, only:[:new, :create, :destroy]
  resources :users, only: [:new, :create] do
    
  end
  resources :babies 

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :activities, only: [:index, :create, :show]
      resource :session, only:[:create, :destroy]
      resources :sleeps, only: [:new, :create, :destroy, :edit, :update, :show]
      resources :diapers, only: [:new, :create, :destroy, :edit, :update, :show]
      resources :formulas, only: [:new, :create, :destroy, :edit, :update, :show]
      resources :users, only: [:create] do
        #get('users/current', {to: 'users#current})
        #default url will be api/v1/users/:id/current
        get :current, on: :collection
      end
      resources :babies 
    end
  end
end
