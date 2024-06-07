class DiapersController < ApplicationController
    before_action :authenticate_user!
    # before_action :current_activity
    
      
    
        def new
            @diaper = Diaper.new
        end
    
        def create
            @diaper = Diaper.new params.require(:diaper)
            .permit(
              :title,
              :note
            )
            @diaper.activity = Activity.find_by_user_id(@current_user)
            if @diaper.save
                flash[:success] = "Answer successfully created"
                 redirect_to @diaper
            end
        end
    
        def show
         
            @diaper = Diaper.find params[:id]
            if @diaper.activity.user != current_user
                redirect_to activities_path
            end
        end
    
        def edit
            @diaper = Diaper.find params[:id]
            if @diaper.activity.user != current_user
                redirect_to activities_path
            end
        end
    
        def update
            @diaper = Diaper.find params[:id]
            if @diaper.update(diaper_params)
                flash[:success] = "Question successfully updated"
                redirect_to @diaper
                # redirect_to question_path(@question)
                # ^^older syntax
              else
                flash[:error] = "Something went wrong"
                render :edit, status: 303 
            end
        end
    
        def destroy
            @diaper = Diaper.find params[:id]
            @diaper.destroy
            redirect_to activities_path
          end
    
    
    private
    def diaper_params
        params.require(:diaper).permit(:note)
      end
end
