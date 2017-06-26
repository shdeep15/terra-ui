class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :set_dir, :set_locale

  private

  def set_dir
    #if parameter set, elseif previously set, else default
    session[:select_dir] = params[:select_dir].presence || session[:select_dir].presence || 'ltr'
    @dir = session[:select_dir]
  end

  def set_locale
    #if parameter set, elseif previously set, else default
    session[:select_locale] = params[:select_locale].presence || session[:select_locale].presence || I18n.locale
    I18n.locale = session[:select_locale]
  end
end



