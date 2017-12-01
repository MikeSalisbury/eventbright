Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create, :update] do
      resources :events, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :events, only: [:index, :show, :create, :update, :destroy] do
    end
    resources :bookmarks, only: [:index, :create, :destroy]
    resources :registrations, only: [:index, :create, :destroy]
  end

get '/api/email/', to: 'api/users#email', as: 'emailCheck',
 defaults: {format: :json}

post '/api/filteredindex/', to: 'api/events#filteredindex',
 as: 'filterIndex', defaults: {format: :json}

end
