Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create, :update]
    resource :session, only: [:create, :destroy]
  end

get '/api/email/', to: 'api/users#email', as: 'emailCheck',
 defaults: {format: :json}

end
